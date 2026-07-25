import { fetchServerCampers } from '@/lib/api/serverApi';

export default async function Catalog() {
  const campers = await fetchServerCampers();
  console.log(campers);
  return <h2>Campers page</h2>;
}
