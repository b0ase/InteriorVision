import { FloorPlanData } from '@/lib/floorPlanProcessor';

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  slug: string;
  location: string;
  duration: string;
  budget: string;
  challenge: string;
  solution: string;
  features: string[];
};

export interface UploadResponse {
  success: boolean;
  message: string;
  error?: string;
  data?: FloorPlanData;
}

export type ContactForm = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}; 