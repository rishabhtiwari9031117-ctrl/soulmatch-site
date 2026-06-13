export interface Profile {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  photo: string;
  photos: string[];
  religion: string;
  caste: string;
  motherTongue: string;
  location: string;
  education: string;
  profession: string;
  income: string;
  height: string;
  maritalStatus: string;
  familyDetails: string;
  lifestyle: string;
  partnerPreferences: string;
  verified: boolean;
  phone: string;
  email: string;
  aboutMe: string;
  whatsapp: string;
}

export interface SuccessStory {
  id: string;
  coupleName: string;
  weddingDate: string;
  story: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  isAudio?: boolean;
}

export interface InterestRequest {
  id: string;
  senderId: string;
  receiverId: string;
  status: 'pending' | 'accepted' | 'declined';
  timestamp: string;
}
