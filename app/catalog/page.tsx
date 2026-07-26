import CatalogView from '@/components/catalog/CatalogView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Camper Catalog',
  description: 'Choose your camper from the list of available options',
  openGraph: {
    type: 'website',
    url:
      `${process.env['NEXT_OG_APP_URL']}/catalog` ||
      'http://localhost:3000/catalog',
    title: 'Camper Catalog',
    description: 'Choose your camper from the list of available options',
    siteName: 'TravelTrucks',
  },
};

export default async function Catalog() {
  return <CatalogView />;
}
