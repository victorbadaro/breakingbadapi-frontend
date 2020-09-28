import React from 'react';

import './styles.css';

export default function Section(props) {
    return (
        <section>
            <h1>{props.title}</h1>
            {props.children}
        </section>
    );
}