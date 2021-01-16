import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./style.css";

class MovieCard extends Component {
    render() {

        const { movie, disabled, isSearchResult, onButtonClick } = this.props;

        return <div className="movie-card" >
            <img src={movie.Poster} alt="" />
            <div>
                <a href={`https://www.imdb.com/title/${movie.imdbID}`}
                    target="_blank" rel="noreferrer">
                    <h4>{movie.Title}</h4>
                </a>
                <h5>{movie.Year}</h5>
            </div>
            <button
                disabled={disabled}
                onClick={(e) => {
                    e.preventDefault();
                    onButtonClick(movie);
                }}
            >
                {isSearchResult ? "Nominate" : "De-Nominate"}
            </button>
        </div>;
    }
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    isSearchResult: PropTypes.bool.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}

export default MovieCard;