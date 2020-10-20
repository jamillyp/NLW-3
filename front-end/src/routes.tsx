import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanateMap from './pages/OrphanateMap';

function Routes() {
    return (
    <BrowserRouter>
    <Switch>
       <Route exact  path='/' component={Landing} />
       <Route path='/mapa' component={OrphanateMap} /> 
    </Switch>
    </BrowserRouter>
    );
}

export default Routes;
