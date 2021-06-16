import React, { Component } from 'react';
import './App.css';
import Table from '../src/components/Table'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux-store'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path='/' component={Table} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
