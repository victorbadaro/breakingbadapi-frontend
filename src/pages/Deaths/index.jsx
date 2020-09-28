import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Item from '../../components/Item';
import Footer from '../../components/Footer';

import api from '../../services/api';

import './styles.css';

export default function Deaths() {
    const [deaths, setDeaths] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const characters = await getCharacters();
            let deaths = await getDeaths();

            deaths = deaths.map(death => ({
                ...death,
                last_words: death.last_words !== 'Unknown' ? death.last_words : '',
                responsible: characters.find(character => character.name === death.responsible) ?
                                characters.find(character => character.name === death.responsible) :
                                {
                                    name: death.responsible,
                                    img: 'http://www.placehold.it/500x500?text=Image Not Found'
                                }
            }));

            setDeaths(deaths);
        }

        fetchData();
    }, []);

    async function getDeaths() {
        const response = await api.get('deaths');
        const deaths = response.data;

        return deaths;
    }

    async function getCharacters() {
        const response = await api.get('characters')
        const characters = response.data

        return characters;
    }
    
    return (
        <>
            <Header />
            <MainSection title="Deaths">
                {deaths.map(death => (
                    <Item key={death.death_id}>
                        <h3>{death.death}</h3>
                        <div className="item-content grid-2">
                            <div>
                                <p>Cause: {death.cause}</p>
                                {death.last_words && <p>Last words: <i>"{death.last_words}"</i></p>}
                                <p>Season: {death.season}</p>
                                <p>Episode: {death.episode}</p>
                                <p>Number of deaths: {death.number_of_deaths}</p>
                            </div>
                            <div className="profile separator">
                                <p>Responsible:</p>
                                <img src={death.responsible.img} alt="imagem"/>
                                <p>{death.responsible.name}</p>
                            </div>
                        </div>
                    </Item>
                ))}
            </MainSection>
            <Footer />
        </>
    );
}