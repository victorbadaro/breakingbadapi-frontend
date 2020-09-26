import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';

export default function Episodes() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const episodes = await getEpisodes();
            setEpisodes(episodes);
        }

        fetchData();
    }, []);

    console.log(episodes);

    async function getEpisodes() {
        const response = await api.get('episodes');
        const episodes = response.data;

        return episodes;
    }

    return (
        <>
            <Header />
            <h1>Episodes Page</h1>
            <ul>
                {episodes.map(episode => (
                    <li key={episode.episode_id}>{episode.title}</li>
                ))}
            </ul>
        </>
    );
}