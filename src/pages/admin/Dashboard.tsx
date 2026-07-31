import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  UserPlus, 
  Trophy, 
  Image as ImageIcon, 
  LogOut, 
  CheckCircle, 
  XCircle, 
  Trash2,
  Pencil,
  Plus,
  Upload,
  Loader2,
  Menu as MenuIcon,
  X,
  Copy,
  Search,
  Filter,
  SlidersHorizontal,
  FolderOpen
} from 'lucide-react';
import { storage } from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Enquiry, Admission, Result, GalleryItem, SiteMediaItem } from '@/types';

const MEDIA_CATEGORIES = [
  'All Sections',
  'Logo & Branding',
  'Hero & Campus',
  'Programs & Pre-Primary',
  'Facilities & Labs',
  'Leadership & Staff',
  'Transportation & Bus',
  'Gallery & Events',
  'Results & Alumni'
] as const;

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('enquiries');
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [siteMedia, setSiteMedia] = useState<SiteMediaItem[]>([]);
  
  const [isUploading, setIsUploading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddResultOpen, setIsAddResultOpen] = useState(false);
  const [isAddGalleryOpen, setIsAddGalleryOpen] = useState(false);
  const [isAddMediaOpen, setIsAddMediaOpen] = useState(false);
  
  const [galleryCategory, setGalleryCategory] = useState<string>('Events');
  const [mediaCategory, setMediaCategory] = useState<string>('Logo & Branding');
  const [selectedMediaCategory, setSelectedMediaCategory] = useState<string>('All Sections');
  const [searchMediaQuery, setSearchMediaQuery] = useState<string>('');
  
  const [editingMediaItem, setEditingMediaItem] = useState<SiteMediaItem | null>(null);

  useEffect(() => {
    if (!storage.isAdminLoggedIn()) {
      navigate('/admin/login');
      return;
    }
    loadData();
  }, [navigate]);

  const loadData = async () => {
    setEnquiries(storage.getEnquiries());
    setAdmissions(storage.getAdmissions());
    setResults(await storage.getResults());
    setGallery(await storage.getGallery());
    setSiteMedia(await storage.getSiteMedia());
  };

  const handleLogout = () => {
    storage.logout();
    navigate('/admin/login');
  };

  const updateEnquiry = (id: string, status: Enquiry['status']) => {
    storage.updateEnquiryStatus(id, status);
    toast.success('Status updated');
    loadData();
  };

  const deleteEnquiry = (id: string) => {
    storage.deleteEnquiry(id);
    toast.success('Enquiry deleted');
    loadData();
  };

  const updateAdmission = (id: string, status: Admission['status']) => {
    storage.updateAdmissionStatus(id, status);
    toast.success(`Application ${status}`);
    loadData();
  };

  const deleteAdmission = (id: string) => {
    storage.deleteAdmission(id);
    toast.success('Application deleted');
    loadData();
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('Image link copied to clipboard!');
  };

  const filteredMedia = siteMedia.filter((item) => {
    const matchesCategory = selectedMediaCategory === 'All Sections' || item.category === selectedMediaCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchMediaQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchMediaQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchMediaQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { title: 'Total Enquiries', value: enquiries.length, icon: MessageSquare, color: 'text-blue-600' },
    { title: 'Total Admissions', value: admissions.length, icon: UserPlus, color: 'text-green-600' },
    { title: 'Top Results', value: results.length, icon: Trophy, color: 'text-yellow-600' },
    { title: 'Site Media Items', value: siteMedia.length, icon: ImageIcon, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col md:flex-row relative overflow-x-hidden">
      {/* Mobile Header */}
      <div className="md:hidden bg-primary text-primary-foreground p-4 flex items-center justify-between sticky top-0 z-50">
        <button 
          onClick={() => {
            setActiveTab('media');
            setIsSidebarOpen(false);
          }}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <img 
            src="/logo.png" 
            alt="BBM Logo" 
            className="w-8 h-8 object-contain bg-white rounded-md p-0.5"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold">BBM ADMIN MEDIA</span>
        </button>
        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <MenuIcon />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-primary text-primary-foreground p-6 flex flex-col transition-transform duration-300 md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <button 
          onClick={() => {
            setActiveTab('media');
            setIsSidebarOpen(false);
          }}
          className="hidden md:flex items-center gap-3 mb-12 hover:opacity-90 transition-opacity text-left"
        >
          <img 
            src="/logo.png" 
            alt="BBM Logo" 
            className="w-10 h-10 object-contain bg-white rounded-lg p-1"
            referrerPolicy="no-referrer"
          />
          <div>
            <span className="font-bold text-xl block leading-tight">BBM ADMIN</span>
            <span className="text-[10px] text-yellow-400 font-extrabold uppercase tracking-widest">Media Manager</span>
          </div>
        </button>

        <nav className="flex-grow space-y-2">
          <Button 
            variant={activeTab === 'enquiries' ? 'secondary' : 'ghost'} 
            className="w-full justify-start gap-3" 
            onClick={() => { setActiveTab('enquiries'); setIsSidebarOpen(false); }}
          >
            <MessageSquare size={18} /> Enquiries ({enquiries.length})
          </Button>
          <Button 
            variant={activeTab === 'admissions' ? 'secondary' : 'ghost'} 
            className="w-full justify-start gap-3" 
            onClick={() => { setActiveTab('admissions'); setIsSidebarOpen(false); }}
          >
            <UserPlus size={18} /> Admissions ({admissions.length})
          </Button>
          <Button 
            variant={activeTab === 'results' ? 'secondary' : 'ghost'} 
            className="w-full justify-start gap-3" 
            onClick={() => { setActiveTab('results'); setIsSidebarOpen(false); }}
          >
            <Trophy size={18} /> Results ({results.length})
          </Button>
          <Button 
            variant={activeTab === 'gallery' ? 'secondary' : 'ghost'} 
            className="w-full justify-start gap-3" 
            onClick={() => { setActiveTab('gallery'); setIsSidebarOpen(false); }}
          >
            <FolderOpen size={18} /> Gallery ({gallery.length})
          </Button>
          <Button 
            variant={activeTab === 'media' ? 'secondary' : 'ghost'} 
            className="w-full justify-start gap-3 bg-yellow-400/20 text-yellow-300 font-bold border border-yellow-400/30 hover:bg-yellow-400/30" 
            onClick={() => { setActiveTab('media'); setIsSidebarOpen(false); }}
          >
            <ImageIcon size={18} className="text-yellow-400" /> Media & Images ({siteMedia.length})
          </Button>
        </nav>

        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 hover:bg-white/10 text-red-300 hover:text-red-200 mt-auto pt-4 border-t border-white/10"
          onClick={handleLogout}
        >
          <LogOut size={18} /> Logout
        </Button>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 overflow-x-hidden">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-3xl border border-border shadow-sm">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">BBM High School Control Center</h1>
              <p className="text-sm text-muted-foreground">Manage website content, media images, enquiries, admissions & results</p>
            </div>
            <Button 
              onClick={() => setActiveTab('media')}
              className="bg-yellow-400 text-slate-950 hover:bg-yellow-300 font-bold rounded-2xl flex items-center gap-2 shadow-md shrink-0"
            >
              <ImageIcon size={18} /> Manage All Website Images
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <h3 className="text-2xl md:text-3xl font-bold mt-1">{stat.value}</h3>
                    </div>
                    <div className={`p-2 md:p-3 rounded-xl bg-secondary ${stat.color}`}>
                      <stat.icon size={20} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="overflow-x-auto pb-2 scrollbar-hide">
              <TabsList className="bg-white border border-border p-1 rounded-2xl inline-flex w-full sm:w-auto">
                <TabsTrigger value="media" className="rounded-xl font-bold flex-1 sm:flex-none">🖼️ Media & Site Images</TabsTrigger>
                <TabsTrigger value="enquiries" className="rounded-xl flex-1 sm:flex-none">Enquiries</TabsTrigger>
                <TabsTrigger value="admissions" className="rounded-xl flex-1 sm:flex-none">Admissions</TabsTrigger>
                <TabsTrigger value="results" className="rounded-xl flex-1 sm:flex-none">Results</TabsTrigger>
                <TabsTrigger value="gallery" className="rounded-xl flex-1 sm:flex-none">Gallery</TabsTrigger>
              </TabsList>
            </div>

            {/* TAB: MEDIA & SITE IMAGES MANAGER */}
            <TabsContent value="media">
              <Card className="rounded-3xl border border-border shadow-md">
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border pb-6">
                  <div>
                    <CardTitle className="text-2xl font-extrabold flex items-center gap-2">
                      <ImageIcon className="text-primary" /> Site Media & Image Manager
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Upload, edit, replace, or delete every image and description across all website sections.
                    </CardDescription>
                  </div>

                  {/* Add / Upload Media Button */}
                  <Dialog open={isAddMediaOpen} onOpenChange={setIsAddMediaOpen}>
                    <DialogTrigger asChild>
                      <Button className="rounded-2xl font-bold bg-primary text-white hover:bg-primary/90">
                        <Plus className="mr-2" size={18} /> Add / Upload New Image
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg rounded-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold">Add New Image to Website Media</DialogTitle>
                      </DialogHeader>
                      <form
                        onSubmit={async (e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const title = formData.get('title') as string;
                          const description = formData.get('description') as string;
                          const imageUrlInput = formData.get('imageUrl') as string;
                          const fileInput = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
                          const file = fileInput?.files?.[0];

                          if (!file && !imageUrlInput.trim()) {
                            toast.error('Please provide an image file or an image URL');
                            return;
                          }

                          try {
                            setIsUploading(true);
                            await storage.saveSiteMediaItem({
                              title,
                              category: mediaCategory,
                              description,
                              imageUrl: imageUrlInput.trim()
                            }, file);

                            toast.success('New image successfully added!');
                            setIsAddMediaOpen(false);
                            loadData();
                          } catch (err) {
                            console.error(err);
                            toast.error('Failed to add image');
                          } finally {
                            setIsUploading(false);
                          }
                        }}
                        className="space-y-4 pt-2"
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-bold">Image Title</label>
                          <Input name="title" placeholder="e.g. Science Lab Equipment" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold">Website Section Category</label>
                          <Select value={mediaCategory} onValueChange={setMediaCategory}>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Select section" />
                            </SelectTrigger>
                            <SelectContent>
                              {MEDIA_CATEGORIES.filter(c => c !== 'All Sections').map(cat => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold">Image Description / Info</label>
                          <Textarea name="description" placeholder="Short caption or context for this image..." rows={2} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold">Upload Local Image File</label>
                          <Input type="file" accept="image/*" className="cursor-pointer rounded-xl" />
                        </div>
                        <div className="text-xs text-center text-muted-foreground font-bold">— OR —</div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold">Paste External Image URL</label>
                          <Input name="imageUrl" placeholder="https://example.com/image.jpg" />
                        </div>
                        <Button type="submit" className="w-full rounded-2xl font-bold" disabled={isUploading}>
                          {isUploading ? <Loader2 className="animate-spin mr-2" /> : <Upload className="mr-2" />}
                          Save & Add to Media Database
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardHeader>

                <CardContent className="space-y-6 pt-6">
                  {/* Category Filter Pills & Search Bar */}
                  <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
                    <div className="relative flex-grow max-w-md">
                      <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input
                        placeholder="Search images by title or description..."
                        value={searchMediaQuery}
                        onChange={(e) => setSearchMediaQuery(e.target.value)}
                        className="pl-10 rounded-2xl"
                      />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                      {MEDIA_CATEGORIES.map((cat) => (
                        <Button
                          key={cat}
                          size="sm"
                          variant={selectedMediaCategory === cat ? 'default' : 'outline'}
                          onClick={() => setSelectedMediaCategory(cat)}
                          className={`rounded-full text-xs font-bold whitespace-nowrap ${
                            selectedMediaCategory === cat ? 'bg-primary text-white' : ''
                          }`}
                        >
                          {cat}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Organized Image Cards Grid */}
                  {filteredMedia.length === 0 ? (
                    <div className="text-center py-16 space-y-4 bg-secondary/20 rounded-3xl border border-dashed border-border">
                      <ImageIcon className="mx-auto text-muted-foreground" size={48} />
                      <h3 className="text-lg font-bold">No images found</h3>
                      <p className="text-sm text-muted-foreground">Try clearing search filters or add a new media image above.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredMedia.map((media) => (
                        <Card key={media.id} className="rounded-3xl border border-border overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group">
                          <div className="space-y-4">
                            <div className="relative aspect-video bg-slate-900 overflow-hidden">
                              <img
                                src={media.imageUrl}
                                alt={media.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/logo.png';
                                }}
                              />
                              <div className="absolute top-3 left-3">
                                <Badge className="bg-slate-950/80 text-white backdrop-blur-md border border-white/20 text-[10px] font-bold">
                                  {media.category}
                                </Badge>
                              </div>
                            </div>
                            <div className="p-5 space-y-2">
                              <h4 className="font-extrabold text-base text-slate-900 leading-snug">{media.title}</h4>
                              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                {media.description || 'No description provided.'}
                              </p>
                              <div className="pt-2 text-[10px] text-slate-400 font-mono truncate">
                                Source: {media.imageUrl}
                              </div>
                            </div>
                          </div>

                          <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-border mt-4">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCopyLink(media.imageUrl)}
                              className="rounded-xl text-xs font-bold flex items-center gap-1.5"
                            >
                              <Copy size={14} /> Copy Link
                            </Button>

                            <div className="flex items-center gap-2">
                              {/* Edit Modal Button */}
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setEditingMediaItem(media)}
                                className="rounded-xl text-xs font-bold flex items-center gap-1"
                              >
                                <Pencil size={14} /> Edit
                              </Button>

                              {/* Delete Button */}
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={async () => {
                                  if (confirm(`Delete "${media.title}" from site media?`)) {
                                    await storage.deleteSiteMediaItem(media.id);
                                    toast.success('Image deleted from media database');
                                    loadData();
                                  }
                                }}
                                className="rounded-xl text-xs font-bold flex items-center gap-1"
                              >
                                <Trash2 size={14} />
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB: ENQUIRIES */}
            <TabsContent value="enquiries">
              <Card className="rounded-3xl border border-border">
                <CardHeader>
                  <CardTitle>Enquiry Management</CardTitle>
                </CardHeader>
                <CardContent className="p-0 sm:p-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="whitespace-nowrap">Date</TableHead>
                          <TableHead className="whitespace-nowrap">Name</TableHead>
                          <TableHead className="whitespace-nowrap">Phone</TableHead>
                          <TableHead className="whitespace-nowrap">Message</TableHead>
                          <TableHead className="whitespace-nowrap">Status</TableHead>
                          <TableHead className="text-right whitespace-nowrap">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {enquiries.map((e) => (
                          <TableRow key={e.id}>
                            <TableCell className="text-xs whitespace-nowrap">{new Date(e.createdAt).toLocaleDateString()}</TableCell>
                            <TableCell className="font-medium whitespace-nowrap">{e.name}</TableCell>
                            <TableCell className="whitespace-nowrap">{e.phone}</TableCell>
                            <TableCell className="max-w-[200px] truncate">{e.message}</TableCell>
                            <TableCell>
                              <Badge variant={e.status === 'contacted' ? 'default' : 'secondary'}>
                                {e.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right space-x-2 whitespace-nowrap">
                              {e.status === 'pending' && (
                                <Button size="icon" variant="outline" onClick={() => updateEnquiry(e.id, 'contacted')}>
                                  <CheckCircle size={16} className="text-green-600" />
                                </Button>
                              )}
                              <Button size="icon" variant="outline" onClick={() => deleteEnquiry(e.id)}>
                                <Trash2 size={16} className="text-red-600" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB: ADMISSIONS */}
            <TabsContent value="admissions">
              <Card className="rounded-3xl border border-border">
                <CardHeader>
                  <CardTitle>Admission Applications</CardTitle>
                </CardHeader>
                <CardContent className="p-0 sm:p-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="whitespace-nowrap">Student</TableHead>
                          <TableHead className="whitespace-nowrap">Class</TableHead>
                          <TableHead className="whitespace-nowrap">Parent</TableHead>
                          <TableHead className="whitespace-nowrap">Phone</TableHead>
                          <TableHead className="whitespace-nowrap">Status</TableHead>
                          <TableHead className="text-right whitespace-nowrap">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {admissions.map((a) => (
                          <TableRow key={a.id}>
                            <TableCell className="font-medium whitespace-nowrap">{a.studentName}</TableCell>
                            <TableCell className="whitespace-nowrap">{a.classApplyingFor}</TableCell>
                            <TableCell className="whitespace-nowrap">{a.parentName}</TableCell>
                            <TableCell className="whitespace-nowrap">{a.phone}</TableCell>
                            <TableCell>
                              <Badge variant={a.status === 'approved' ? 'default' : a.status === 'rejected' ? 'destructive' : 'secondary'}>
                                {a.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right space-x-2 whitespace-nowrap">
                              {a.status === 'pending' && (
                                <>
                                  <Button size="icon" variant="outline" onClick={() => updateAdmission(a.id, 'approved')}>
                                    <CheckCircle size={16} className="text-green-600" />
                                  </Button>
                                  <Button size="icon" variant="outline" onClick={() => updateAdmission(a.id, 'rejected')}>
                                    <XCircle size={16} className="text-red-600" />
                                  </Button>
                                </>
                              )}
                              <Button size="icon" variant="outline" onClick={() => deleteAdmission(a.id)}>
                                <Trash2 size={16} className="text-red-600" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB: RESULTS */}
            <TabsContent value="results">
              <Card className="rounded-3xl border border-border">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>SSC Top Results Management</CardTitle>
                  <Dialog open={isAddResultOpen} onOpenChange={setIsAddResultOpen}>
                    <DialogTrigger asChild>
                      <Button className="rounded-2xl font-bold"><Plus size={16} className="mr-2" /> Add Result</Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-3xl">
                      <DialogHeader>
                        <DialogTitle>Add Top Student Result</DialogTitle>
                      </DialogHeader>
                      <form
                        onSubmit={async (e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const name = formData.get('name') as string;
                          const marks = formData.get('marks') as string;
                          const year = formData.get('year') as string;
                          const fileInput = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
                          const file = fileInput?.files?.[0];

                          try {
                            setIsUploading(true);
                            await storage.saveResult({ name, marks, year, photo: '' }, file);
                            toast.success('Result added successfully');
                            setIsAddResultOpen(false);
                            loadData();
                          } catch (err) {
                            console.error(err);
                            toast.error('Failed to add result');
                          } finally {
                            setIsUploading(false);
                          }
                        }}
                        className="space-y-4 pt-4"
                      >
                        <Input name="name" placeholder="Student Name" required />
                        <Input name="marks" placeholder="Marks (e.g. 586 / 600)" required />
                        <Input name="year" placeholder="Year (e.g. 2026)" defaultValue="2026" required />
                        <Input type="file" accept="image/*" className="cursor-pointer" />
                        <Button type="submit" className="w-full rounded-2xl font-bold" disabled={isUploading}>
                          {isUploading ? <Loader2 className="animate-spin mr-2" /> : <Upload className="mr-2" />}
                          Save Student Result
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent className="p-0 sm:p-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Photo</TableHead>
                          <TableHead>Student Name</TableHead>
                          <TableHead>Marks</TableHead>
                          <TableHead>Year</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {results.map((r) => (
                          <TableRow key={r.id}>
                            <TableCell>
                              <img src={r.photo} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                            </TableCell>
                            <TableCell className="font-bold">{r.name}</TableCell>
                            <TableCell className="text-primary font-extrabold">{r.marks}</TableCell>
                            <TableCell>{r.year}</TableCell>
                            <TableCell className="text-right">
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={async () => {
                                  if (confirm(`Delete result for ${r.name}?`)) {
                                    await storage.deleteResult(r.id);
                                    toast.success('Result deleted');
                                    loadData();
                                  }
                                }}
                              >
                                <Trash2 size={16} className="text-red-600" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB: GALLERY */}
            <TabsContent value="gallery">
              <Card className="rounded-3xl border border-border">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Gallery Photo Management</CardTitle>
                  <Dialog open={isAddGalleryOpen} onOpenChange={setIsAddGalleryOpen}>
                    <DialogTrigger asChild>
                      <Button className="rounded-2xl font-bold"><Plus size={16} className="mr-2" /> Add Gallery Photo</Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-3xl">
                      <DialogHeader>
                        <DialogTitle>Upload Gallery Photo</DialogTitle>
                      </DialogHeader>
                      <form
                        onSubmit={async (e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const title = formData.get('title') as string;
                          const fileInput = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
                          const file = fileInput?.files?.[0];

                          if (!file) {
                            toast.error('Please select an image file');
                            return;
                          }

                          try {
                            setIsUploading(true);
                            await storage.saveGalleryItem({
                              title,
                              imageUrl: '',
                              category: galleryCategory as any,
                            }, file);
                            toast.success('Image added to gallery');
                            setIsAddGalleryOpen(false);
                            loadData();
                          } catch (err) {
                            console.error(err);
                            toast.error('Failed to upload image');
                          } finally {
                            setIsUploading(false);
                          }
                        }}
                        className="space-y-4 pt-4"
                      >
                        <Input name="title" placeholder="Image Title" required />
                        <Select value={galleryCategory} onValueChange={setGalleryCategory}>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Events">Events</SelectItem>
                            <SelectItem value="Labs">Labs</SelectItem>
                            <SelectItem value="Cultural">Cultural</SelectItem>
                            <SelectItem value="Graduation">Graduation</SelectItem>
                            <SelectItem value="Celebrations">Celebrations</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input type="file" accept="image/*" className="cursor-pointer rounded-xl" required />
                        <Button type="submit" className="w-full rounded-2xl font-bold" disabled={isUploading}>
                          {isUploading ? <Loader2 className="animate-spin mr-2" /> : <Upload className="mr-2" />}
                          Upload Photo
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gallery.map((g) => (
                      <Card key={g.id} className="rounded-3xl border border-border overflow-hidden group relative">
                        <img src={g.imageUrl} alt={g.title} className="w-full aspect-video object-cover" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4 text-center">
                          <p className="text-white font-bold">{g.title}</p>
                          <p className="text-white/70 text-xs mb-4">{g.category}</p>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={async () => {
                              await storage.deleteGalleryItem(g.id);
                              toast.success('Image deleted');
                              loadData();
                            }}
                            className="rounded-xl font-bold"
                          >
                            <Trash2 size={16} className="mr-2" /> Delete
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* EDIT MEDIA ITEM DIALOG */}
          {editingMediaItem && (
            <Dialog open={!!editingMediaItem} onOpenChange={() => setEditingMediaItem(null)}>
              <DialogContent className="max-w-lg rounded-3xl">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">Edit Image Details</DialogTitle>
                </DialogHeader>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const title = formData.get('title') as string;
                    const category = formData.get('category') as string;
                    const description = formData.get('description') as string;
                    const imageUrl = formData.get('imageUrl') as string;
                    const fileInput = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
                    const file = fileInput?.files?.[0];

                    try {
                      setIsUploading(true);
                      await storage.updateSiteMediaItem(editingMediaItem.id, {
                        title,
                        category,
                        description,
                        imageUrl: imageUrl.trim() || editingMediaItem.imageUrl
                      }, file);

                      toast.success('Media details updated successfully!');
                      setEditingMediaItem(null);
                      loadData();
                    } catch (err) {
                      console.error(err);
                      toast.error('Failed to update media item');
                    } finally {
                      setIsUploading(false);
                    }
                  }}
                  className="space-y-4 pt-2"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Image Title</label>
                    <Input name="title" defaultValue={editingMediaItem.title} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Category Section</label>
                    <Select name="category" defaultValue={editingMediaItem.category}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {MEDIA_CATEGORIES.filter(c => c !== 'All Sections').map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Description / Caption Info</label>
                    <Textarea name="description" defaultValue={editingMediaItem.description} rows={2} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Replace with New Image File (Optional)</label>
                    <Input type="file" accept="image/*" className="cursor-pointer rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Or Update Image URL</label>
                    <Input name="imageUrl" defaultValue={editingMediaItem.imageUrl} />
                  </div>
                  <DialogFooter className="pt-2 gap-2">
                    <Button type="button" variant="outline" onClick={() => setEditingMediaItem(null)} className="rounded-2xl">
                      Cancel
                    </Button>
                    <Button type="submit" className="rounded-2xl font-bold" disabled={isUploading}>
                      {isUploading ? <Loader2 className="animate-spin mr-2" /> : <Upload className="mr-2" />}
                      Save Changes
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          )}

        </div>
      </main>
    </div>
  );
}
