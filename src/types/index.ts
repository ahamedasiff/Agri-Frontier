export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department?: string;
  institution?: string;
  image: string;
  isSupervisor?: boolean;
  email?: string;
}

export interface Milestone {
  id: number;
  title: string;
  date: string;
  description: string;
  completed?: boolean;
}

export interface Document {
  id: number;
  title: string;
  description: string;
  fileUrl: string;
  date: string;
  type: 'document' | 'presentation';
}