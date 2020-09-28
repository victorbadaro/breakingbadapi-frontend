import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Footer from '../../components/Footer';

import api from '../../services/api';

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const quotes = await getQuotes();
            setQuotes(quotes);
        }

        fetchData();
    }, []);

    console.log(quotes);

    async function getQuotes() {
        const response = await api.get('quotes');
        const quotes = response.data;

        return quotes;
    }

    return (
        <>
            <Header />
            <MainSection title="Quotes">

            </MainSection>
            <Footer />

            {/* {quotes.map(quote => (
                <li key={quote.quote_id}>{quote.quote}</li>
            ))} */}
        </>
    );
}