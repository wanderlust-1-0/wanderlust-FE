import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../actions';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    phone: '',
    isTourGuide: false,
  };

  handleInputChanges = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  checkedTourGuide = () => {
    if (this.state.isTourGuide) {
      this.setState(prevState => ({
        ...prevState,
        isTourGuide: false,
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        isTourGuide: true,
      }));
    }
  };

  signUp = event => {
    event.preventDefault();
    this.props.signUp(this.state).then(() => {
      this.props.history.push('/signin');
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.signUp}>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={this.state.name}
              onChange={this.handleInputChanges}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={this.state.email}
              onChange={this.handleInputChanges}
            />
          </div>
          <div>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              placeholder='Phone'
              name='phone'
              value={this.state.phone}
              onChange={this.handleInputChanges}
            />
          </div>
          <div>
            <label htmlFor=''>Password</label>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={this.state.password}
              onChange={this.handleInputChanges}
            />
          </div>
          <div>
            <span>Register as a guide</span>
            <input
              type='checkbox'
              checked={this.state.isTourGuide}
              onChange={this.checkedTourGuide}
            />
          </div>

          <button type='submit'>Sign Up</button>

          <div>
            <div>Already have an account</div>
            <Link to='/signin'>
              <div>Sign In</div>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(
  mapStateToProps,
  { signUp },
)(SignUp);
