import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import AboutMe from './aboutme';
import Resume from './resume';

const Main = () =>(
    <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/aboutme" component = {AboutMe} />
        <Route path = "/contact" component = {Contact} />
        <Route path = "/resume" component = {Resume} />
    </Switch>
)

export default Main;