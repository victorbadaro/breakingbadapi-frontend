import React from 'react';

import './styles.css';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.name} onError="this.src='http://www.placehold.it/500x500?text=Image%20Not%20Found'" />
            <div className="container">
                <div className="card-content" ss-container>
                    <h3>{props.name} <i>({props.nickname})</i></h3>
                    <p>Birthday: <i>{props.birthday}</i></p>
                    <p>Seasons: <i>{props.appearance}</i></p>
                    <p>Status: <i>{props.status}</i></p>
                    <p>Portrayed: <i>{props.portrayed}</i></p>
                </div>
            </div>
        </div>
    );
}