import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../actions";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import firebase from "firebase/app";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    // isTourGuide: false,
    // error: null,
  };

  handleInputChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSignUp = (event, method) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.signUp(method, { email, password }).then(() => {
      this.props.history.push("/create-account");
    });
  };

  render() {
    return (
      <div>
        <span className='h4 poppins-font main-color-blue'>
          Sign Up for Wanderlust
        </span>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <form onSubmit={(event) => this.handleSignUp(event, "email")}>
                <div className='grey-text'>
                  <MDBInput
                    label='Email'
                    group
                    size='sm'
                    type='email'
                    validate
                    error='wrong'
                    success='right'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChanges}
                    autoComplete='on'
                  />
                  <MDBInput
                    label='Password'
                    group
                    size='sm'
                    type='password'
                    validate
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChanges}
                    autoComplete='on'
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MDBInput
                    label='Remember Me?'
                    type='checkbox'
                    id='checkbox2'
                    checked={this.state.isTourGuide}
                    onChange={this.checkedTourGuide}
                  />

                  <div className='text-center'>
                    <MDBBtn
                      size='md'
                      gradient='blue'
                      type='submit'
                      className='py-2 px-5'
                    >
                      Sign Up
                    </MDBBtn>
                  </div>
                </div>
              </form>
              <p className='text-center my-3'>or</p>
              <div style={{ display: "flex" }}>
                <MDBBtn
                  onClick={(event) => this.handleSignUp(event, "facebook")}
                  color='blue'
                  size='sm'
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MDBIcon fab icon='facebook' size='2x' className='px-2' />
                  Sign In with Facebook
                </MDBBtn>
                <MDBBtn
                  onClick={(event) => this.handleSignUp(event, "google")}
                  color='red'
                  size='sm'
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MDBIcon fab icon='google' size='2x' className='px-2' />
                  Sign In with Google
                </MDBBtn>
              </div>
              <div
                className='info'
                style={{ display: "flex", justifyContent: "center" }}
              >
                <span className='h9 poppins-font'>
                  Already have an account?{" "}
                  <strong className='main-color-blue linker'>
                    <Link exact to='/signin'>
                      Sign In
                    </Link>
                  </strong>
                </span>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, {
  signUp,
})(SignUp);
