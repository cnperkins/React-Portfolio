import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';




const Main = () => (
    <Switch>
        <Route exact path={["/", "/React-Portfolio"]} component={LandingPage} />
        <Route path={["/contact", "/React-Portfolio/contact"]} component={Contact} />
        <Route path={["/projects", "/React-Portfolio/projects"]} component={Projects} />
    </Switch>
)


export default Main;