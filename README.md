# The Shoppies

My submission for the Shopify 2021 Summer Web Developer Intern Challenge.

## Requirements

A webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

- Search results should come from OMDB's API.
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
Display a banner when the user has 5 nominations.

## My Added Bells and Whistles

- Movie results link to their IMDB page so users can get more information.
- Movie posters included in results.
- Mobile-ready.
- Aesthetics: Shopify colour theme & SVG icons.

## TODOs (time permitting)

- More styling improvements.
  - Add animations?
  - Refactor to use SCSS?
  - Refactor to use Material UI?
- Make there be a banner when 5 movies nominated, as opposed to the current count-down.
- Remembering of nominations after reload / shareable links (could be two birds w/ one stone if nominated movie IDs are saved as url params).
- Movie pagination.
- Add a footer with info about me.
