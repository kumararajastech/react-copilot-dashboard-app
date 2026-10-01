import React from 'react';
import { Card } from 'primereact/card';
import { MetricCardData } from '../../types/dashboard';

const mockMetrics: MetricCardData[] = [
  { id: '1', title: 'Total Revenue', value: '$128,450', change: '+14.2%', isPositive: true, icon: 'pi pi-dollar' },
  { id: '2', title: 'Active Users', value: '3,840', change: '+8.1%', isPositive: true, icon: 'pi pi-users' },
  { id: '3', title: 'API Copilot Tokens Saved', value: '4.2M', change: '+62.0%', isPositive: true, icon: 'pi pi-bolt' },
  { id: '4', title: 'Avg Response Latency', value: '240ms', change: '-12.5%', isPositive: true, icon: 'pi pi-clock' },
];

export const MetricsCards: React.FC = () => {
  return (
    <div className="row g-3 mb-4">
      {mockMetrics.map((metric) => (
        <div key={metric.id} className="col-xl-3 col-md-6">
          <Card className="h-100 shadow-sm border-0">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="text-muted fw-semibold fs-7">{metric.title}</span>
              <div className="p-2 bg-light rounded text-primary">
                <i className={`${metric.icon} fs-5`}></i>
              </div>
            </div>
            <div className="fs-3 fw-bold text-dark mb-1">{metric.value}</div>
            <div className="d-flex align-items-center gap-1">
              <span className={`badge ${metric.isPositive ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                {metric.change}
              </span>
              <span className="text-muted fs-8">vs last month</span>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
