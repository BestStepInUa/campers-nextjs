import { fetchServerCampers, fetchServerFilters } from '@/lib/api/serverApi';

export default async function Catalog() {
  const campers = await fetchServerCampers();
  const filters = await fetchServerFilters();
  console.log(campers);
  console.log(filters);
  return <h2>Campers page</h2>;
}
