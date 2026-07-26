'use client';

import { useCallback, useState } from 'react';

import { initialFilters, type FilterValues } from '@/types/catalog';

function areFiltersEqual(a: FilterValues, b: FilterValues) {
  return Object.keys(a).every(
    (key) => a[key as keyof FilterValues] === b[key as keyof FilterValues]
  );
}

export function useCatalogFilters() {
  const [filters, setFilters] = useState(initialFilters);

  const [appliedFilters, setAppliedFilters] = useState(initialFilters);

  const changeFilter = useCallback(
    (field: keyof FilterValues, value: string) => {
      setFilters((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  const search = useCallback(() => {
    setAppliedFilters((prev) =>
      areFiltersEqual(prev, filters) ? prev : filters
    );
  }, [filters]);

  const clear = useCallback(() => {
    setFilters(initialFilters);
    setAppliedFilters(initialFilters);
  }, []);

  return {
    filters,
    appliedFilters,
    changeFilter,
    search,
    clear,
  };
}
