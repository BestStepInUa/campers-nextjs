'use client';

import { useState } from 'react';
import { CatalogFilters, emptyFilters, type Filters } from './CatalogFilters';

export default function CatalogView() {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [filtersKey, setFiltersKey] = useState(0);

  function applyFilters(next: Filters) {
    setFilters(next);
    console.log('Filters setted!');
  }

  function clearFilters() {
    applyFilters(emptyFilters);
    setFiltersKey((key) => key + 1);
  }

  return (
    <CatalogFilters
      key={filtersKey}
      filters={filters}
      onApply={applyFilters}
      onReset={clearFilters}
    />
  );
}
