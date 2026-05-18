import { Enquiry, Admission, Result, GalleryItem } from '../types';

const STORAGE_KEYS = {
  ENQUIRIES: 'bbm_enquiries',
  ADMISSIONS: 'bbm_admissions',
  RESULTS: 'bbm_results',
  GALLERY: 'bbm_gallery',
  AUTH: 'bbm_auth',
};

const get = <T>(key: string, defaultValue: T): T => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

const set = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
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
      if (!response.ok) throw new Error('Failed to fetch results');
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  saveResult: async (result: Omit<Result, 'id'>, file?: File): Promise<Result> => {
    const formData = new FormData();
    formData.append('name', result.name);
    formData.append('marks', result.marks);
    formData.append('year', result.year);
    if (file) formData.append('photo', file);

    const response = await fetch('/api/results', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to save result');
    return await response.json();
  },
  updateResult: async (id: string, result: Partial<Omit<Result, 'id'>>, file?: File): Promise<Result> => {
    const formData = new FormData();
    if (result.name) formData.append('name', result.name);
    if (result.marks) formData.append('marks', result.marks);
    if (result.year) formData.append('year', result.year);
    if (file) formData.append('photo', file);

    const response = await fetch(`/api/results/${id}`, {
      method: 'PUT',
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to update result');
    return await response.json();
  },
  deleteResult: async (id: string): Promise<void> => {
    const response = await fetch(`/api/results/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete result');
  },

  getGallery: async (): Promise<GalleryItem[]> => {
    try {
      const response = await fetch('/api/gallery');
      if (!response.ok) throw new Error('Failed to fetch gallery');
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  saveGalleryItem: async (item: Omit<GalleryItem, 'id' | 'createdAt'>, file?: File): Promise<GalleryItem> => {
    const formData = new FormData();
    formData.append('title', item.title);
    formData.append('category', item.category);
    if (file) formData.append('image', file);

    const response = await fetch('/api/gallery', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to save gallery item');
    return await response.json();
  },
  deleteGalleryItem: async (id: string): Promise<void> => {
    const response = await fetch(`/api/gallery/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete gallery item');
  },

  isAdminLoggedIn: () => !!localStorage.getItem(STORAGE_KEYS.AUTH),
  login: (email: string) => localStorage.setItem(STORAGE_KEYS.AUTH, email),
  logout: () => localStorage.removeItem(STORAGE_KEYS.AUTH),
};
