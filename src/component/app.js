import React from 'react'
import { hot } from 'react-hot-loader'


import BDTab from './tab';
import BDDetail from './detail';
import BDAbout from './about';
import BDLogin from './login';
import BDAddress from './address';
import BDAddressedit from './addressedit';



import { HashRouter as Router, Route, Link } from "react-router-dom";




const App = () => (
    <Router>
    <div>
        <Route exact path="/" component={BDTab} />
        <Route  path="/detail" component={BDDetail} />
        <Route  path="/about" component={BDAbout} />
        <Route  path="/login" component={BDLogin} />
        <Route  path="/address" component={BDAddress} />
        <Route  path="/addressedit" component={BDAddressedit} />
        
        </div>
    </Router>

    //  <BDTab />
)

export default hot(module)(App)