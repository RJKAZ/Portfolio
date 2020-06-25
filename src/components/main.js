import React from 'react';
import {Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';

import Contact from './contact';
import Projects from './project';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
 
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    {/*<Route path="/resume" component={Resume} /> */}
  </Switch>
)

export default Main;