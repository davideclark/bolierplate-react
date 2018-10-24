import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NotFoundPage from '../NotFoundPage';
import AppWrapper from './AppWrapper';

class App extends Component {
  render() {
    return (
          <AppWrapper> 
            <Switch>              
              <Route path="" component={NotFoundPage} />
            </Switch>
          </AppWrapper>
        );
  }
}

export default App;
