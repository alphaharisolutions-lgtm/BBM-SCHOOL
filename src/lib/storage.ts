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

  getResults: () => get<Result[]>(STORAGE_KEYS.RESULTS, [
    { id: '1', name: 'S. Rajesh', marks: '583 / 600', photo: 'https://picsum.photos/seed/student1/200/200', year: '2024' },
    { id: '2', name: 'K. Anitha', marks: '578 / 600', photo: 'https://picsum.photos/seed/student2/200/200', year: '2024' },
  ]),
  saveResult: (result: Omit<Result, 'id'>) => {
    const results = storage.getResults();
    const newResult: Result = { ...result, id: crypto.randomUUID() };
    set(STORAGE_KEYS.RESULTS, [newResult, ...results]);
    return newResult;
  },
  deleteResult: (id: string) => {
    const results = storage.getResults().filter(r => r.id !== id);
    set(STORAGE_KEYS.RESULTS, results);
  },

  getGallery: () => get<GalleryItem[]>(STORAGE_KEYS.GALLERY, [
    { id: '1', title: 'Science Lab', imageUrl: 'https://picsum.photos/seed/lab/800/600', category: 'Labs', createdAt: new Date().toISOString() },
    { id: '2', title: 'Cultural Fest', imageUrl: 'https://picsum.photos/seed/fest/800/600', category: 'Cultural', createdAt: new Date().toISOString() },
    { id: '3', title: 'Graduation Day', imageUrl: 'https://picsum.photos/seed/grad/800/600', category: 'Graduation', createdAt: new Date().toISOString() },
  ]),
  saveGalleryItem: (item: Omit<GalleryItem, 'id' | 'createdAt'>) => {
    const gallery = storage.getGallery();
    const newItem: GalleryItem = { ...item, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
    set(STORAGE_KEYS.GALLERY, [newItem, ...gallery]);
    return newItem;
  },
  deleteGalleryItem: (id: string) => {
    const gallery = storage.getGallery().filter(g => g.id !== id);
    set(STORAGE_KEYS.GALLERY, gallery);
  },

  isAdminLoggedIn: () => !!localStorage.getItem(STORAGE_KEYS.AUTH),
  login: (email: string) => localStorage.setItem(STORAGE_KEYS.AUTH, email),
  logout: () => localStorage.removeItem(STORAGE_KEYS.AUTH),
};
