import { MovieFavorite } from "@/interfaces";

/**
 * toggleFavorites: Agregar o eliminar una película de la lista de favoritos
 * @param movie Película a guardar
 */
export const toggleFavorites = ( movie: MovieFavorite) => {
    let favorites: MovieFavorite[] = JSON.parse( localStorage.getItem('favorites') || '[]');

    const findMovie = favorites.find(favorite => favorite.id === movie.id);
    if(findMovie){
        favorites = favorites.filter( favorite => favorite.id != movie.id );
    }else{
        favorites.push(movie);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

/**
 * Verifica si una película se encuentra en favoritos basado en el id
 * @param id id de la película
 */
export const existInFavorites = ( id: number ): boolean =>{
    if( typeof window === 'undefined') return false;
    const favorites: MovieFavorite[] = JSON.parse( localStorage.getItem('favorites') || '[]' );
    return !!favorites.find(favorite => favorite.id === id);
}

/**
 * Lista de películas favoritas
 * @returns Películas favoritas
 */
export const moviesFavorites = (): MovieFavorite[] => {
    if( typeof window === 'undefined') return [];
    return JSON.parse( localStorage.getItem('favorites') || '[]');
}