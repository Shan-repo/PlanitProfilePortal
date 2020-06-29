import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Homepage from './homepage';
import Resume from './resume';
import Contact from './contact';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/resume"  component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path='/WebSite' component={() => { window.location.replace('https://www.planittesting.com/au/privacy'); return null;} } />
        <Route path='/terms' component={() => { window.location.replace('https://www.planittesting.com/au/terms-conditions'); return null;} } />
    </Switch>
)

export default Main;