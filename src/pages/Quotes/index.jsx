import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Item from '../../components/Item';
import Footer from '../../components/Footer';

import api from '../../services/api';

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const characters = await getCharacters();
            let quotes = await getQuotes();

            quotes = quotes.map(quote => ({
                ...quote,
                author: characters.find(character => character.name === quote.author) ?
                        characters.find(character => character.name === quote.author) :
                        {
                            name: quote.author,
                            img: 'http://www.placehold.it/500x500?text=Image Not Found'
                        }
            }))
            setQuotes(quotes);
        }

        fetchData();
    }, []);

    async function getQuotes() {
        const response = await api.get('quotes');
        const quotes = response.data;

        return quotes;
    }

    async function getCharacters() {
        const response = await api.get('characters')
        const characters = response.data

        return characters;
    }

    return (
        <>
            <Header />
            <MainSection title="Quotes">
                {quotes.map(quote => (
                    <Item key={quote.quote_id}>
                        <div className="item-content grid-2 center">
                            <p>Quote: <i>"{quote.quote}"</i></p>
                            <div className="profile separator">
                                <p>Author:</p>
                                <img src={quote.author.img} alt={quote.author.name}/>
                                <p>{quote.author.name}</p>
                            </div>
                        </div>
                    </Item>
                ))}
            </MainSection>
            <Footer />
        </>
    );
}