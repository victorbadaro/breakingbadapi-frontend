import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
    return (
        <nav>
            <Link to="/characters">Personagens</Link>
            <Link to="/deaths">Mortes</Link>
            <Link to="/episodes">Episódios</Link>
            <Link to="/quotes">Citações</Link>
        </nav>
    );
}