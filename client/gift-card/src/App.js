import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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
            <Route path="/" exact component={Home}></Route>
            <Route path="/account" component={Account}></Route>
            <Route path="/auth" component={Auth}></Route>
            <Route path="/admin" component={Admin}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
