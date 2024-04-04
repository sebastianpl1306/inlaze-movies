import { Metadata } from 'next';
import { InfoMoviesFavorites } from '@/components';

export const metadata: Metadata = {
  title: "Mis favoritos - Inlaze Movies",
  description: "Encuentra tus películas favoritas",
  keywords: ['movies', 'inlaze', 'películas', 'calificaciones películas', 'películas en cartelera', 'buscar películas']
};

export default function FavoritesPage() {
  return (
    <main>
      <InfoMoviesFavorites/>
    </main>
  );
}