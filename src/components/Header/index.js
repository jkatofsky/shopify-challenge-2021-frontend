import React from 'react';
import logo from './logo.png';
import "./style.css";

export default function Header() {
    return <header>
        <img src={logo} alt="" />
        <div>
            <h1>The 2021 Shoppies</h1>
            <h2>Nomination Platform</h2>
        </div>
    </header>;
}