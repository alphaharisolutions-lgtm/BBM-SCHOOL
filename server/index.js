const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Helper to log messages to the file we can read
function log(message) {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync(path.join(__dirname, '../server_debug.log'), logMessage);
  console.log(message);
}

function logError(message, error) {
  const logMessage = `[${new Date().toISOString()}] ${message}: ${error.message}\n${error.stack}\n`;
  fs.appendFileSync(path.join(__dirname, '../server_debug.log'), logMessage);
  console.error(message, error);
}

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Log every request to see if it reaches the server
app.use((req, res, next) => {
  log(`Request received: ${req.method} ${req.url}`);
  next();
});

// Ensure directories exist
const dataDir = path.join(__dirname, 'data');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

const resultsFile = path.join(dataDir, 'results.json');
const galleryFile = path.join(dataDir, 'gallery.json');

const defaultGallery = [
  {
    id: "g1",
    title: "Annual Sports Meet",
    category: "Events",
    imageUrl: "https://picsum.photos/seed/sports/800/600",
    createdAt: new Date().toISOString()
  },
  {
    id: "g2",
    title: "Science & Innovation Lab",
    category: "Labs",
    imageUrl: "https://picsum.photos/seed/scilab/800/600",
    createdAt: new Date().toISOString()
  },
  {
    id: "g3",
    title: "Cultural Festival Celebrations",
    category: "Cultural",
    imageUrl: "https://picsum.photos/seed/cultural/800/600",
    createdAt: new Date().toISOString()
  },
  {
    id: "g4",
    title: "Graduation & Farewell Ceremony",
    category: "Graduation",
    imageUrl: "https://picsum.photos/seed/grad/800/600",
    createdAt: new Date().toISOString()
  },
  {
    id: "g5",
    title: "Independence Day Festivities",
    category: "Celebrations",
    imageUrl: "https://picsum.photos/seed/indep/800/600",
    createdAt: new Date().toISOString()
  }
];

