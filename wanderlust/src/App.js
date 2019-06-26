import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import ExploreTours from './views/ExploreTours';
import Tour from './views/Tour';
import Settings from './views/Settings';
import Logout from './views/Logout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className='App'>
      <Route path='/' render={props => <Home {...props} />} />
      <Route exact path='/dashboard' render={() => <Dashboard />} />
      <Route exact path='/explore-tours' render={() => <ExploreTours />} />
      <Route path='/tours/:id' render={() => <Tour />} />
      <Route exact path='/settings' render={() => <Settings />} />
      <Route exact path='/logout' render={() => <Logout />} />
    </div>
  );
}

export default App;
