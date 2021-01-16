import React, { Component } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Nominations from './components/Nominations';
import queryOMDB from './utils/api.js';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    fetchMovies = async (query) => {
        const movies = await queryOMDB(query);
        console.log(movies);
        this.setState({ movies })
    }

    render() {

        const { movies } = this.state;

        return (
            <div className="App" >
                <Header />
                <Search onQueryChange={query => this.fetchMovies(query)} />
                <Nominations movies={movies} />
            </div>
        );
    }
}

export default App;
