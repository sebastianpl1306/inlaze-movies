import Link from 'next/link';
import { MdOutlineFavorite, MdSearch } from 'react-icons/md';

export const HeaderComponent = () => {
  return (
    <header className="flex justify-around py-5 bg-black text-white">
      <Link href={'/'} title='Ir al inicio' className="text-2xl">Inlaze Movies</Link>
      <div></div>
      <nav className='flex space-x-3'>
        <Link className='flex' href={'/search'} title='Buscar película'>
          <MdSearch className='text-2xl mr-2'/>
          <span className='hidden md:block'>Buscar</span>
        </Link>
        <Link className='flex' href={'/favorites'} title='Ver favoritos'>
          <MdOutlineFavorite className='text-2xl mr-2'/>
          <span className='hidden md:block'>Mis favoritos</span>
        </Link>
      </nav>
    </header>
  )
}