// src/types/dashboard.ts
export interface MetricCardData {
  id: string;
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: string;
}

export interface AnalyticsChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill?: boolean;
    borderColor?: string;
    backgroundColor?: string;
    tension?: number;
  }[];
}

export interface UserGridRecord {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive' | 'Pending';
  revenue: number;
  lastActive: string;
}

export interface FilterFormInputs {
  searchTerm: string;
  roleFilter: string;
  statusFilter: string;
  startDate: string;
  endDate: string;
}
