import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleUserById, updateUserById } from "../actions";
import firebase from "firebase/app";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
  MDBBtn,
} from "mdbreact";
import { MDBCard, MDBCardBody, MDBCardText } from "mdbreact";

class CreateAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTourGuide: false,
      first_name: "",
      last_name: "",
      phone_number: "",
      isRegistered: true,
      // displayName: "",
      // profilePhoto: "",
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.getSingleUserById();
  }

  componentWillReceiveProps() {
    console.log("Current user", this.props.user);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  handleSelect = (value) => {
    if (value) {
      this.setState((state) => {
        return {
          ...state,
          isTourGuide: !state.isTourGuide,
        };
      });
    } else {
      this.setState((state) => {
        return {
          ...state,
          isTourGuide: !state.isTourGuide,
        };
      });
    }
  };

  handleInputChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateUserById(this.state).then(() => {
      this.setState((state) => {
        return {
          ...state,
          first_name: "",
          last_name: "",
          phone_number: "",
        };
      });
      if (this.props.currentUser.isTourGuide) {
        this.props.history.push("/dashboard");
      } else {
        this.props.history.push("/explore-tours");
      }
    });
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol style={{ maxWidth: "50rem", minHeight: "65vh" }}>
              <MDBCard
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5rem",
                  width: "50rem",
                  height: "65vh",
                }}
              >
                <MDBCardBody>
                  <MDBCardText>
                    <form onSubmit={this.handleSubmit}>
                      <div className='seperator' style={{ display: "flex" }}>
                        <div
                          className='left-side'
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <h2
                            className='h2 poppins-font main-color-blue'
                            style={{ paddingBottom: "4rem" }}
                          >
                            Welcome!
                          </h2>
                          <h3 className='h3 poppins-font main-color-blue'>
                            {this.state.displayName}
                          </h3>
                          <span className='h5 poppins-font main-color-blue'>
                            Profile Photo
                          </span>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "200px",
                              width: "200px",
                              border: "1px dashed black",
                              borderRadius: "50%",
                              marginTop: "25%",
                            }}
                          >
                            <image
                              src={`${this.state.profilePhoto}`}
                              style={{
                                borderRadius: "50%",
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className='right-side'
                          style={{ marginLeft: "5rem" }}
                        >
                          <span className='h5 poppins-font main-color-blue'>
                            Create Your Account
                          </span>
                          <div
                            className='grey-text'
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <MDBSelect
                              required
                              getValue={this.handleSelect}
                              className='form-control'
                              color='secondary'
                              outline
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "4rem 0 0 0",
                                width: "100%",
                              }}
                            >
                              <MDBSelectInput />
                              <MDBSelectOptions>
                                <MDBSelectOption disabled>
                                  Choose account type
                                </MDBSelectOption>
                                <MDBSelectOption value={true}>
                                  Tour Guide
                                </MDBSelectOption>
                                <MDBSelectOption value={false}>
                                  Tourist
                                </MDBSelectOption>
                              </MDBSelectOptions>
                            </MDBSelect>

                            <MDBInput
                              label='First Name'
                              group
                              type='text'
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='off'
                              name='first_name'
                              value={this.state.first_name}
                              onChange={this.handleInputChanges}
                              style={{ width: "20rem", marginBottom: "0rem" }}
                            />
                            <MDBInput
                              label='Last Name'
                              group
                              type='text'
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='off'
                              name='last_name'
                              value={this.state.last_name}
                              onChange={this.handleInputChanges}
                              style={{ width: "20rem", marginBottom: "0rem" }}
                            />
                            <MDBInput
                              label='Phone Number'
                              group
                              type='text'
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='on'
                              name='phone_number'
                              value={this.state.phone_number}
                              onChange={this.handleInputChanges}
                              style={{ width: "20rem", marginBottom: "0rem" }}
                            />
                          </div>
                          <div className='text-left'>
                            <MDBBtn
                              gradient='blue'
                              type='submit'
                              style={{ width: "20rem", marginTop: "1rem" }}
                            >
                              Save
                            </MDBBtn>
                          </div>
                        </div>
                      </div>
                    </form>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("MStp in create guide form", state);
  return {
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps, { getSingleUserById, updateUserById })(
  CreateAccountForm
);
