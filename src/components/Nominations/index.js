import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Row, Col } from 'react-grid-system';
import PropTypes from 'prop-types';
import { MdMovie, MdDoneAll } from "react-icons/md";

import queryOMDB from '../../utils/api.js';
import MovieCard from '../MovieCard';
import './style.css';

class Nominations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieSearchResults: [],
            nominatedMovies: [],
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

    //TODO: this is O(n), where n is the length of nominatedMovies
    // a faster way to do this?
    isNominated = (movie) => {
        const { nominatedMovies } = this.state;
        return nominatedMovies.map(movie => movie.imdbID).includes(movie.imdbID);
    }

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

        const { movieSearchResults, nominatedMovies, loading } = this.state;

        return (
            <Container className="nominations">
                <Row>
                    <Col md={6}>
                        <h2><MdMovie className="icon" />Search Results</h2>
                        {loading ?
                            <Skeleton count={10} height={80} />
                            :
                            movieSearchResults.length === 0 ?
                                <p className="notice">No search results.</p>
                                :
                                movieSearchResults.map(movie => (
                                    <MovieCard
                                        key={movie.imdbID}
                                        movie={movie}
                                        disabled={this.isNominated(movie) || nominatedMovies.length === 5}
                                        isSearchResult={true}
                                        onButtonClick={this.nominateMovie}
                                    />
                                ))
                        }
                    </Col>
                    <Col md={6}>
                        <h2><MdDoneAll className="icon" />Nominations <span style={{ color: "#5E8E3F" }}>
                            ({nominatedMovies.length}/5)
                        </span></h2>
                        {nominatedMovies.length === 0 ?
                            <p className="notice">No nominations yet.</p>
                            :
                            nominatedMovies.map(movie => (
                                <MovieCard
                                    key={movie.imdbID}
                                    movie={movie}
                                    isSearchResult={false}
                                    onButtonClick={this.denominateMovie}
                                />
                            ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

Nominations.propsTypes = {
    movieQuery: PropTypes.string.isRequired
}

export default Nominations;