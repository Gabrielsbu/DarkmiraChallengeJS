import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Administracao from './Pages/Administracao';
import Ofertas from './Pages/Ofertas';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main}></Route>
            <Route path="/admin" exact component={Administracao}></Route>
            <Route path="/offers" exact component={Ofertas}></Route>
            
        </BrowserRouter>
    );
}

export default Routes;