import React, { Component } from 'react';
import { Connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Name' />
          </div>
          <div>
            <label htmlFor=''>Email</label>
            <input type='text' placeholder='Email' />
          </div>
          <div>
            <label htmlFor=''>Phone</label>
            <input type='text' placeholder='Phone' />
          </div>
          <div>
            <label htmlFor=''>Password</label>
            <input type='text' placeholder='Password' />
          </div>
          <div>
            <div>Register as a guide</div>
            <div>Checkbox</div>
          </div>
          <button>Sign Up</button>
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

export default SignUp;
