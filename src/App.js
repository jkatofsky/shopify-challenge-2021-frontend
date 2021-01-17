import React, { Component } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Nominations from './components/Nominations';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieQuery: ""
        }
    }

    render() {

        const { movieQuery } = this.state;

        return (
            <div className="App" >
                <Header />
                <Search onQueryChange={movieQuery => this.setState({ movieQuery })} />
                <hr />
                <Nominations movieQuery={movieQuery} />
            </div>
        );
    }
}

export default App;
