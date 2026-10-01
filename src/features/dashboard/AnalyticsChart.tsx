import React from 'react';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';

export const AnalyticsChart: React.FC = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Monthly Active Users (PrimeReact Chart)',
        data: [2400, 3200, 3800, 4100, 4800, 5600, 6200],
        fill: true,
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Token Usage Optimizations (%)',
        data: [15, 28, 42, 50, 58, 64, 71],
        fill: false,
        borderColor: '#10b981',
        backgroundColor: '#10b981',
        tension: 0.4,
      }
    ]
  };

  const chartOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          font: { family: 'Inter, sans-serif', size: 12 }
        }
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#f3f4f6' } }
    }
  };

  return (
    <Card title="Performance & Token Optimization Analytics" className="shadow-sm border-0 mb-4">
      <div style={{ position: 'relative', height: '320px' }}>
        <Chart type="line" data={chartData} options={chartOptions} style={{ height: '100%' }} />
      </div>
    </Card>
  );
};
