import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NotFoundPage from '../NotFoundPage';
import AppWrapper from './AppWrapper';

class App extends Component {
  render() {
    return (
          <AppWrapper> 
            <Switch>
              <Route path="/quote/vehicle/car" component={NotFoundPage} />
              <Route path="/quote/vehicle/commercial" component={NotFoundPage} />
              <Route path="/quote/home" component={NotFoundPage} />
              <Route path="/quote/leaner" component={NotFoundPage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </AppWrapper>
        );
  }
}

export default App;
