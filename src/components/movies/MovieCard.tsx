import Image from 'next/image';
import Link from 'next/link';

import { Movie } from '@/interfaces';
import { AddMovieToFavorites, MoviePercentCircle } from './';

interface Props {
  movie: Movie
}

export const MovieCard = ({ movie }: Props) => {

  /**
   * Permite transformar el nombre de una película para poder mostrarlo en la url
   * @param name nombre de la película
   * @returns nombre-de-la-movie
   */
  const transformName = (name: string) => {
    // Convertir a minúsculas y reemplazar espacios con guiones
    let result = name.toLowerCase().replace(/\s+/g, '-');
  
    // Eliminar caracteres no deseados
    result = result.replace(/[^a-z0-9-]/g, '');
  
    return result;
  }

  return (
    <Link href={`/movie/${movie.id}-${transformName(movie.title)}`} className="relative">
      <Image
        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        alt='Películas'
        width={400}
        height={200}
        className="transition-opacity duration-300 hover:opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-2 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
        <h3 className='text-2xl mt-4'>{movie.title}</h3>
        <div className='flex justify-around'>
          <div className='flex items-center'>
            <AddMovieToFavorites movie={movie}/>
          </div>
          <MoviePercentCircle percent={movie.vote_average}/>
        </div>
      </div>
    </Link>
  )
}