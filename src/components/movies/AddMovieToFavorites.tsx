'use client'
import { useEffect, useState } from 'react';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

import { DetailMovie, Movie, MovieFavorite } from '@/interfaces';
import { existInFavorites, toggleFavorites } from '@/utils';

interface Props {
  movie: Movie | DetailMovie;
}

export const AddMovieToFavorites = ({ movie }: Props) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(existInFavorites(movie.id));
  }, [movie.id])

  const addToFavorite = () => {
    const saveMovie: MovieFavorite = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average
    };
    
    toggleFavorites(saveMovie);
    setFavorite(!favorite);
  }

  return (
    <button className='flex flex-col items-center' onClick={addToFavorite}>
      <MdOutlineFavoriteBorder className='text-3xl' style={{ display: !favorite ? 'block' : 'none' }}/>
      <MdOutlineFavorite className='text-3xl' style={{ display: favorite ? 'block' : 'none' }}/>
      <span className='text-sm'>Añadir a favoritos</span>
    </button>
  )
}
