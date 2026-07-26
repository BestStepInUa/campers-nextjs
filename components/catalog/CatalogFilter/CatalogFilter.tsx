'use client';

import type { CatalogFilterProps } from '@/types/catalog';

import RadioGroup from './RadioGroup';
import TextFilterField from './TextFilterField';
import FilterActions from './FilterActions';

export default function CatalogFilter({
  filters,
  filterOptions,
  isLoading,
  onChange,
  onSearch,
  onClear,
}: CatalogFilterProps) {
  if (isLoading || !filterOptions) {
    return (
      <aside className="bg-inputs scrollbar-hidden sticky top-12 max-h-[calc(100vh-48px)] overflow-y-auto rounded-[20px] p-6">
        Loading filters...
      </aside>
    );
  }

  return (
    <aside className="bg-inputs scrollbar-hidden sticky top-12 max-h-[calc(100vh-48px)] overflow-y-auto rounded-[20px] p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <TextFilterField
          id="location"
          label="Location"
          placeholder="City"
          value={filters.location}
          onChange={(value) => onChange('location', value)}
        />

        <h3 className="text-main mb-6 text-[20px] leading-6 font-semibold">
          Filters
        </h3>

        <RadioGroup
          title="Camper form"
          name="form"
          options={filterOptions.forms}
          value={filters.form}
          onChange={onChange}
        />

        <RadioGroup
          title="Engine"
          name="engine"
          options={filterOptions.engines}
          value={filters.engine}
          onChange={onChange}
        />

        <RadioGroup
          title="Transmission"
          name="transmission"
          options={filterOptions.transmissions}
          value={filters.transmission}
          onChange={onChange}
        />

        <FilterActions onClear={onClear} />
      </form>
    </aside>
  );
}
