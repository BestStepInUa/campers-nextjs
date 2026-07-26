import { Camper } from '@/types/camper';
import CatalogCard from './CatalogCard';

interface CatalogListProps {
  campers: Camper[];
}

export default function CatalogList({ campers }: CatalogListProps) {
  return (
    <ul className="flex flex-col gap-8">
      {campers.map((camper) => (
        <CatalogCard key={camper.id} camper={camper} />
      ))}
    </ul>
  );
}
