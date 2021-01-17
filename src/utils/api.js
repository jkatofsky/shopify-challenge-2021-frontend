//it's (obviously) bad practice to include the key here, but this is a toy project
//and it's harmless to leak a key to this particular API
//in a real system, the API calls would need to be handled by a backend

const API_KEY = 'ae7fe47b';
const OMDB_URL = 'https://www.omdbapi.com/';

export default async function queryOMDB(query) {
    try {
        const response = await fetch(`${OMDB_URL}?apikey=${API_KEY}&type=movie&s=${query}`);
        const searchResults = await response.json();
        if (searchResults.Response === 'False') {
            return [];
        }
        return searchResults.Search;
    } catch (err) {
        console.error(err);
        return [];
    }
}