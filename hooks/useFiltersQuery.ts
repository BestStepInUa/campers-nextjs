'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchFilters } from '@/lib/api/api';
import { QUERY_KEYS } from '@/lib/react-query/queryKeys';

export function useFiltersQuery() {
  return useQuery({
    queryKey: QUERY_KEYS.campers.filters,
    queryFn: fetchFilters,

    staleTime: Infinity,
    gcTime: Infinity,

    retry: 1,

    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
