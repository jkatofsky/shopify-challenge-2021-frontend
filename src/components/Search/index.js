import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            typingTimeout: 0
        }
    }

    //inspired by: https://stackoverflow.com/a/42223871/6867216
    handleQueryChange = (event) => {
        const { typingTimeout } = this.state;
        const query = event.target.value;
        const { onQueryChange } = this.props;
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        this.setState({
            query, typingTimeout: setTimeout(() => onQueryChange(query), 300)
        });
    }

    render() {
        return <input placeholder="Search for a movie..." type="text" onChange={this.handleQueryChange} />;
    }
}

Search.propTypes = {
    onQueryChange: PropTypes.func.isRequired
}

export default Search;