import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Item from '../../components/Item';
import Footer from '../../components/Footer';

import date from '../../utils/date';
import api from '../../services/api';

export default function Episodes() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let episodes = await getEpisodes();

            episodes = episodes.map(episode => ({
                ...episode,
                air_date: date(episode.air_date).isoFormat,
                characters: episode.characters.join(', ')
            }))
            setEpisodes(episodes);
        }

        fetchData();
    }, []);

    async function getEpisodes() {
        const response = await api.get('episodes');
        const episodes = response.data;

        return episodes;
    }

    return (
        <>
            <Header />
            <MainSection title="Episodes">
                {episodes.map(episode => (
                    <Item key={episode.episode_id}>
                        <h3>{episode.title}</h3>
                        <div className="item-content">
                            <p>Season: {episode.season}</p>
                            <p>Episode: {episode.episode}</p>
                            <p>Air date: {episode.air_date}</p>
                            <p>Characters: {episode.characters}</p>
                        </div>
                    </Item>
                ))}
            </MainSection>
            <Footer />
        </>
    );
}