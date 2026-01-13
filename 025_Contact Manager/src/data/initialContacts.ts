import { Contact } from '../types/types';

export const initialContacts: Contact[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY',
    notes: 'Met at tech conference',
    avatarColor: 'bg-blue-500',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 (555) 987-6543',
    address: '456 Oak Ave, Los Angeles, CA',
    notes: 'Project manager at ABC Corp',
    avatarColor: 'bg-green-500',
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'robert@example.com',
    phone: '+1 (555) 456-7890',
    address: '789 Pine Rd, Chicago, IL',
    notes: 'Friend from college',
    avatarColor: 'bg-purple-500',
  },
];