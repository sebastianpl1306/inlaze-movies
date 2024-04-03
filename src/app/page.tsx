import { MovieGrid } from "@/components";
import { MovieResponse } from "@/interfaces";
import { notFound } from "next/navigation";

const getMovies = async(page = 1 ) => {
  try {
    const data: MovieResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${page}`, {
      cache: 'force-cache',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWQ5NDBjOWMyNWZmYmVlZDg5MGY1NzMxYzI3YjM4NSIsInN1YiI6IjY2MGM4N2FlOWM5N2JkMDE0OWEzMjQzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gEUOU5GpEXw3xuQXSBeAbforfpEEndBn-AJhmjL__sw'
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
      <h3 className="text-2xl font-extrabold mb-2">Películas populares</h3>
      <MovieGrid movies={movies}/>
    </main>
  );
}
