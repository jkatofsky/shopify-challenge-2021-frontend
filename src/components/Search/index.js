import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            typingTimeout: 0
        }
    }

    //inspired by: https://stackoverflow.com/a/42223871/6867216
    changeQuery = (event) => {
        const { typingTimeout, query } = this.state;
        const { onQueryChange } = this.props;
        const self = this;
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        self.setState({
            query: event.target.value,
            typingTimeout: setTimeout(() => onQueryChange(query), 500)
        });
    }

    render() {
        return <input type="text" onChange={this.changeQuery} />;
    }
}

Search.propTypes = {
    onQueryChange: PropTypes.func.isRequired
}

export default Search;