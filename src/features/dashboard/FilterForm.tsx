import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { FilterFormInputs } from '../../types/dashboard';

interface FilterFormProps {
  onFilterSubmit: (data: FilterFormInputs) => void;
  onReset: () => void;
}

export const FilterForm: React.FC<FilterFormProps> = ({ onFilterSubmit, onReset }) => {
  const { control, handleSubmit, reset } = useForm<FilterFormInputs>({
    defaultValues: {
      searchTerm: '',
      roleFilter: 'All',
      statusFilter: 'All',
      startDate: '',
      endDate: ''
    }
  });

  const handleFormReset = () => {
    reset();
    onReset();
  };

  return (
    <Card className="mb-4 shadow-sm border-0">
      <form onSubmit={handleSubmit(onFilterSubmit)} className="row g-3 align-items-end">
        {/* Label & Textbox 1: Search Term */}
        <div className="col-md-4 col-sm-6">
          <label htmlFor="searchTerm" className="form-label fw-bold text-secondary">
            Search Keyword
          </label>
          <Controller
            name="searchTerm"
            control={control}
            render={({ field }) => (
              <span className="p-input-icon-left w-100">
                <i className="pi pi-search" />
                <InputText
                  id="searchTerm"
                  {...field}
                  placeholder="Search by name or email..."
                  className="w-100 p-inputtext-sm"
                />
              </span>
            )}
          />
        </div>

        {/* Label & Textbox 2: Role Filter */}
        <div className="col-md-3 col-sm-6">
          <label htmlFor="roleFilter" className="form-label fw-bold text-secondary">
            User Role
          </label>
          <Controller
            name="roleFilter"
            control={control}
            render={({ field }) => (
              <InputText
                id="roleFilter"
                {...field}
                placeholder="e.g. Admin, Developer"
                className="w-100 p-inputtext-sm"
              />
            )}
          />
        </div>

        {/* Label & Textbox 3: Status Filter */}
        <div className="col-md-3 col-sm-6">
          <label htmlFor="statusFilter" className="form-label fw-bold text-secondary">
            Account Status
          </label>
          <Controller
            name="statusFilter"
            control={control}
            render={({ field }) => (
              <InputText
                id="statusFilter"
                {...field}
                placeholder="e.g. Active, Pending"
                className="w-100 p-inputtext-sm"
              />
            )}
          />
        </div>

        {/* Action Buttons */}
        <div className="col-md-2 col-sm-6 d-flex gap-2">
          <Button
            type="submit"
            label="Filter"
            icon="pi pi-filter"
            className="p-button-primary p-button-sm flex-grow-1"
          />
          <Button
            type="button"
            label="Reset"
            icon="pi pi-refresh"
            onClick={handleFormReset}
            className="p-button-outlined p-button-secondary p-button-sm"
          />
        </div>
      </form>
    </Card>
  );
};
