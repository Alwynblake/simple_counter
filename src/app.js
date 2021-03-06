import React from 'react';
import Header from './components/header/header.js';
import Counter from './components/counter/counter.js';
import './app.scss';

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Header />
          <Counter />
        </React.Fragment>
    );
  }
}

export default App;
