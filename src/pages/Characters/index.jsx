import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

export default function Home() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const characters = await getCharacters();
            setCharacters(characters);
        }

        fetchData();
    }, []);

    console.log(characters);

    async function getCharacters() {
        const response = await api.get('characters')
        const characters = response.data

        return characters;
    }

    return (
        <>
            <Header />
            <h1>Characters Page</h1>
            <ul>
                {characters.map(character => (
                    <li key={character.char_id}>{character.name}</li>
                ))}
            </ul>
        </>
    );
}