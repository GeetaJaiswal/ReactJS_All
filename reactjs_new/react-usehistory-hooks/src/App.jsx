import React from 'react';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import User from './User';
import {Route,Switch} from 'react-router-dom';

const App = () => {
    return(
        <>
        <Menu/>
         <Switch>

                <Route exact path="/" component={() => <About name="About us"/>}/>         
                <Route exact path="/contact" render={() => <Contact name="Contact us"/>}/>
                <Route exact path="/user" render={() => <User name="User"/>}/>
                <Route path="/user/:name" component={User}/>
                <Route component={Error}/>
            </Switch>
        </>
    );
}

export default App;