import React from 'react';
import SignUp from '../components/SignUp';
import { Route } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Route exact path='/signup' render={() => <SignUp />} />
      <Route path='/signin' render={() => <SignIn />} />
    </div>
  );
};

export default Login;
