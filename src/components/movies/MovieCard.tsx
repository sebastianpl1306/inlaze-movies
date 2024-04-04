import Image from 'next/image';
import Link from 'next/link';

import { MovieFavorite } from '@/interfaces';
import { transformNameToUrl } from '@/utils';
import { AddMovieToFavorites, MoviePercentCircle } from './';

interface Props {
  movie: MovieFavorite
}

export const MovieCard = ({ movie }: Props) => {

  return (
    <article className="relative" style={{ display: movie.poster_path ? 'block' : 'none'}} >
      <Image
        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        alt={movie.title}
        title={movie.title}
        width={400}
        height={200}
        priority={ false }
        className="transition-opacity duration-300 hover:opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-2 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
        <Link className='h-full' href={`/movie/${movie.id}-${transformNameToUrl(movie.title)}`} title={movie.title}>
          <h3 className='text-2xl mt-4'>{movie.title}</h3>
        </Link>
        <div className='flex justify-around'>
          <div className='flex items-center'>
            <AddMovieToFavorites movie={movie}/>
          </div>
          <MoviePercentCircle percent={movie.vote_average}/>
        </div>
      </div>
    </article>
  )
}