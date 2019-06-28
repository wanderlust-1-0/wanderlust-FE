import React from 'react';
import { Redirect } from 'react-router';

class Logout extends React.Component {

  componentDidMount() {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('username');
  }

  render() {
    return <Redirect to='/' />;
  }
}

export default Logout;
