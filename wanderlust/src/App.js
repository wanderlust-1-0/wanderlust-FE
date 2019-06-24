import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import ExploreTours from './views/ExploreTours';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Route path='/' render={() => <Home />} />
      <Route path='/dashboard' render={() => <Dashboard />} />
      <Route path='/explore-tours' render={() => <ExploreTours />} />
    </div>
  );
}

export default App;
