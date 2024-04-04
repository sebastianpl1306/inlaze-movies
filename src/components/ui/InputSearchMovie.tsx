'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

export const InputSearchMovie = () => {
  const router = useRouter();
  const [text, setText] = useState('');

  /**
   * Permite agregar el query a la consulta
   * @param event formulario que contiene el campo de búsqueda
   */
  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = text.toLowerCase().replace(/ /g, '%20');
    router.push(`/search?query=${query}`);
  }

  return (
    <form className="flex w-full rounded bg-white" onSubmit={onSearch}>
        <input
          className="w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
          type="search"
          name="search"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="flex m-2 rounded bg-blue-600 px-4 py-2 text-white">
          <BiSearch/>
        </button>
    </form>
  )
}