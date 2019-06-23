import React from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Route exact path='/' render={() => <SignUp />} />
      <Route path='/signin' render={() => <SignIn />} />
    </div>
  );
};

export default Home;
