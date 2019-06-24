import React from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* <header>
        <h1>Wanderlust</h1>
        <nav>
          <a href='#' />
        </nav>
      </header> */}
      <Route exact path='/' render={props => <SignUp {...props} />} />
      <Route exact path='/signin' render={props => <SignIn {...props} />} />
      {/* <footer>@copy; Wanderlust 2019</footer> */}
    </div>
  );
};

export default Home;
