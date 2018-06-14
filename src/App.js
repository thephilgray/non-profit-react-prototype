import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';

import withRoot from './withRoot';
import indexRoutes from './routes';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Non-Profit: Home</title>
        </Helmet>
        <Router history={history}>
          <Switch>
            {indexRoutes.map((props, key) => {
              return (
                <Route
                  path={props.path}
                  key={key}
                  component={props.component}
                />
              );
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRoot(App);
