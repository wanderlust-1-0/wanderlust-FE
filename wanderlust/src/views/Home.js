import React from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Route exact path='/' render={props => <SignUp {...props} />} />
      <Route path='/signin' render={props => <SignIn {...props} />} />
    </div>
  );
};

export default Home;
