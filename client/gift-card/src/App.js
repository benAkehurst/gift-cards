import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './hoc/PrivateRoute/PrivateRoute';

import Layout from './hoc/Layout/Layout';
import Auth from './Containers/Auth/Auth';
import Home from './Containers/Home/Home';
import Admin from './Containers/Admin/Admin';
import Account from './Containers/Account/Account';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/account" component={Account}></Route>
            <PrivateRoute exact path="/admin" component={Admin} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
