import React, { Component } from "react";
import { updateUserById } from "../actions";
import { connect } from "react-redux";

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { MDBCard, MDBCardBody, MDBCardText } from "mdbreact";

import { MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";

class EditInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guideid: "",
      touristid: "",
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      istourguide: "",
      collapse: false,
      isWideEnough: false,
      modal: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  handleInputChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  componentDidMount() {
    const userObj = JSON.parse(localStorage.getItem("user"));

    this.setState(
      JSON.parse(localStorage.getItem("user")).istourguide
        ? {
            email: userObj.email,
            firstname: userObj.firstname,
            lastname: userObj.lastname,
            phonenumber: userObj.phonenumber,
            istourguide: userObj.isTourGuide,
            guideid: userObj.guideid,
          }
        : {
            email: userObj.email,
            firstname: userObj.firstname,
            lastname: userObj.lastname,
            phonenumber: userObj.phonenumber,
            istourguide: userObj.isTourGuide,
            tourists: userObj.tourists,
            touristid: userObj.touristid,
          }
    );
  }

  updateUserInfo = (e) => {
    e.preventDefault();
    const { email, firstname, lastname, phonenumber } = this.state;

    // JSON.parse(localStorage.getItem("user")).istourguide ?
    //   this.props.updateGuideById({ email, firstname, lastname, phonenumber }, this.state.guideid) :
    //   this.props.updateTouristById({ email, firstname, lastname, phonenumber }, this.state.touristid);
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol style={{ maxWidth: "50rem", minHeight: "65vh" }}>
              <MDBCard
                style={{
                  marginTop: "0%",
                  marginLeft: "0rem",
                  padding: "5rem",
                  paddingTop: "1.7rem",
                  width: "50rem",
                  height: "65vh",
                }}
              >
                <MDBCardBody>
                  <MDBCardText>
                    <form onSubmit={this.updateUserInfo}>
                      <div className='seperator' style={{ display: "flex" }}>
                        <div
                          className='left-side'
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <span
                            className='h3 poppins-font main-color-blue'
                            style={{ paddingBottom: "4rem" }}
                          >
                            Hello {this.state.firstname}!
                          </span>
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
                            Upload an image
                          </div>
                        </div>
                        <div
                          className='right-side'
                          style={{ marginLeft: "3rem" }}
                        >
                          <span className='h5 poppins-font main-color-blue'>
                            View or Edit your <br />
                            information
                          </span>
                          <div
                            className='grey-text'
                            style={{ marginLeft: "2rem" }}
                          >
                            <MDBInput
                              label='Type your first name'
                              group
                              type='text'
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='off'
                              name='firstname'
                              value={this.state.firstname}
                              onChange={this.handleInputChanges}
                              style={{
                                width: "15rem",
                                marginBottom: "0rem",
                                marginTop: "3rem",
                              }}
                            />
                            <MDBInput
                              label='Type your last name'
                              group
                              type='text'
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='off'
                              name='lastname'
                              value={this.state.lastname}
                              onChange={this.handleInputChanges}
                              style={{ width: "15rem", marginBottom: "0rem" }}
                            />
                            <MDBInput
                              label='Type your email'
                              group
                              type='text'
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='off'
                              name='email'
                              value={this.state.email}
                              onChange={this.handleInputChanges}
                              style={{ width: "15rem", marginBottom: "0rem" }}
                            />
                            <MDBInput
                              label='Type your phonenumber'
                              group
                              type='text'
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='off'
                              name='phonenumber'
                              value={this.state.phonenumber}
                              onChange={this.handleInputChanges}
                              style={{ width: "15rem", marginBottom: "0rem" }}
                            />
                          </div>
                          <div
                            className='text-left'
                            style={{ marginLeft: "0.8rem" }}
                          >
                            <MDBContainer>
                              <MDBBtn
                                gradient='blue'
                                type='submit'
                                color='indigo'
                                onClick={this.toggle}
                                style={{ width: "15rem" }}
                              >
                                Save
                              </MDBBtn>
                              <MDBModal
                                isOpen={this.state.modal}
                                toggle={this.toggle}
                              >
                                <MDBModalHeader
                                  toggle={this.toggle}
                                  style={{ border: "none" }}
                                ></MDBModalHeader>
                                <MDBModalBody
                                  style={{
                                    textAlign: "center",
                                    paddingBottom: "4rem",
                                    fontSize: "1.8rem",
                                    color: "green",
                                  }}
                                >
                                  Your settings has been updated!
                                </MDBModalBody>
                              </MDBModal>
                            </MDBContainer>
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

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { updateUserById })(EditInfoForm);
