'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import css from './CatalogView.module.css';

import CatalogFilter from '../CatalogFilter';
import { type CamperListItemDto, fetchCampers } from '@/lib/api/api';

export default function CatalogView() {
  const [page, setPage] = useState<number>(1);
  const [filterKey, setFilterKey] = useState<number>(0);

  const [filters, setFilters] = useState({
    location: '',
    form: '',
    engine: '',
    transmission: '',
  });

  const [campers, setCampers] = useState<CamperListItemDto[]>([]);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['campers', filters, page],
    queryFn: () => fetchCampers({ ...filters, page, perPage: 4 }),
    placeholderData: (previousData) => previousData,
  });

  console.log('campers', data);

  // const totalCampers =
  //   (data as { campers?: Camper[]; total?: number })?.total || 0;

  useEffect(() => {
    if (data) {
      const newCampers =
        (data as { campers?: CamperListItemDto[] })?.campers || [];
      if (page === 1) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCampers(newCampers);
      } else {
        setCampers((prev) => {
          const existingIds = new Set(prev.map((c) => c.id));
          const uniqueNewCampers = newCampers.filter(
            (c) => !existingIds.has(c.id)
          );
          return [...prev, ...uniqueNewCampers];
        });
      }
    }
  }, [data, page]);

  const handleApplyFilter = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <section className={css['section']}>
      <div className={`container ${css['wrapper']}`}>
        <CatalogFilter key={filterKey} onFilter={handleApplyFilter} />
      </div>
    </section>
  );
}
