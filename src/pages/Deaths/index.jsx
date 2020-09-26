import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

export default function Deaths() {
    const [deaths, setDeaths] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const deaths = await getDeaths();
            setDeaths(deaths);
        }

        fetchData();
    }, []);

    console.log(deaths)

    async function getDeaths() {
        const response = await api.get('deaths');
        const deaths = response.data;

        return deaths;
    }
    
    return (
        <>
            <Header />
            <h1>Deaths Page</h1>
            <ul>
                {deaths.map(death => (
                    <li key={death.death_id}>{death.death}</li>
                ))}
            </ul>
        </>
    );
}