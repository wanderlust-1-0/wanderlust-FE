import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  signin = event => {
    event.preventDefault();
    this.props.signin(this.state).then(() => {
      this.props.history.push('/create-account');
    });
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <span className='h4 poppins-font main-color-blue'>
          Sign In to Wanderlust
        </span>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <form onSubmit={this.signin}>
                <div className='grey-text'>
                  <MDBInput
                    label='Type your username'
                    group
                    type='text'
                    validate
                    error='wrong'
                    success='right'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleInput}
                    autoComplete='off'
                  />
                  <MDBInput
                    label='Type your password'
                    group
                    type='password'
                    validate
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInput}
                    autoComplete='off'
                  />
                </div>
                <div className='text-center'>
                  <MDBBtn gradient='blue' type='submit'>
                    Sign In
                  </MDBBtn>
                </div>
                <div className='info'>
                  <span className='h9 poppins-font'>
                    Don't have an account?{' '}
                    <strong className='main-color-blue linker'>
                      <Link exact to='/'>
                        Sign Up
                      </Link>
                    </strong>
                  </span>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
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
