export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  message: string;
  status: 'pending' | 'contacted';
  createdAt: string;
}

export interface Admission {
  id: string;
  studentName: string;
  classApplyingFor: string;
  parentName: string;
  phone: string;
  address: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface Result {
  id: string;
  name: string;
  marks: string;
  photo: string;
  year: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: 'Events' | 'Labs' | 'Cultural' | 'Graduation' | 'Celebrations';
  createdAt: string;
}

export interface User {
  email: string;
  role: 'admin';
}
