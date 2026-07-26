'use client';

import css from './CatalogView.module.css';

import CatalogFilter from '../CatalogFilter';
// import CatalogList from '../CatalogList';
// import Loader from '../Loader';
// import NoCampersFound from '../NoCampersFound';

import { useCatalogFilters } from '@/hooks/useCatalogFilters';
import { useCampersQuery } from '@/hooks/useCampersQuery';
import { useFiltersQuery } from '@/hooks/useFiltersQuery';

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

  console.count('CatalogView render');
  console.log({
    isLoading,
    isFetching,
    isFetchingNextPage,
  });

  return (
    <section className={css.section}>
      <div className={`container ${css.wrapper}`}>
        <CatalogFilter
          filters={filters}
          filterOptions={filterOptions}
          isLoading={isFiltersLoading}
          onChange={changeFilter}
          onSearch={search}
          onClear={clear}
        />

        <div className={css.content}>
          {/* {isLoading ? (
            <Loader />
          ) : campers.length === 0 ? (
            <NoCampersFound onClearFilters={clear} />
          ) : (
            <>
              <CatalogList campers={campers} />

              {hasMore && (
                <button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={isFetchingNextPage}
                  className={css.loadMoreButton}
                >
                  {isFetchingNextPage ? 'Loading...' : 'Load more'}
                </button>
              )}
            </>
          )} */}

          {/* {isFetching && !isFetchingNextPage && <Loader />} */}
        </div>
      </div>
    </section>
  );
}
