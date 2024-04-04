import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InputSearchMovie, MovieGrid, PaginationComponent } from '@/components';
import { MovieResponse } from '@/interfaces';

interface Props {
  searchParams: { query: string, page: string }
}

/**
 * Permite obtener la lista de las películas según los criterios de búsqueda
 * @param page pagina a cargar
 * @param query criterio de búsqueda
 * @returns Listado de películas encontradas
 */
const getMovies = async( page = 1, query = '' ) => {
  try {
    const data: MovieResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=es-ES&page=${page}`, {
      cache: 'force-cache',
      headers: {
        'Authorization': `Bearer ${process.env.TOKEN_MOVIES}`
      }
    }).then((res) => res.json());

    return data;
  } catch (error) {
    notFound();
  }
}

export const metadata: Metadata = {
  title: "Buscar películas - Inlaze Movies",
  description: "Busca tus películas favoritas en inlaze movies.",
  keywords: ['movies', 'inlaze', 'películas', 'calificaciones películas', 'películas en cartelera', 'buscar películas']
};

export default async function SearchPage({ searchParams }: Props) {
  const data = await getMovies(searchParams.page ? Number(searchParams.page) : 1, searchParams.query);

  return (
    <main className="w-11/12 m-auto text-white mt-2">
      <div className='mb-2'>
        <InputSearchMovie/>
      </div>
      <MovieGrid movies={data.results}/>
      <div style={{ display: data.total_pages <= 1 ? 'none' : 'block'}}>
        <PaginationComponent totalPages={data.total_pages} page={data.page}/>
      </div>
    </main>
  );
}