import { MovieFavorite } from "@/interfaces";

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

export const existInFavorites = ( id: number ): boolean =>{
    if( typeof window === 'undefined') return false;
    const favorites: MovieFavorite[] = JSON.parse( localStorage.getItem('favorites') || '[]' );
    return !!favorites.find(favorite => favorite.id === id);
}

export const moviesFavorites = (): number[] => {
    return JSON.parse( localStorage.getItem('favorites') || '[]');
}