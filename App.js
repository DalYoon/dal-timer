import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Timer from './components/Timer';
import reducer from './reducer';

let store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}

export default App;