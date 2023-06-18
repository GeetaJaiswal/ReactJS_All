import React from 'react';
import About from './About';
import Contact from './Contact';
import Name from './Name';
import Error from './Error';
import {Route,Switch} from 'react-router-dom';

const App = () => {
    return(
        <>
            <Switch>
                <Route exact path="/" component={About}/>         
                                                                        {/*   '/' for default url      */}
                <Route exact path="/contact" component={Contact}/>
                <Route path="/contact/Name" component={Name}/>
                <Route component={Error}/>
            </Switch>
        </>
    );
}

export default App;