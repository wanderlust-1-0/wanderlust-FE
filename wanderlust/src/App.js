import React from 'react';
import Home from './views/Home';
import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Route path='/' render={() => <Home />} />
    </div>
  );
}

export default App;
