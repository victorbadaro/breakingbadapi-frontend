import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Footer from '../../components/Footer';

import api from '../../services/api';

import './styles.css';

export default function Deaths() {
    const [deaths, setDeaths] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const deaths = await getDeaths();
            setDeaths(deaths);
        }

        fetchData();
    }, []);

    async function getDeaths() {
        const response = await api.get('deaths');
        const deaths = response.data;

        return deaths;
    }
    
    return (
        <>
            <Header />
            <MainSection title="Deaths">

            </MainSection>
            <Footer />
        </>
    );
}