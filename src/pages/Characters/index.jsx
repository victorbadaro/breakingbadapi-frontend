import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import date from '../../utils/date';
import api from '../../services/api';

import './styles.css';

export default function Home() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let characters = await getCharacters();

            characters = characters.map(character => ({
                ...character,
                birthday: character.birthday !== 'Unknown' ? date(character.birthday).isoFormat : 'Unknown',
                appearance: character.appearance ? character.appearance.join(', ') : ''
            }));

            setCharacters(characters);
        }

        fetchData();
    }, []);

    async function getCharacters() {
        const response = await api.get('characters')
        const characters = response.data

        return characters;
    }

    return (
        <>
            <Header />
            <MainSection title="Characters">
                <div className="cards">
                    {characters.map(character => (
                        <Card
                            key={character.char_id}
                            name={character.name}
                            birthday={character.birthday}
                            img={character.img}
                            status={character.status}
                            nickname={character.nickname}
                            appearance={character.appearance}
                            portrayed={character.portrayed}
                        />
                    ))}
                </div>
            </MainSection>
            <Footer />
        </>
    );
}