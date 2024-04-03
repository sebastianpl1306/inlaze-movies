'use client'
import { FaCopy } from 'react-icons/fa'

export const ShareMovie = () => {
  const copyLink = () => {

  }

  return (
    <button className='flex flex-col items-center' onClick={copyLink}>
      <FaCopy className='text-3xl'/>
      <span className='text-sm'>Copiar enlace</span>
    </button>
  )
}