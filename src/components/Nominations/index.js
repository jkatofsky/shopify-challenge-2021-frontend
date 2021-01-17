import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Row, Col } from 'react-grid-system';
import PropTypes from 'prop-types';
import { MdMovie, MdDoneAll, MdDelete } from "react-icons/md";
import { withSnackbar } from 'react-simple-snackbar'

import queryOMDB from '../../utils/api.js';
import MovieCard from '../MovieCard';
import './style.css';

class Nominations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieSearchResults: [],
            nominatedMovies: [],
            maxNominations: 5,
            loading: false
        }
    }

    componentDidUpdate(prevProps) {
        const { movieQuery } = this.props;
        if (prevProps.movieQuery !== movieQuery) {
            this.updateMovies(movieQuery);
        }
    }

    updateMovies = async (movieQuery) => {
        if (movieQuery.length === 0) {
            this.setState({ movieSearchResults: [] })
            return;
        }
        this.setState({ loading: true });
        const movieSearchResults = await queryOMDB(movieQuery);
        this.setState({ movieSearchResults, loading: false });
    }

    isNominated = (movie) => {
        const { nominatedMovies } = this.state;
        return nominatedMovies.map(movie => movie.imdbID).includes(movie.imdbID);
    }

    nominateMovie = (movie) => {
        const { nominatedMovies, maxNominations } = this.state;
        nominatedMovies.push(movie);
        if (nominatedMovies.length === maxNominations) {
            const { openSnackbar } = this.props
            openSnackbar("Nomination limit reached!")
        }
        this.setState({ nominatedMovies });
    }

    unnominateMovie = (movie) => {
        const { nominatedMovies } = this.state;
        nominatedMovies.splice(nominatedMovies.indexOf(movie), 1);
        this.setState({ nominatedMovies });
    }

    render() {

        const { movieSearchResults, nominatedMovies, maxNominations, loading } = this.state;

        return (
            <Container className="nominations">
                <Row>

                    <Col lg={6}>
                        <div className="nomination-col">
                            <h2><MdMovie className="icon" />Search Results</h2>
                            <div className="movies-wrapper">
                                {loading ?
                                    <Skeleton count={10} height={80} />
                                    :
                                    movieSearchResults.length === 0 ?
                                        <p className="notice">No search results yet.</p>
                                        :
                                        movieSearchResults.map(movie => (
                                            <MovieCard
                                                key={movie.imdbID}
                                                movie={movie}
                                                disabled={this.isNominated(movie) || nominatedMovies.length === maxNominations}
                                                isSearchResult={true}
                                                onButtonClick={this.nominateMovie}
                                            />
                                        ))
                                }
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="nomination-col">

                            <button disabled={nominatedMovies.length === 0}
                                onClick={() => this.setState({ nominatedMovies: [] })}
                                className="clear-nominations-btn">
                                <MdDelete className="icon" size={20} />
                            </button>

                            <h2><MdDoneAll className="icon" />Nominations&nbsp;
                        <span style={{ color: "#5E8E3F" }}>
                                    ({nominatedMovies.length}/{maxNominations})
                        </span>
                            </h2>
                            <div className="movies-wrapper">
                                {nominatedMovies.length === 0 ?
                                    <p className="notice">No nominations yet.</p>
                                    :
                                    nominatedMovies.map(movie => (
                                        <MovieCard
                                            key={movie.imdbID}
                                            movie={movie}
                                            isSearchResult={false}
                                            onButtonClick={this.unnominateMovie}
                                        />
                                    ))}
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        );
    }
}

Nominations.propsTypes = {
    movieQuery: PropTypes.string.isRequired
}

export default withSnackbar(Nominations, {
    position: 'top-left',
    style: {
        backgroundColor: '#95bf46',
        color: 'black',
        fontSize: '20px',
        textAlign: 'center',
        borderRadius: '20px',
        fontFamily: 'Roboto'
    },
    closeStyle: {
        color: 'black'
    }
});