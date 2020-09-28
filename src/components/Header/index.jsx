import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
    return (
        <nav>
            <Link to="/characters">Characters</Link>
            <Link to="/deaths">Deaths</Link>
            <Link to="/episodes">Episodes</Link>
            <Link to="/quotes">Quotes</Link>
        </nav>
    );
}