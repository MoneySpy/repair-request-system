export type UserRole = 'admin' | 'technician' | 'user' | 'vendor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  kpi_score?: number;
  created_at: string;
}

export type RepairStatus = 'pending' | 'assigned' | 'in_progress' | 'done' | 'approved' | 'rejected';

export interface RepairRequest {
  id: string;
  title: string;
  description: string;
  status: RepairStatus;
  image_url?: string;
  requested_by: string;
  assigned_to?: string;
  due_date?: string;
  approved_by?: string;
  created_at: string;
  updated_at: string;
}

export interface KpiLog {
  id: string;
  user_id: string;
  repair_id: string;
  score: number;
  created_at: string;
}

export interface Vendor {
  id: string;
  name: string;
  contact: string;
  type: string;
  created_at: string;
}

export interface ChatLog {
  id: string;
  user_id: string;
  message: string;
  is_ai: boolean;
  created_at: string;
}

export interface Part {
  id: string;
  name: string;
  stock: number;
  low_stock_alert: number;
  created_at: string;
} 