import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
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
            <h1>Quotes Page</h1>
            <ul>
                {quotes.map(quote => (
                    <li key={quote.quote_id}>{quote.quote}</li>
                ))}
            </ul>
        </>
    );
}