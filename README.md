# The Shoppies

My submission for the Shopify 2021 Summer Web Developer Intern Challenge. Created with [React](https://www.reactjs.org) and an assortment of small component packages.

## Requirements

A webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

- Search results should come from OMDB's API.
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
Display a banner when the user has 5 nominations.

## My Bells and Whistles

- Use of dynamic grid system to make site mobile-ready.
- Movie results link to their IMDB page so users can get more information.
- Aesthetics: SVG icons, snackbar banner, loading skeleton, Shopify-inspired colour theme, etc.
- Movie posters included in results.

## Possible Improvements

- More aesthetic improvements.
  - Adding animations
  - Refactoring to use SCSS
  - Possibly refactoring to use Material UI
- Remembering nominations after reload (via local storage)
- Allowing for shareable link (via movie IDs as URL parameters - could also be a solution for the above bullet)
- Movie pagination.
