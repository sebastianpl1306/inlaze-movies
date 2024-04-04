'use client'
import { FaCopy } from 'react-icons/fa'

interface Props {
  url: string;
}

export const ShareMovie = ({ url }: Props) => {

  /**
   * Permite copiar el enlace de la película
   */
  const copyLink = () => {
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = `${process.env.NEXT_PUBLIC_THIS_PATH_URL}${url}`;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
  }

  return (
    <button className='flex flex-col items-center' onClick={copyLink}>
      <FaCopy className='text-3xl'/>
      <span className='text-sm'>Copiar enlace</span>
    </button>
  )
}