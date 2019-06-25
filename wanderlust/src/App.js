import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import ExploreTours from './views/ExploreTours';
import Tour from './views/Tour';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Route path='/' render={() => <Home />} />
      <Route path='/dashboard' render={() => <Dashboard />} />
      <Route path='/explore-tours' render={() => <ExploreTours />} />
      <Route path='/tours/:id' render={() => <Tour />} />
    </div>
  );
}

export default App;
