import React, { Component } from 'react';
import './App.scss';
import routes from './routes'
import { Provider } from 'react-redux'
import store from './geese/store'
import { HashRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <HashRouter>
      <div className="App">
        {routes}
      </div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
