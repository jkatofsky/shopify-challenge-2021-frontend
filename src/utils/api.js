//this is (obviously) bad practice, but this is a toy project
//and it's pretty harmless to leak a key to this particular API

//TODO: if I have extra time, use an env variable? 
//then, atleast the key will only show in the production code and not in the repo
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