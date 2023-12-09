import React from 'react'
import { Route, Switch } from "react-router-dom";

import Page404 from './Assets/Components/Page404';
import Home from './Assets/Components/Home';

const Routes = () => {
  <Switch>
    <Route 
        exact path='/'
        component={Home}    
    />

    <Route component={Page404} />
  </Switch>
}

export default Routes