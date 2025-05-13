export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive' | 'pending';
    lastActive: Date;
  }
  
  export interface Company {
    id: string;
    name: string;
    industry: string;
    employees: number;
    location: string;
    status: 'active' | 'inactive';
    joinedAt: Date;
  }
  
  export interface Tool {
    id: string;
    name: string;
    category: string;
    price: number;
    license: 'free' | 'premium' | 'enterprise';
    rating: number;
    updatedAt: Date;
  }
  
  export interface Report {
    id: string;
    title: string;
    type: 'sales' | 'analytics' | 'performance' | 'custom';
    createdBy: string;
    status: 'draft' | 'published' | 'archived';
    createdAt: Date;
  }
  
  export const users: User[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john@example.com',
      role: 'Admin',
      status: 'active',
      lastActive: new Date(2025, 4, 1),
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      role: 'Manager',
      status: 'active',
      lastActive: new Date(2025, 3, 28),
    },
    {
      id: '3',
      name: 'Mike Wilson',
      email: 'mike@example.com',
      role: 'User',
      status: 'inactive',
      lastActive: new Date(2025, 2, 15),
    },
    {
      id: '4',
      name: 'Emily Davis',
      email: 'emily@example.com',
      role: 'User',
      status: 'pending',
      lastActive: new Date(2025, 4, 1),
    },
    {
      id: '5',
      name: 'Alex Turner',
      email: 'alex@example.com',
      role: 'Manager',
      status: 'active',
      lastActive: new Date(2025, 3, 30),
    },
  ];
  
  export const companies: Company[] = [
    {
      id: '1',
      name: 'Acme Inc',
      industry: 'Technology',
      employees: 250,
      location: 'New York, USA',
      status: 'active',
      joinedAt: new Date(2024, 1, 15),
    },
    {
      id: '2',
      name: 'Globex Corp',
      industry: 'Manufacturing',
      employees: 1200,
      location: 'Chicago, USA',
      status: 'active',
      joinedAt: new Date(2023, 10, 5),
    },
    {
      id: '3',
      name: 'Initech',
      industry: 'Finance',
      employees: 75,
      location: 'London, UK',
      status: 'inactive',
      joinedAt: new Date(2024, 3, 20),
    },
    {
      id: '4',
      name: 'Stark Industries',
      industry: 'Technology',
      employees: 5000,
      location: 'San Francisco, USA',
      status: 'active',
      joinedAt: new Date(2022, 7, 8),
    },
    {
      id: '5',
      name: 'Wayne Enterprises',
      industry: 'Diversified',
      employees: 10000,
      location: 'Gotham, USA',
      status: 'active',
      joinedAt: new Date(2023, 4, 12),
    },
  ];
  
  export const tools: Tool[] = [
    {
      id: '1',
      name: 'Analytics Pro',
      category: 'Business Intelligence',
      price: 49.99,
      license: 'premium',
      rating: 4.8,
      updatedAt: new Date(2025, 3, 10),
    },
    {
      id: '2',
      name: 'TaskFlow',
      category: 'Project Management',
      price: 0,
      license: 'free',
      rating: 4.2,
      updatedAt: new Date(2025, 4, 1),
    },
    {
      id: '3',
      name: 'SecureVault',
      category: 'Security',
      price: 199.99,
      license: 'enterprise',
      rating: 4.9,
      updatedAt: new Date(2025, 2, 25),
    },
    {
      id: '4',
      name: 'CodeWizard',
      category: 'Development',
      price: 29.99,
      license: 'premium',
      rating: 4.6,
      updatedAt: new Date(2025, 3, 15),
    },
    {
      id: '5',
      name: 'DataSync',
      category: 'Data Management',
      price: 79.99,
      license: 'premium',
      rating: 4.3,
      updatedAt: new Date(2025, 1, 5),
    },
  ];
  
  export const reports: Report[] = [
    {
      id: '1',
      title: 'Q1 Sales Report',
      type: 'sales',
      createdBy: 'John Smith',
      status: 'published',
      createdAt: new Date(2025, 3, 15),
    },
    {
      id: '2',
      title: 'User Engagement Analysis',
      type: 'analytics',
      createdBy: 'Sarah Johnson',
      status: 'published',
      createdAt: new Date(2025, 4, 1),
    },
    {
      id: '3',
      title: 'System Performance Overview',
      type: 'performance',
      createdBy: 'Mike Wilson',
      status: 'draft',
      createdAt: new Date(2025, 3, 28),
    },
    {
      id: '4',
      title: 'Customer Satisfaction Survey',
      type: 'custom',
      createdBy: 'Emily Davis',
      status: 'published',
      createdAt: new Date(2025, 2, 10),
    },
    {
      id: '5',
      title: 'Monthly Finance Report',
      type: 'sales',
      createdBy: 'Alex Turner',
      status: 'archived',
      createdAt: new Date(2025, 3, 1),
    },
  ];
  