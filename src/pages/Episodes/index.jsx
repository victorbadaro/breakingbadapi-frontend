import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Footer from '../../components/Footer';

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

    async function getEpisodes() {
        const response = await api.get('episodes');
        const episodes = response.data;

        return episodes;
    }

    return (
        <>
            <Header />
            <MainSection title="Episodes">

            </MainSection>
            <Footer />
        </>
    );
}