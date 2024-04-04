import { MovieGrid } from "@/components";
import { MovieResponse } from "@/interfaces";
import { notFound } from "next/navigation";

const getMovies = async(page = 1 ) => {
  try {
    const data: MovieResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${page}`, {
      cache: 'force-cache',
      headers: {
        'Authorization': `Bearer ${process.env.TOKEN_MOVIES}`
      }
    }).then((res) => res.json());

    return data.results;
  } catch (error) {
    notFound();
  }
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <main className="w-11/12 m-auto text-white mt-2">
      <h2 className="text-2xl font-extrabold mb-2">Películas populares</h2>
      <MovieGrid movies={movies}/>
    </main>
  );
}
