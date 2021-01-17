import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
    render() {
        return (
            <footer>
                <p>© 2021 <a href="https://github.com/jkatofsky/"
                    target="_blank" rel="noreferrer">Josh Katofsky</a>
                </p>
                <p><a href="https://github.com/jkatofsky/shopify-challenge-2021-frontend" target="_blank" rel="noreferrer">View Source</a></p>
            </footer>
        );
    }
}

export default Footer;