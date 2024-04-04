/**
 * Permite transformar el nombre de una película para poder mostrarlo en la url
 * @param name nombre de la película
 * @returns nombre-de-la-movie
 */
export const transformNameToUrl = (name: string) => {
    // Convertir a minúsculas y reemplazar espacios con guiones
    let result = name.toLowerCase().replace(/\s+/g, '-');
  
    // Eliminar caracteres no deseados
    result = result.replace(/[^a-z0-9-]/g, '');
  
    return result;
}