import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryOMDB from '../../utils/api.js';


class Nominations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieSearchResults: [],
            nominatedMovies: []
        }
    }

    componentDidUpdate(prevProps) {
        const { movieQuery } = this.props;
        if (prevProps.movieQuery !== movieQuery) {
            this.updateMovies(movieQuery);
        }
    }

    updateMovies = async (movieQuery) => {
        const movieSearchResults = await queryOMDB(movieQuery);
        this.setState({ movieSearchResults })
    }

    //TODO: this is O(n), where n is the length of nominatedMovies
    // a faster way to do this?
    isNominated = (movie) => {
        const { nominatedMovies } = this.state;
        return nominatedMovies.map(movie => movie.imdbID).includes(movie.imdbID);
    }

    // TODO: can I use cleaner function syntax for these setStates?
    nominateMovie = (movie) => {
        const { nominatedMovies } = this.state;
        nominatedMovies.push(movie);
        this.setState({ nominatedMovies });
    }

    denominateMovie = (movie) => {
        const { nominatedMovies } = this.state;
        nominatedMovies.splice(nominatedMovies.indexOf(movie), 1);
        this.setState({ nominatedMovies });
    }

    render() {

        const { movieSearchResults, nominatedMovies } = this.state;

        return <>
            {/* TODO: set keys for everything! */}
            <h1>Search results:</h1>
            {/* TODO: use loading state (set in updateMovies)
            and render a react-loading-skeleton instead of the search results */}
            {movieSearchResults.map(movie => (
                <h3 onClick={() => this.nominateMovie(movie)}>
                    {movie.Title}{this.isNominated(movie) && "NOMINATED"}
                </h3>
            ))}
            <h1>Nominated movies:</h1>
            {nominatedMovies.map(movie => (
                <h3 onClick={() => this.denominateMovie(movie)}>
                    {movie.Title}
                </h3>
            ))}
        </>;
    }
}

Nominations.propsTypes = {
    movieQuery: PropTypes.string.isRequired
}

export default Nominations;