import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdArrowForward, MdArrowBack } from "react-icons/md";

import "./style.css";

class MovieCard extends Component {
    render() {

        const { movie, disabled, isSearchResult, onButtonClick } = this.props;

        return <div className="movie-card" >
            <img src={movie.Poster} alt="" />
            <div className="movie-title">
                <a href={`https://www.imdb.com/title/${movie.imdbID}`}
                    target="_blank" rel="noreferrer">
                    <h4>{movie.Title}</h4>
                </a>
                <h5>{movie.Year}</h5>
            </div>
            <button
                className={isSearchResult ? "nominate-button" : "unnominate-button"}
                disabled={disabled}
                onClick={() => onButtonClick(movie)}
            >
                {isSearchResult
                    ? <span>Nominate <MdArrowForward className="icon" /></span>
                    : <span><MdArrowBack className="icon" />Un-Nominate</span>
                }
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