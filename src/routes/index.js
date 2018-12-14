import React from 'react';
import { Route, Switch } from 'react-router';
import LoginPage from '../components/loginPage/';


const routes = (
  <div>
    <main>
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/' component={LoginPage}/>
      </Switch>
    </main>
  </div>
);

export default routes;
