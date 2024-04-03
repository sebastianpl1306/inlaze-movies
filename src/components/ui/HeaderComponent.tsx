import Link from 'next/link';
import { MdOutlineFavorite, MdSearch } from 'react-icons/md';

export const HeaderComponent = () => {
  return (
    <header className="flex justify-around py-5 bg-black text-white">
      <Link href={'/'}><h1 className="text-2xl">Inlaze Movies</h1></Link>
      <div></div>
      <div className='flex space-x-3'>
        <Link className='flex' href={'/favorites'}>
          <MdSearch className='text-2xl mr-2'/>
          <span className='hidden md:block'>Buscar</span>
        </Link>
        <Link className='flex' href={'/favorites'}>
          <MdOutlineFavorite className='text-2xl mr-2'/>
          <span className='hidden md:block'>Mis favoritos</span>
        </Link>
      </div>
    </header>
  )
}