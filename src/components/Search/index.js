import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { MdSearch } from "react-icons/md";

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
        return <div className="search-container">
            <div style={{ right: '5px;' }}>
                <MdSearch className='icon' size={50} />
            </div>
            <input placeholder='Search for a movie (e.g. "The Avengers")'
                type="text" onChange={this.handleQueryChange} />
        </div>;
    }
}

Search.propTypes = {
    onQueryChange: PropTypes.func.isRequired
}

export default Search;