import React from 'react';
import { Redirect } from 'react-router';

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    localStorage.removeItem('auth-token');
  }

  render() {
    return <Redirect to='/' />;
  }
}

export default Logout;
