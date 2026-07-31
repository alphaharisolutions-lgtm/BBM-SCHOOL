import { Enquiry, Admission, Result, GalleryItem, SiteMediaItem } from '../types';

const STORAGE_KEYS = {
  ENQUIRIES: 'bbm_enquiries',
  ADMISSIONS: 'bbm_admissions',
  RESULTS: 'bbm_results',
  GALLERY: 'bbm_gallery',
  MEDIA: 'bbm_site_media',
  AUTH: 'bbm_auth',
};

const DEFAULT_GALLERY: GalleryItem[] = [
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

const DEFAULT_SITE_MEDIA: SiteMediaItem[] = [
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

const DEFAULT_RESULTS: Result[] = [
  { id: "1", name: "D. MEGHANA", marks: "586 / 600", photo: "https://picsum.photos/seed/student1/200/200", year: "2026" },
  { id: "2", name: "T. SRI CHARITHA", marks: "585 / 600", photo: "https://picsum.photos/seed/student2/200/200", year: "2026" },
  { id: "3", name: "G. CHARAN", marks: "579 / 600", photo: "https://picsum.photos/seed/student3/200/200", year: "2026" },
  { id: "4", name: "J. VASU", marks: "578 / 600", photo: "https://picsum.photos/seed/student4/200/200", year: "2026" },
  { id: "5", name: "G. JASHWANTH", marks: "573 / 600", photo: "https://picsum.photos/seed/student5/200/200", year: "2026" },
  { id: "6", name: "N. KEERTHANA", marks: "572 / 600", photo: "https://picsum.photos/seed/student6/200/200", year: "2026" },
  { id: "7", name: "U. MANOJKUMAR", marks: "569 / 600", photo: "https://picsum.photos/seed/student7/200/200", year: "2026" },
  { id: "8", name: "T. PRIYANKA", marks: "565 / 600", photo: "https://picsum.photos/seed/student8/200/200", year: "2026" }
];

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
};

const get = <T>(key: string, defaultValue: T): T => {
  const data = localStorage.getItem(key);
  if (!data) return defaultValue;
  try {
    return JSON.parse(data);
  } catch (e) {
    return defaultValue;
  }
};

const set = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to set item in localStorage:', e);
  }
};

