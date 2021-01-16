//this is (obviously) bad practice, but this is a toy project
//and it's pretty harmless to leak a key to this particular API

//TODO: if I have extra time, use an env variable? 
//then, atleast the key will only show in the production code and not in the repo
const API_KEY = 'ae7fe47b';
const OMDB_URL = 'http://www.omdbapi.com/';

export default async function queryOMDB(query) {
    try {
        const response = await fetch(`${OMDB_URL}?apikey=${API_KEY}&s=${query}&type=movie`);
        const responseData = await response.json();
        return responseData;
    } catch (err) {
        console.log(err);
        return null;
    }
}