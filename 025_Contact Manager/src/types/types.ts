export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  avatarColor: string;
}

export type ContactFormData = Omit<Contact, 'id' | 'avatarColor'>;