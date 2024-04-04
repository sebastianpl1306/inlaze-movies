'use client'
import { moviesFavorites } from '@/utils';
import { MovieGrid } from './';

export const InfoMoviesFavorites = () => {
  const movies = moviesFavorites();

  return (
    <main className="w-11/12 m-auto text-white mt-2">
      <h3 className="text-2xl font-extrabold mb-2">Mis Favoritos</h3>
      {
        movies.length > 0
          ? (<MovieGrid movies={movies}/>)
          : (
            <div className='flex items-center justify-center h-80'>
              <h3>No hay favoritas</h3>
            </div>
          )
      }
    </main>
  )
}
