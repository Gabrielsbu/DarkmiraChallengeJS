import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Links from './components/Links';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Links}></Route>
        </BrowserRouter>
    );
}

export default Routes;