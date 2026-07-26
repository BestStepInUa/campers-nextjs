'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchCampers } from '@/lib/api/api';
import { toCatalogData } from '@/lib/adapters/campers';
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

    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,

    select: toCatalogData,
  });

  return {
    campers: query.data?.campers ?? [],
    total: query.data?.total ?? 0,
    totalPages: query.data?.totalPages ?? 0,

    hasMore: query.hasNextPage ?? false,

    fetchNextPage: query.fetchNextPage,

    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isFetchingNextPage: query.isFetchingNextPage,

    error: query.error,
  };
}
