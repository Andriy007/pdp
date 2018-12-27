import React from "react";
import { Route, Switch } from 'react-router';
import LoginPage from "../components/loginPage/";
import RegisterPage  from "../components/registerPage"


const routes = (
  <div>
    <main>
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/' component={LoginPage}/>
      </Switch>
    </main>
  </div>
);

export default routes;
