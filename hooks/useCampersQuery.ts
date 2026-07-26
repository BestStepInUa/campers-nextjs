'use client';

import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchCampers, type CamperListResponseDto } from '@/lib/api/api';

import { QUERY_KEYS } from '@/lib/react-query/queryKeys';
import type { FilterValues } from '@/types/catalog';

interface UseCampersQueryOptions {
  filters: FilterValues;
  perPage?: number;
}

export function useCampersQuery({
  filters,
  perPage = 4,
}: UseCampersQueryOptions) {
  const query = useInfiniteQuery({
    queryKey: QUERY_KEYS.campers.list(filters),

    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      fetchCampers({
        ...filters,
        page: pageParam,
        perPage,
      }),

    getNextPageParam: (lastPage: CamperListResponseDto) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
  });

  const campers = useMemo(
    () => query.data?.pages.flatMap((page) => page.campers) ?? [],
    [query.data]
  );

  const total = query.data?.pages.at(-1)?.total ?? 0;

  const totalPages = query.data?.pages.at(-1)?.totalPages ?? 0;

  return {
    ...query,

    campers,

    total,

    totalPages,

    hasMore: query.hasNextPage ?? false,
  };
}
