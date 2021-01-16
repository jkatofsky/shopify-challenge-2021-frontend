import React, { Component } from 'react';
import PropTypes from 'prop-types';

//TODO: implement
class Nominations extends Component {
    render() {
        return <></>;
    }
}

Nominations.propsTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Poster: PropTypes.string
    })).isRequired
}

export default Nominations;