// Helper to read results
const getResults = () => {
  if (!fs.existsSync(resultsFile)) return [];
  const data = fs.readFileSync(resultsFile, 'utf8');
  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

// Helper to save results
const saveResults = (results) => {
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
};

// Helper to read gallery
const getGallery = () => {
  if (!fs.existsSync(galleryFile)) {
    saveGallery(defaultGallery);
    return defaultGallery;
  }
  const data = fs.readFileSync(galleryFile, 'utf8');
  try {
    const parsed = JSON.parse(data);
    return parsed && parsed.length > 0 ? parsed : defaultGallery;
  } catch (e) {
    return defaultGallery;
  }
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
  try {
    res.json(getResults());
  } catch (error) {
    logError('Error getting results', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/results', upload.single('photo'), (req, res) => {
  try {
    log(`Saving result for ${req.body.name}`);
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
    log(`Result saved with ID: ${newResult.id}`);
    res.status(201).json(newResult);
  } catch (error) {
    logError('Error saving result', error);
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/results/:id', (req, res) => {
  try {
    const results = getResults();
    const filtered = results.filter(r => r.id !== req.params.id);
    saveResults(filtered);
    res.json({ success: true });
  } catch (error) {
    logError('Error deleting result', error);
    res.status(500).json({ error: error.message });
  }
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
    logError('Error updating result', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/gallery', (req, res) => {
  try {
    res.json(getGallery());
  } catch (error) {
    logError('Error getting gallery', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/gallery', upload.single('image'), (req, res) => {
  try {
    log(`Saving gallery item: ${req.body.title}`);
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
  } catch (error) {
    logError('Error saving gallery item', error);
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/gallery/:id', (req, res) => {
  try {
    const gallery = getGallery();
    const filtered = gallery.filter(g => g.id !== req.params.id);
    saveGallery(filtered);
    res.json({ success: true });
  } catch (error) {
    logError('Error deleting gallery item', error);
    res.status(500).json({ error: error.message });
  }
});

// Site Media Management API
const mediaFile = path.join(dataDir, 'media.json');

const defaultMedia = [
  { id: 'sm1', title: 'Official School Logo', category: 'Logo & Branding', imageUrl: '/logo.png', description: 'Primary BBM High School Logo badge used across header and official documents', createdAt: new Date().toISOString() },
  { id: 'sm2', title: 'BBM Main Campus View', category: 'Hero & Campus', imageUrl: '/school.jpeg', description: 'Main campus building view in Naidupet, Khammam', createdAt: new Date().toISOString() },
  { id: 'sm3', title: 'IIT Foundation Banner', category: 'Programs & Pre-Primary', imageUrl: '/iit_coaching.png', description: 'Coaching banner for Class VI-IX IIT Foundation program', createdAt: new Date().toISOString() },
  { id: 'sm4', title: 'Medical Foundation Banner', category: 'Programs & Pre-Primary', imageUrl: '/medical_coaching.png', description: 'Medical Foundation guidance banner for competitive exams', createdAt: new Date().toISOString() },
  { id: 'sm5', title: 'Director - Sri G. Kantha Rao', category: 'Leadership & Staff', imageUrl: '/sir.jpeg', description: 'Gurram Kantha Rao Garu - Director of BBM High School', createdAt: new Date().toISOString() },
  { id: 'sm6', title: 'Correspondent - Smt. G. Nagamani', category: 'Leadership & Staff', imageUrl: '/madam.jpeg', description: 'Gurram Nagamani Garu - Correspondent of BBM High School', createdAt: new Date().toISOString() },
  { id: 'sm7', title: 'Gents Faculty Team', category: 'Leadership & Staff', imageUrl: '/gents.jpeg', description: 'Gents teaching staff and academic department leads', createdAt: new Date().toISOString() },
  { id: 'sm8', title: 'Ladies Faculty Team', category: 'Leadership & Staff', imageUrl: '/ladies.jpeg', description: 'Ladies teaching staff and early childhood educators', createdAt: new Date().toISOString() },
  { id: 'sm9', title: 'Transportation Bus Fleet', category: 'Transportation & Bus', imageUrl: '/bus.jpeg', description: 'Safe school transportation bus serving all routes across Khammam', createdAt: new Date().toISOString() },
];

const getMedia = () => {
  if (!fs.existsSync(mediaFile)) {
    saveMedia(defaultMedia);
    return defaultMedia;
  }
  try {
    return JSON.parse(fs.readFileSync(mediaFile, 'utf8'));
  } catch (e) {
    return defaultMedia;
  }
};

const saveMedia = (media) => {
  fs.writeFileSync(mediaFile, JSON.stringify(media, null, 2));
};

app.get('/api/media', (req, res) => {
  try {
    res.json(getMedia());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/media', upload.single('image'), (req, res) => {
  try {
    const media = getMedia();
    const newItem = {
      id: 'sm_' + Date.now().toString(),
      title: req.body.title || 'Untitled Image',
      category: req.body.category || 'General',
      description: req.body.description || '',
      imageUrl: req.file ? `/uploads/${req.file.filename}` : (req.body.imageUrl || '/logo.png'),
      createdAt: new Date().toISOString()
    };
    media.unshift(newItem);
    saveMedia(media);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/media/:id', upload.single('image'), (req, res) => {
  try {
    const media = getMedia();
    const index = media.findIndex(m => m.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Media not found' });

    const existing = media[index];
    const updated = {
      ...existing,
      title: req.body.title || existing.title,
      category: req.body.category || existing.category,
      description: req.body.description !== undefined ? req.body.description : existing.description,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : (req.body.imageUrl || existing.imageUrl),
    };
    media[index] = updated;
    saveMedia(media);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/media/:id', (req, res) => {
  try {
    const media = getMedia();
    const filtered = media.filter(m => m.id !== req.params.id);
    saveMedia(filtered);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve static frontend files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Fallback to index.html for SPA routing
app.use((req, res) => {
  if (req.url.startsWith('/api')) {
    log(`API Route not found: ${req.method} ${req.url}`);
    return res.status(404).json({ error: 'API route not found' });
  }
  
  const indexPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  log(`Server running on port ${PORT}`);
});
