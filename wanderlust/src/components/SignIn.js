import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions';
import { Redirect, Link } from 'react-router-dom';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountData: {
        email: '',
        password: '',
      },
    };
  }

  signin = event => {
    event.preventDefault();
    if (this.state.accountData.email === 'guide') {
      this.props.signin(this.state.accountData).then(() => {
        this.props.history.push('/dashboard');
      });
    }
    if (this.state.accountData.email === 'user') {
      this.props.signin(this.state.accountData).then(() => {
        this.props.history.push('/explore-tours');
      });
    }
  };

  handleInput = event => {
    this.setState({
      accountData: {
        ...this.state.accountData,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    // if (localStorage.getItem('authentication_token')) {
    //   return <Redirect to='/' />;
    // }
    return (
      <div>
        <h2>Sign in to Wanderlust</h2>
        <form onSubmit={this.signin}>
          <input
            type='text' // Todo: change back type to email
            name='email'
            placeholder='Email'
            value={this.state.accountData.email}
            onChange={this.handleInput}
            autoComplete='off'
          />
          <input
            type='password'
            name='password'
            placeholer='Password'
            value={this.state.accountData.password}
            onChange={this.handleInput}
            autoComplete='off'
          />
          <button type='submit'>Sign In</button>
          <div className='signup-wrapper'>
            <h2>Don't have an account?</h2>
            <Link to='/'>
              <div>Sign Up</div>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { signin },
)(SignIn);
