'use client';

import CatalogFilter from '../CatalogFilter';
// import CatalogList from '../CatalogList';
// import Loader from '../Loader';
// import NoCampersFound from '../NoCampersFound';

import { useCatalogFilters } from '@/hooks/useCatalogFilters';
import { useCampersQuery } from '@/hooks/useCampersQuery';
import { useFiltersQuery } from '@/hooks/useFiltersQuery';
import NoCampers from '../NoCampers';
import Loader from '../Loader';
import CatalogList from '../CatalogList';

export default function CatalogView() {
  const { filters, appliedFilters, changeFilter, search, clear } =
    useCatalogFilters();

  const {
    data: filterOptions,
    isPending: isFiltersLoading,
    isError: isFiltersError,
  } = useFiltersQuery();

  const {
    campers,
    hasMore,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useCampersQuery({
    filters: appliedFilters,
  });

  const handleLoadMore = async () => {
    await fetchNextPage();

    window.scrollBy({
      top: 300,
      behavior: 'smooth',
    });
  };

  if (isFiltersError) {
    return <p>Failed to load filters.</p>;
  }

  return (
    <section className="pt-12 pb-13">
      <div className="mx-auto flex max-w-360 justify-between gap-16.25 px-16">
        <CatalogFilter
          filters={filters}
          filterOptions={filterOptions}
          isLoading={isFiltersLoading}
          onChange={changeFilter}
          onSearch={search}
          onClear={clear}
        />

        <div>
          {isLoading ? (
            <Loader />
          ) : campers.length === 0 ? (
            <NoCampers onResetFilters={clear} onViewAll={search} />
          ) : (
            <>
              <CatalogList campers={campers} />

              {hasMore && (
                <button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={isFetchingNextPage}
                  className="border-gray-light hover:border-green-hover focus-visible:border-green-hover active:border-green-hover mx-auto mt-10 flex items-center justify-center rounded-full border px-8 py-4 transition-colors disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isFetchingNextPage ? 'Loading...' : 'Load more'}
                </button>
              )}
            </>
          )}

          {isFetching && !isFetchingNextPage && <Loader />}
        </div>
      </div>
    </section>
  );
}
