import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Dashboard from './views/Dashboard';
import ExploreTours from './views/ExploreTours';
import Tour from './views/Tour';
import AddTour from './views/AddTour';
import CreatAccount from './views/CreateAccount';
import Settings from './views/Settings';
import Logout from './views/Logout';
import Users from './views/Users';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' render={props => <SignUp {...props} />} />
      <Route exact path='/signin' render={props => <SignIn {...props} />} />
      <Route exact path='/dashboard' render={() => <Dashboard />} />
      <Route exact path='/explore-tours' render={() => <ExploreTours />} />
      <Route exact path='/tours/:id' render={() => <Tour />} />
      <Route exact path='/add-tour' render={() => <AddTour />} />

      <Route exact path='/create-account' render={(props) => <CreatAccount {...props} />} />

      <Route exact path='/settings' render={() => <Settings />} />
      <Route exact path='/logout' render={() => <Logout />} />
      <Route exact path='/users' render={() => <Users />} />
    </div>
  );
}

export default App;
