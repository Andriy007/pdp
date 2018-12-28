import React from "react";
import { Route, Switch } from 'react-router';
import LoginPage  from "../components/loginPage";
import RegisterPage   from "../components/registerPage";
import HomePage from "../components/Home"


const routes = (
  <div>
    <main>
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/' component={LoginPage}/>
      </Switch>
    </main>
  </div>
);

export default routes;
