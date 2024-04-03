import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DetailMovie, CreditsMovie } from '@/interfaces';
import { AddMovieToFavorites, MovieActorsGrid, MoviePercentCircle, ShareMovie } from '@/components';

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }:Props): Promise<Metadata>{
  try {
    const { movieDetail } = await getMovie(params.id);
    const { title, overview } = movieDetail;

    return {
    title: title,
    description: overview
    }
  } catch (error) {
    return {
      title: 'Inlaze Movies',
      description: 'Inlaze Movies películas recomendadas'
    }
  }
}

const getMovie = async(id: string): Promise<{ movieDetail: DetailMovie; movieCredits: CreditsMovie;}> => {
  try {
    const movieId = id.split('-')[0];
    const movieDetail = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`,{
      headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWQ5NDBjOWMyNWZmYmVlZDg5MGY1NzMxYzI3YjM4NSIsInN1YiI6IjY2MGM4N2FlOWM5N2JkMDE0OWEzMjQzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gEUOU5GpEXw3xuQXSBeAbforfpEEndBn-AJhmjL__sw'
      }
    }).then(res => res.json());

    const movieCredits = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=es-ES`,{
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWQ5NDBjOWMyNWZmYmVlZDg5MGY1NzMxYzI3YjM4NSIsInN1YiI6IjY2MGM4N2FlOWM5N2JkMDE0OWEzMjQzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gEUOU5GpEXw3xuQXSBeAbforfpEEndBn-AJhmjL__sw'
      }
    }).then(res => res.json());

    return { movieDetail, movieCredits};
  } catch (error) {
    notFound();
  }
}

export default async function MoviePage({ params }: Props) {
  const { movieDetail, movieCredits } = await getMovie(params.id);

  return (
    <main>
      <div className='image__cover__long flex items-start justify-end' style={{ backgroundImage: `url('https://media.themoviedb.org/t/p/w220_and_h330_face${movieDetail.backdrop_path}')` }}>
        <div className='block md:hidden'>
          <MoviePercentCircle percent={movieDetail.vote_average} size={120}/>
        </div>
      </div>
      <section className='w-11/12 m-auto text-white mt-2'>
        <article className='flex flex-col md:flex-row justify-between'>
          <div>
            <h1 className="text-gray-50 text-5xl font-bold mt-5">{movieDetail.title}</h1>
            <div className='flex space-x-3'>
              <p>{movieDetail.release_date.toString()}</p>
              <p className='bg-red-600 px-5 rounded' style={{ display: movieDetail.adult ? 'block' : 'none' }}>+18</p>
              <p className='bg-slate-900 px-5 rounded'>{movieDetail.original_language.toUpperCase()}</p>
            </div>
          </div>
          <div className='hidden md:block'>
            <MoviePercentCircle percent={movieDetail.vote_average} size={120}/>
          </div>
        </article>
        <article>
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-3 mt-2 md:mt-0">
            <AddMovieToFavorites movie={movieDetail}/>
            <ShareMovie/>
          </div>
          <p>{movieDetail.overview}</p>
          <h2 className='my-4 text-4xl'>Actores</h2>
          <MovieActorsGrid actors={movieCredits.cast}/>
        </article>
      </section>
    </main>
  );
}