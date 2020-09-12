import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Administracao from './Pages/Administracao';
import Ofertas from './Pages/Ofertas';
import VisualizarOferta from './Pages/VisualizarOferta';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main}></Route>
            <Route path="/admin"  component={Administracao}></Route>
            <Route path="/offers"  component={Ofertas}></Route>
            <Route path="/view"  component={VisualizarOferta}></Route>
            
        </BrowserRouter>
    );
}

export default Routes;