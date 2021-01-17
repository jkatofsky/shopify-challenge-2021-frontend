import React, { Component } from 'react';
import SnackbarProvider from 'react-simple-snackbar'

import Header from './components/Header';
import Search from './components/Search';
import Nominations from './components/Nominations';
import Footer from './components/Footer';

import './App.css';

class App extends Component {

    //if my app was larger and had components further away from eachother in the DOM
    //that relied on the same data, I would need to bring in a state manager.
    //but for this purpose, having the root component hold the movieQuery suffices
    constructor(props) {
        super(props);
        this.state = {
            movieQuery: ""
        }
    }

    render() {

        const { movieQuery } = this.state;

        return (
            <SnackbarProvider>
                <div className="App" >
                    <Header />
                    <Search onQueryChange={movieQuery => this.setState({ movieQuery })} />
                    <Nominations movieQuery={movieQuery} />
                    <Footer />
                </div>
            </SnackbarProvider>
        );
    }
}

export default App;
