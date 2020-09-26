import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Characters from './pages/Characters';
import Deaths from './pages/Deaths';
import Episodes from './pages/Episodes';
import Quotes from './pages/Quotes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/characters" />
                </Route>
                
                <Route path="/characters" component={Characters} />
                <Route path="/deaths" component={Deaths} />
                <Route path="/episodes" component={Episodes} />
                <Route path="/quotes" component={Quotes} />
            </Switch>
        </BrowserRouter>
    );
}