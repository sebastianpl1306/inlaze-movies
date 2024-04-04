import { MovieFavorite } from '@/interfaces'
import { MovieCard } from '.'

interface Props {
  movies: MovieFavorite[]
}

export const MovieGrid = ({ movies }: Props) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-5 gap-2">
      {
        movies.map(movie => (<MovieCard key={movie.id} movie={movie}/>))
      }
    </section>
  )
}