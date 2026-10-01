import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { UserGridRecord } from '../../types/dashboard';

const initialRecords: UserGridRecord[] = [
  { id: 101, name: 'Sarah Jenkins', email: 'sarah.j@example.com', role: 'Lead Architect', status: 'Active', revenue: 14500, lastActive: '2 mins ago' },
  { id: 102, name: 'David Chen', email: 'david.c@example.com', role: 'Senior Developer', status: 'Active', revenue: 11200, lastActive: '15 mins ago' },
  { id: 103, name: 'Elena Rostova', email: 'elena.r@example.com', role: 'Product Manager', status: 'Pending', revenue: 8900, lastActive: '1 hour ago' },
  { id: 104, name: 'Marcus Vance', email: 'marcus.v@example.com', role: 'DevOps Engineer', status: 'Active', revenue: 16800, lastActive: '3 hours ago' },
  { id: 105, name: 'Ananya Sharma', email: 'ananya.s@example.com', role: 'Frontend Engineer', status: 'Inactive', revenue: 6400, lastActive: '2 days ago' },
];

interface DataTableGridProps {
  filterKeyword?: string;
}

export const DataTableGrid: React.FC<DataTableGridProps> = ({ filterKeyword = '' }) => {
  const [selectedRecords, setSelectedRecords] = useState<UserGridRecord[]>([]);

  const filteredData = initialRecords.filter((rec) =>
    rec.name.toLowerCase().includes(filterKeyword.toLowerCase()) ||
    rec.email.toLowerCase().includes(filterKeyword.toLowerCase()) ||
    rec.role.toLowerCase().includes(filterKeyword.toLowerCase())
  );

  const statusBodyTemplate = (rowData: UserGridRecord) => {
    const severityMap: Record<string, 'success' | 'warning' | 'danger'> = {
      Active: 'success',
      Pending: 'warning',
      Inactive: 'danger',
    };
    return <Tag value={rowData.status} severity={severityMap[rowData.status] || 'info'} />;
  };

  const revenueBodyTemplate = (rowData: UserGridRecord) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.revenue);
  };

  return (
    <Card title="User Activity & Revenue Grid (PrimeReact DataTable)" className="shadow-sm border-0 mb-4">
      <DataTable
        value={filteredData}
        paginator
        rows={5}
        selection={selectedRecords}
        onSelectionChange={(e) => setSelectedRecords(e.value as UserGridRecord[])}
        dataKey="id"
        tableStyle={{ minWidth: '50rem' }}
        className="p-datatable-sm"
        responsiveLayout="scroll"
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
        <Column field="id" header="User ID" sortable />
        <Column field="name" header="Name" sortable />
        <Column field="email" header="Email Address" sortable />
        <Column field="role" header="Role" sortable />
        <Column field="status" header="Status" body={statusBodyTemplate} sortable />
        <Column field="revenue" header="Revenue Contribution" body={revenueBodyTemplate} sortable />
        <Column field="lastActive" header="Last Active" sortable />
      </DataTable>
    </Card>
  );
};
