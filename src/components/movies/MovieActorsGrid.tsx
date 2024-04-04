import Image from "next/image"
import { Cast } from "@/interfaces"

interface Props {
    actors: Cast[];
}

export const MovieActorsGrid = ({ actors }: Props) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-10">
        {
            actors.map(actor => (
                <div key={actor.id} className="text-center m-2 bg-white text-black rounded" style={{ display: actor.profile_path ? 'block' : 'none'}}>
                    <Image
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face${actor.profile_path}`}
                        alt={actor.name}
                        title={actor.name}
                        width={200}
                        height={150}
                    />
                    <p className="font-bold">{actor.name}</p>
                    <p>{actor.character}</p>
                </div>
            ))
        }
    </div>
  )
}