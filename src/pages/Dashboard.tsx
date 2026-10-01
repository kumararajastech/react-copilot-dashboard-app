import React, { useState } from 'react';
import { runtimeEnv } from '../config/runtimeenv';
import { FilterForm } from '../features/dashboard/FilterForm';
import { MetricsCards } from '../features/dashboard/MetricsCards';
import { AnalyticsChart } from '../features/dashboard/AnalyticsChart';
import { DataTableGrid } from '../features/dashboard/DataTableGrid';
import { FilterFormInputs } from '../types/dashboard';

export const Dashboard: React.FC = () => {
  const [activeFilterKeyword, setActiveFilterKeyword] = useState<string>('');

  const handleFilterSubmit = (data: FilterFormInputs) => {
    setActiveFilterKeyword(data.searchTerm);
  };

  const handleFilterReset = () => {
    setActiveFilterKeyword('');
  };

  return (
    <div className="container-fluid py-4 px-4">
      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <div>
          <h2 className="fw-bold text-dark m-0">{runtimeEnv.APP_TITLE}</h2>
          <p className="text-muted m-0 fs-7">
            React 19 + PrimeReact Grid & Analytics Chart Dashboard (AI Token Cost Optimized)
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fs-7">
            <i className="pi pi-check-circle me-1"></i> Copilot AI Rules Active
          </span>
        </div>
      </div>

      {/* Filter Form with Labels and Textboxes */}
      <FilterForm onFilterSubmit={handleFilterSubmit} onReset={handleFilterReset} />

      {/* Metrics Summary Cards */}
      <MetricsCards />

      {/* Analytics Chart */}
      <div className="row">
        <div className="col-12">
          <AnalyticsChart />
        </div>
      </div>

      {/* Data Table Grid */}
      <div className="row">
        <div className="col-12">
          <DataTableGrid filterKeyword={activeFilterKeyword} />
        </div>
      </div>
    </div>
  );
};
