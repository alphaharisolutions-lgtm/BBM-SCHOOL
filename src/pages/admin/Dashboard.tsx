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
  X
} from 'lucide-react';
import { storage } from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Enquiry, Admission, Result, GalleryItem } from '@/types';

export default function Dashboard() {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [editingResult, setEditingResult] = useState<Result | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddResultOpen, setIsAddResultOpen] = useState(false);
  const [isAddGalleryOpen, setIsAddGalleryOpen] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState<string>('Events');

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

  const handleFileUpload = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const stats = [
    { title: 'Total Enquiries', value: enquiries.length, icon: MessageSquare, color: 'text-blue-600' },
    { title: 'Total Admissions', value: admissions.length, icon: UserPlus, color: 'text-green-600' },
    { title: 'Top Results', value: results.length, icon: Trophy, color: 'text-yellow-600' },
    { title: 'Gallery Items', value: gallery.length, icon: ImageIcon, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col md:flex-row relative overflow-x-hidden">
      {/* Mobile Header */}
      <div className="md:hidden bg-primary text-primary-foreground p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="BBM Logo" 
            className="w-8 h-8 object-contain bg-white rounded-md p-0.5"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold">BBM ADMIN</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <MenuIcon />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-primary text-primary-foreground p-6 flex flex-col transition-transform duration-300 md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="hidden md:flex items-center gap-2 mb-12">
          <img 
            src="/logo.png" 
            alt="BBM Logo" 
            className="w-10 h-10 object-contain bg-white rounded-lg p-1"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold text-xl">BBM ADMIN</span>
        </div>

        <nav className="flex-grow space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/10" onClick={() => setIsSidebarOpen(false)}>
            <LayoutDashboard size={18} /> Dashboard
          </Button>
        </nav>

        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 hover:bg-white/10 text-red-300 hover:text-red-200"
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
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, Administrator</p>
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

          <Tabs defaultValue="enquiries" className="space-y-6">
            <div className="overflow-x-auto pb-2 scrollbar-hide">
              <TabsList className="bg-white border border-border p-1 rounded-xl inline-flex w-full sm:w-auto">
                <TabsTrigger value="enquiries" className="rounded-lg flex-1 sm:flex-none">Enquiries</TabsTrigger>
                <TabsTrigger value="admissions" className="rounded-lg flex-1 sm:flex-none">Admissions</TabsTrigger>
                <TabsTrigger value="results" className="rounded-lg flex-1 sm:flex-none">Results</TabsTrigger>
                <TabsTrigger value="gallery" className="rounded-lg flex-1 sm:flex-none">Gallery</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="enquiries">
              <Card>
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

            <TabsContent value="admissions">
              <Card>
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

            <TabsContent value="results">
              <Card>
                <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle>SSC Toppers Management</CardTitle>
                  <Button className="gap-2 w-full sm:w-auto" onClick={() => setIsAddResultOpen(true)}>
                    <Plus size={18} /> Add Topper
                  </Button>
                  <Dialog open={isAddResultOpen} onOpenChange={setIsAddResultOpen}>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Add New SSC Topper</DialogTitle>
                      </DialogHeader>
                      <form
                        onSubmit={async (e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const fileInput = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
                          const file = fileInput?.files?.[0];
                          
                          try {
                            setIsUploading(true);
                            await storage.saveResult({
                              name: formData.get('name') as string,
                              marks: formData.get('marks') as string,
                              year: formData.get('year') as string,
                              photo: '',
                            }, file);
                            toast.success('Topper added successfully');
                            setIsAddResultOpen(false);
                            loadData();
                          } catch (error) {
                            toast.error('Failed to save result');
                          } finally {
                            setIsUploading(false);
                          }
                        }}
                        className="space-y-4 pt-4"
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Student Name</label>
                          <Input name="name" placeholder="Enter student name" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Marks / Grade</label>
                          <Input name="marks" placeholder="e.g. 583 / 600 or 10 GPA" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Academic Year</label>
                          <Input name="year" placeholder="e.g. 2023-24" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Student Photo</label>
                          <div className="flex items-center gap-4">
                            <Input 
                              type="file" 
                              accept="image/*" 
                              className="cursor-pointer"
                              required
                            />
                          </div>
                          <p className="text-[10px] text-muted-foreground">Max size: 2MB recommended (Base64 storage)</p>
                        </div>
                        <Button type="submit" className="w-full" disabled={isUploading}>
                          {isUploading ? <Loader2 className="animate-spin mr-2" /> : <Plus className="mr-2" />}
                          Save Topper
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Dialog open={editingResult !== null} onOpenChange={(open) => !open && setEditingResult(null)}>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit SSC Topper</DialogTitle>
                      </DialogHeader>
                      {editingResult && (
                        <form
                          onSubmit={async (e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const fileInput = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
                            const file = fileInput?.files?.[0];
                            
                            try {
                              setIsUploading(true);
                              await storage.updateResult(editingResult.id, {
                                name: formData.get('name') as string,
                                marks: formData.get('marks') as string,
                                year: formData.get('year') as string,
                              }, file);
                              toast.success('Topper updated successfully');
                              setEditingResult(null);
                              loadData();
                            } catch (error) {
                              toast.error('Failed to update result');
                            } finally {
                              setIsUploading(false);
                            }
                          }}
                          className="space-y-4 pt-4"
                        >
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Student Name</label>
                            <Input name="name" defaultValue={editingResult.name} required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Marks Obtained</label>
                            <Input name="marks" defaultValue={editingResult.marks} required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Passing Year</label>
                            <Input name="year" defaultValue={editingResult.year} required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Student Photo</label>
                            <div className="flex items-center gap-4">
                              <img src={editingResult.photo} alt={editingResult.name} className="size-12 rounded-full object-cover" />
                              <Input type="file" accept="image/*" />
                            </div>
                          </div>
                          <Button type="submit" className="w-full" disabled={isUploading}>
                            {isUploading ? <Loader2 className="animate-spin mr-2" /> : 'Update Topper'}
                          </Button>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent className="p-0 sm:p-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="whitespace-nowrap">Photo</TableHead>
                          <TableHead className="whitespace-nowrap">Name</TableHead>
                          <TableHead className="whitespace-nowrap">Marks</TableHead>
                          <TableHead className="whitespace-nowrap">Year</TableHead>
                          <TableHead className="text-right whitespace-nowrap">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {results.map((r) => (
                          <TableRow key={r.id}>
                            <TableCell>
                              <img
                                src={r.photo}
                                alt={r.name}
                                className="size-10 rounded-full object-cover border border-border"
                                referrerPolicy="no-referrer"
                              />
                            </TableCell>
                            <TableCell className="font-medium whitespace-nowrap">{r.name}</TableCell>
                            <TableCell className="whitespace-nowrap">{r.marks}</TableCell>
                            <TableCell className="whitespace-nowrap">
                              <Badge variant="outline">{r.year}</Badge>
                            </TableCell>
                            <TableCell className="text-right whitespace-nowrap">
                              <Button
                                size="icon"
                                variant="outline"
                                className="mr-2"
                                onClick={() => setEditingResult(r)}
                              >
                                <Pencil size={16} className="text-blue-600" />
                              </Button>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={async () => {
                                  await storage.deleteResult(r.id);
                                  toast.success('Topper removed');
                                  loadData();
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

            <TabsContent value="gallery">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Gallery Management</CardTitle>
                  <Button className="gap-2" onClick={() => setIsAddGalleryOpen(true)}>
                    <Plus size={18} /> Add Image
                  </Button>
                  <Dialog open={isAddGalleryOpen} onOpenChange={setIsAddGalleryOpen}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Gallery Image</DialogTitle>
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
                          } catch (error) {
                            console.error('Failed to upload image:', error);
                            toast.error('Failed to upload image');
                          } finally {
                            setIsUploading(false);
                          }
                        }}
                        className="space-y-4 pt-4"
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Title</label>
                          <Input name="title" placeholder="Image title" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Category</label>
                          <Select value={galleryCategory} onValueChange={setGalleryCategory}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Events">Events</SelectItem>
                              <SelectItem value="Labs">Labs</SelectItem>
                              <SelectItem value="Cultural">Cultural</SelectItem>
                              <SelectItem value="Graduation">Graduation</SelectItem>
                              <SelectItem value="Celebrations">Celebrations</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Image File</label>
                          <Input 
                            type="file" 
                            accept="image/*" 
                            className="cursor-pointer"
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isUploading}>
                          {isUploading ? <Loader2 className="animate-spin mr-2" /> : <Upload className="mr-2" />}
                          Upload to Gallery
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gallery.map((g) => (
                      <Card key={g.id} className="overflow-hidden group relative">
                        <img
                          src={g.imageUrl}
                          alt={g.title}
                          className="w-full aspect-video object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4 text-center">
                          <p className="text-white font-bold">{g.title}</p>
                          <p className="text-white/70 text-xs mb-4">{g.category}</p>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              storage.deleteGalleryItem(g.id);
                              toast.success('Image deleted');
                              loadData();
                            }}
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
        </div>
      </main>
    </div>
  );
}
