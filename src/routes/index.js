import React from "react";
import { Route, Switch } from 'react-router';
import {PrivateRoute} from "../helpers/PrivateRoutes";
import LoginPage  from "../components/loginPage";
import RegisterPage   from "../components/registerPage";
import HomePage from "../components/Home"


const routes = (
  <div>
    <main>
      <Switch>
        <Route exact path='/authenticate' component={LoginPage}/>
        <Route path='/register' component={RegisterPage}/>
        <PrivateRoute path='/home' component={HomePage}/>
        <PrivateRoute exact path='/' component={HomePage}/>
      </Switch>
    </main>
  </div>
);

export default routes;