export const storage = {
  getEnquiries: () => get<Enquiry[]>(STORAGE_KEYS.ENQUIRIES, []),
  saveEnquiry: (enquiry: Omit<Enquiry, 'id' | 'status' | 'createdAt'>) => {
    const enquiries = storage.getEnquiries();
    const newEnquiry: Enquiry = {
      ...enquiry,
      id: crypto.randomUUID(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    set(STORAGE_KEYS.ENQUIRIES, [newEnquiry, ...enquiries]);
    return newEnquiry;
  },
  updateEnquiryStatus: (id: string, status: Enquiry['status']) => {
    const enquiries = storage.getEnquiries().map(e => e.id === id ? { ...e, status } : e);
    set(STORAGE_KEYS.ENQUIRIES, enquiries);
  },
  deleteEnquiry: (id: string) => {
    const enquiries = storage.getEnquiries().filter(e => e.id !== id);
    set(STORAGE_KEYS.ENQUIRIES, enquiries);
  },

  getAdmissions: () => get<Admission[]>(STORAGE_KEYS.ADMISSIONS, []),
  saveAdmission: (admission: Omit<Admission, 'id' | 'status' | 'createdAt'>) => {
    const admissions = storage.getAdmissions();
    const newAdmission: Admission = {
      ...admission,
      id: crypto.randomUUID(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    set(STORAGE_KEYS.ADMISSIONS, [newAdmission, ...admissions]);
    return newAdmission;
  },
  updateAdmissionStatus: (id: string, status: Admission['status']) => {
    const admissions = storage.getAdmissions().map(a => a.id === id ? { ...a, status } : a);
    set(STORAGE_KEYS.ADMISSIONS, admissions);
  },
  deleteAdmission: (id: string) => {
    const admissions = storage.getAdmissions().filter(a => a.id !== id);
    set(STORAGE_KEYS.ADMISSIONS, admissions);
  },

  getResults: async (): Promise<Result[]> => {
    try {
      const response = await fetch('/api/results');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          set(STORAGE_KEYS.RESULTS, data);
          return data;
        }
      }
    } catch (error) {
      console.warn('Backend API unavailable, using localStorage for results');
    }
    return get<Result[]>(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
  },

  saveResult: async (result: Omit<Result, 'id'>, file?: File): Promise<Result> => {
    let photoUrl = result.photo || 'https://picsum.photos/seed/student/200/200';
    if (file) {
      photoUrl = await fileToBase64(file);
    }

    try {
      const formData = new FormData();
      formData.append('name', result.name);
      formData.append('marks', result.marks);
      formData.append('year', result.year);
      if (file) formData.append('photo', file);

      const response = await fetch('/api/results', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const serverItem = await response.json();
        const localItems = get<Result[]>(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
        set(STORAGE_KEYS.RESULTS, [serverItem, ...localItems.filter(i => i.id !== serverItem.id)]);
        return serverItem;
      }
    } catch (error) {
      console.warn('Backend API save failed, saving to localStorage:', error);
    }

    const localItems = get<Result[]>(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
    const newItem: Result = {
      id: Date.now().toString(),
      name: result.name,
      marks: result.marks,
      year: result.year,
      photo: photoUrl,
    };
    set(STORAGE_KEYS.RESULTS, [newItem, ...localItems]);
    return newItem;
  },

  updateResult: async (id: string, result: Partial<Omit<Result, 'id'>>, file?: File): Promise<Result> => {
    let photoUrl: string | undefined;
    if (file) {
      photoUrl = await fileToBase64(file);
    }

    try {
      const formData = new FormData();
      if (result.name) formData.append('name', result.name);
      if (result.marks) formData.append('marks', result.marks);
      if (result.year) formData.append('year', result.year);
      if (file) formData.append('photo', file);

      const response = await fetch(`/api/results/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        const serverItem = await response.json();
        const localItems = get<Result[]>(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
        set(STORAGE_KEYS.RESULTS, localItems.map(i => i.id === id ? serverItem : i));
        return serverItem;
      }
    } catch (error) {
      console.warn('Backend API update failed, updating in localStorage:', error);
    }

    const localItems = get<Result[]>(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
    const existing = localItems.find(i => i.id === id);
    const updatedItem: Result = {
      id,
      name: result.name || existing?.name || '',
      marks: result.marks || existing?.marks || '',
      year: result.year || existing?.year || '',
      photo: photoUrl || existing?.photo || 'https://picsum.photos/seed/student/200/200',
    };

    set(STORAGE_KEYS.RESULTS, localItems.map(i => i.id === id ? updatedItem : i));
    return updatedItem;
  },

  deleteResult: async (id: string): Promise<void> => {
    try {
      await fetch(`/api/results/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.warn('Backend API delete failed, deleting from localStorage:', error);
    }
    const localItems = get<Result[]>(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
    set(STORAGE_KEYS.RESULTS, localItems.filter(i => i.id !== id));
  },

  getGallery: async (): Promise<GalleryItem[]> => {
    try {
      const response = await fetch('/api/gallery');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          set(STORAGE_KEYS.GALLERY, data);
          return data;
        }
      }
    } catch (error) {
      console.warn('Backend API unavailable, using localStorage for gallery');
    }
    return get<GalleryItem[]>(STORAGE_KEYS.GALLERY, DEFAULT_GALLERY);
  },

  saveGalleryItem: async (item: Omit<GalleryItem, 'id' | 'createdAt'>, file?: File): Promise<GalleryItem> => {
    let imageUrl = item.imageUrl || 'https://picsum.photos/seed/gallery/800/600';
    if (file) {
      imageUrl = await fileToBase64(file);
    }

    try {
      const formData = new FormData();
      formData.append('title', item.title);
      formData.append('category', item.category);
      if (file) formData.append('image', file);

      const response = await fetch('/api/gallery', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const serverItem = await response.json();
        const localItems = get<GalleryItem[]>(STORAGE_KEYS.GALLERY, DEFAULT_GALLERY);
        set(STORAGE_KEYS.GALLERY, [serverItem, ...localItems.filter(i => i.id !== serverItem.id)]);
        return serverItem;
      }
    } catch (error) {
      console.warn('Backend API save failed, saving to localStorage:', error);
    }

    const localItems = get<GalleryItem[]>(STORAGE_KEYS.GALLERY, DEFAULT_GALLERY);
    const newItem: GalleryItem = {
      id: Date.now().toString(),
      title: item.title,
      category: item.category,
      imageUrl,
      createdAt: new Date().toISOString(),
    };
    set(STORAGE_KEYS.GALLERY, [newItem, ...localItems]);
    return newItem;
  },

  deleteGalleryItem: async (id: string): Promise<void> => {
    try {
      await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.warn('Backend API delete failed, deleting from localStorage:', error);
    }
    const localItems = get<GalleryItem[]>(STORAGE_KEYS.GALLERY, DEFAULT_GALLERY);
    set(STORAGE_KEYS.GALLERY, localItems.filter(i => i.id !== id));
  },

  getSiteMedia: async (): Promise<SiteMediaItem[]> => {
    try {
      const response = await fetch('/api/media');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          set(STORAGE_KEYS.MEDIA, data);
          return data;
        }
      }
    } catch (error) {
      console.warn('Backend API unavailable, using localStorage for site media');
    }
    return get<SiteMediaItem[]>(STORAGE_KEYS.MEDIA, DEFAULT_SITE_MEDIA);
  },

  saveSiteMediaItem: async (item: Omit<SiteMediaItem, 'id' | 'createdAt'>, file?: File): Promise<SiteMediaItem> => {
    let imageUrl = item.imageUrl || '/logo.png';
    if (file) {
      imageUrl = await fileToBase64(file);
    }

    try {
      const formData = new FormData();
      formData.append('title', item.title);
      formData.append('category', item.category);
      formData.append('description', item.description);
      if (file) formData.append('image', file);

      const response = await fetch('/api/media', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const serverItem = await response.json();
        const localItems = get<SiteMediaItem[]>(STORAGE_KEYS.MEDIA, DEFAULT_SITE_MEDIA);
        set(STORAGE_KEYS.MEDIA, [serverItem, ...localItems.filter(i => i.id !== serverItem.id)]);
        return serverItem;
      }
    } catch (error) {
      console.warn('Backend API save media failed, saving to localStorage:', error);
    }

    const localItems = get<SiteMediaItem[]>(STORAGE_KEYS.MEDIA, DEFAULT_SITE_MEDIA);
    const newItem: SiteMediaItem = {
      id: 'sm_' + Date.now().toString(),
      title: item.title,
      category: item.category,
      imageUrl,
      description: item.description,
      createdAt: new Date().toISOString(),
    };
    set(STORAGE_KEYS.MEDIA, [newItem, ...localItems]);
    return newItem;
  },

  updateSiteMediaItem: async (id: string, item: Partial<Omit<SiteMediaItem, 'id' | 'createdAt'>>, file?: File): Promise<SiteMediaItem> => {
    let imageUrl: string | undefined;
    if (file) {
      imageUrl = await fileToBase64(file);
    }

    try {
      const formData = new FormData();
      if (item.title) formData.append('title', item.title);
      if (item.category) formData.append('category', item.category);
      if (item.description) formData.append('description', item.description);
      if (file) formData.append('image', file);

      const response = await fetch(`/api/media/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        const serverItem = await response.json();
        const localItems = get<SiteMediaItem[]>(STORAGE_KEYS.MEDIA, DEFAULT_SITE_MEDIA);
        set(STORAGE_KEYS.MEDIA, localItems.map(i => i.id === id ? serverItem : i));
        return serverItem;
      }
    } catch (error) {
      console.warn('Backend API update media failed, updating in localStorage:', error);
    }

    const localItems = get<SiteMediaItem[]>(STORAGE_KEYS.MEDIA, DEFAULT_SITE_MEDIA);
    const existing = localItems.find(i => i.id === id);
    const updatedItem: SiteMediaItem = {
      id,
      title: item.title || existing?.title || 'Untitled Image',
      category: item.category || existing?.category || 'General',
      description: item.description || existing?.description || '',
      imageUrl: imageUrl || item.imageUrl || existing?.imageUrl || '/logo.png',
      createdAt: existing?.createdAt || new Date().toISOString(),
    };

    set(STORAGE_KEYS.MEDIA, localItems.map(i => i.id === id ? updatedItem : i));
    return updatedItem;
  },

  deleteSiteMediaItem: async (id: string): Promise<void> => {
    try {
      await fetch(`/api/media/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.warn('Backend API delete media failed, deleting from localStorage:', error);
    }
    const localItems = get<SiteMediaItem[]>(STORAGE_KEYS.MEDIA, DEFAULT_SITE_MEDIA);
    set(STORAGE_KEYS.MEDIA, localItems.filter(i => i.id !== id));
  },

  isAdminLoggedIn: () => !!localStorage.getItem(STORAGE_KEYS.AUTH),
  login: (email: string) => localStorage.setItem(STORAGE_KEYS.AUTH, email),
  logout: () => localStorage.removeItem(STORAGE_KEYS.AUTH),
};
