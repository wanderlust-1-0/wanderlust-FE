import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp, addNewGuideToStore, addNewTouristToStore } from "../actions";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    isTourGuide: false,
    error: null,
  };

  handleInputChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  checkedTourGuide = () => {
    if (this.state.isTourGuide) {
      this.setState((prevState) => ({
        ...prevState,
        isTourGuide: false,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        isTourGuide: true,
      }));
    }
  };

  signUp = (event) => {
    event.preventDefault();
    if (this.state.isTourGuide) {
      this.props.addNewGuideToStore(this.state);
      this.props.signUp(this.state).then(() => {
        this.props.history.push("/signin");
      });
    } else {
      this.props.addNewTouristToStore(this.state);
      this.props.signUp(this.state).then(() => {
        this.props.history.push("/signin");
      });
    }
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
              <form onSubmit={this.signUp}>
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
                    onChange={this.handleInputChanges}
                    autoComplete='off'
                  />
                  <MDBInput
                    label='Type your password'
                    group
                    type='password'
                    validate
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChanges}
                    autoComplete='off'
                  />
                </div>

                <MDBInput
                  label='Are you a tour guide?'
                  type='checkbox'
                  id='checkbox2'
                  checked={this.state.isTourGuide}
                  onChange={this.checkedTourGuide}
                />

                <div className='text-center'>
                  <MDBBtn gradient='blue' type='submit'>
                    Sign Up
                  </MDBBtn>
                </div>
                <div className='info'>
                  <span className='h9 poppins-font'>
                    Already have an account?{" "}
                    <strong className='main-color-blue linker'>
                      <Link exact to='/signin'>
                        Sign In
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

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, {
  signUp,
  addNewGuideToStore,
  addNewTouristToStore,
})(SignUp);
