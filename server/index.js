const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure directories exist
const dataDir = path.join(__dirname, 'data');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

const resultsFile = path.join(dataDir, 'results.json');
const galleryFile = path.join(dataDir, 'gallery.json');

// Helper to read results
const getResults = () => {
  if (!fs.existsSync(resultsFile)) return [];
  const data = fs.readFileSync(resultsFile, 'utf8');
  return JSON.parse(data);
};

// Helper to save results
const saveResults = (results) => {
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
};

// Helper to read gallery
const getGallery = () => {
  if (!fs.existsSync(galleryFile)) return [];
  const data = fs.readFileSync(galleryFile, 'utf8');
  return JSON.parse(data);
};

// Helper to save gallery
const saveGallery = (gallery) => {
  fs.writeFileSync(galleryFile, JSON.stringify(gallery, null, 2));
};

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Routes
app.get('/api/results', (req, res) => {
  res.json(getResults());
});

app.post('/api/results', upload.single('photo'), (req, res) => {
  const results = getResults();
  const newResult = {
    id: Date.now().toString(),
    name: req.body.name,
    marks: req.body.marks,
    year: req.body.year,
    photo: req.file ? `/uploads/${req.file.filename}` : 'https://picsum.photos/seed/student/200/200'
  };
  results.unshift(newResult);
  saveResults(results);
  res.status(201).json(newResult);
});

app.delete('/api/results/:id', (req, res) => {
  const results = getResults();
  const filtered = results.filter(r => r.id !== req.params.id);
  saveResults(filtered);
  res.json({ success: true });
});

app.put('/api/results/:id', upload.single('photo'), (req, res) => {
  try {
    const results = getResults();
    const index = results.findIndex(r => r.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Result not found' });

    const updatedResult = {
      ...results[index],
      name: req.body.name || results[index].name,
      marks: req.body.marks || results[index].marks,
      year: req.body.year || results[index].year,
    };

    if (req.file) {
      updatedResult.photo = `/uploads/${req.file.filename}`;
    }

    results[index] = updatedResult;
    saveResults(results);
    res.json(updatedResult);
  } catch (error) {
    console.error('Error updating result:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/gallery', (req, res) => {
  res.json(getGallery());
});

app.post('/api/gallery', upload.single('image'), (req, res) => {
  const gallery = getGallery();
  const newItem = {
    id: Date.now().toString(),
    title: req.body.title,
    category: req.body.category,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : 'https://picsum.photos/seed/gallery/800/600',
    createdAt: new Date().toISOString()
  };
  gallery.unshift(newItem);
  saveGallery(gallery);
  res.status(201).json(newItem);
});

app.delete('/api/gallery/:id', (req, res) => {
  const gallery = getGallery();
  const filtered = gallery.filter(g => g.id !== req.params.id);
  saveGallery(filtered);
  res.json({ success: true });
});

// Serve static frontend files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Fallback to index.html for SPA routing
app.use((req, res) => {
  if (req.url.startsWith('/api')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  
  const indexPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  
  // Fallback for development (Vite serves the frontend)
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
