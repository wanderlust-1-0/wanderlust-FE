import React from "react";
import { connect } from "react-redux";
import { signin } from "../actions";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  signin = (event) => {
    event.preventDefault();
    this.props.signin(this.state).then(() => {
      this.props.history.push("/create-account");
    });
  };

  handleInput = (event) => {
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
                    label='Email'
                    group
                    size='sm'
                    type='email'
                    validate
                    error='wrong'
                    success='right'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInput}
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
                    onChange={this.handleInput}
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
                      Sign In
                    </MDBBtn>
                  </div>
                </div>
              </form>
              <p className='text-center my-3'>or</p>
              <div style={{ display: "flex" }}>
                <MDBBtn
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
                  Don't have an account?{" "}
                  <strong className='main-color-blue linker'>
                    <Link exact to='/'>
                      Sign Up
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

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { signin })(SignIn);
