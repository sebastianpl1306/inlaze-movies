'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

interface Props {
    page: number;
    totalPages: number;
}

export const PaginationComponent = ({ page, totalPages }: Props) => {
  const PAGE_RANGE = 5;
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  /**
   * Permite crear un arreglo con las paginas basado en el total de paginas y la pagina actual
   */
  const getPageNumbers = () => {
    const startIndex = Math.max(Math.min(page - Math.floor(PAGE_RANGE / 2), totalPages - PAGE_RANGE + 1), 1);
    const endIndex = Math.min(startIndex + PAGE_RANGE - 1, totalPages);

    return Array.from({ length: endIndex - startIndex + 1 }, (_, index) => startIndex + index);
  };

  return (
    <nav className="flex items-center justify-center my-2" aria-label="Page navigation">
        <ul className="inline-flex space-x-2">
            <li>
                <Link href={`/search?query=${query}&page=${page - 1}`} title='Pagina anterior' className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150  bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </Link>
            </li>
                {
                    getPageNumbers().map((pageNumber) => (
                        <li key={pageNumber}>
                            <Link href={`/search?query=${query}&page=${pageNumber}`} title={`navigate to page ${pageNumber}`} style={{ display: page !== pageNumber ? 'flex' : 'none'}} className={`w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 items-center justify-center`}>{ pageNumber }</Link>
                            <Link href={`/search?query=${query}&page=${pageNumber}`} title={`navigate to page ${pageNumber}`} style={{ display: page === pageNumber ? 'flex' : 'none'}} className="w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline items-center justify-center">{ pageNumber }</Link>
                        </li>
                    ))
                }
            <li>
                <Link href={`/search?query=${query}&page=${page + 1}`} title='Siguiente pagina' className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </Link>
            </li>
        </ul>
    </nav>
  )
}