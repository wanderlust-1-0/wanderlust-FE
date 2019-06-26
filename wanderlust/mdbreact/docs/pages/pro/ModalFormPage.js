import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, ModalHeader, MDBModalFooter, MDBRow, MDBInput,  MDBIcon, MDBCol, MDBTabContent, MDBTabPane, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import "./ModalFormPage.css";
import DocsLink from "./../../components/docsLink";

class ModalFormPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    activeItem: "1"
  }

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  toggleTab = tab => () => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Modal Form"
          href="https://mdbootstrap.com/docs/react/modals/basic/"
        />
        <h4 className="mt-4">Cascading modal register / login</h4>
        <MDBRow>
          <MDBBtn rounded onClick={this.toggle(1)}>
            Launch Modal Login/Register
          </MDBBtn>
          <MDBModal
            className="form-cascading"
            isOpen={this.state.modal1}
            toggle={this.toggle(1)}
          >
            <MDBNav
              tabs
              className="md-tabs nav-justified tabs-2 light-blue darken-3"
              style={{ margin: "-1.5rem 1rem 0 1rem" }}
            >
              <MDBNavItem>
                <MDBNavLink
                  className={this.state.activeItem === 1 ? "active" : ""}
                  to="#"
                  onClick={this.toggleTab("1")}
                >
                  <MDBIcon icon="user" className="mr-1" />
                  Login
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  className={this.state.activeItem === 2 ? "active" : ""}
                  to="#"
                  onClick={this.toggleTab("2")}
                >
                  <MDBIcon icon="user-plus" className="mr-1" />
                  Register
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.activeItem}>
              <MDBTabPane tabId="1">
                <MDBModalBody className="mx-3">
                  <form className=" mx-3 grey-text">
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </form>
                </MDBModalBody>
                <MDBModalFooter className="justify-content-center mx-3">
                  <MDBBtn
                    className="mb-4"
                    color="info"
                    onClick={this.toggle(3)}
                  >
                    LOG IN <MDBIcon icon="sign-in-alt" className="ml-1" />
                  </MDBBtn>
                  <MDBRow
                    className="w-100 justify-content-start pt-4"
                    style={{ borderTop: "1px solid #e9ecef" }}
                  >
                    <div id="options">
                      <p className="font-small grey-text">
                        N
                        <span
                          className="blue-text ml-1"
                          onClick={this.toggleTab("2")}
                        >
                          Sign Up
                        </span>
                      </p>
                      <p className="font-small grey-text">
                        Forgot <span className="blue-text ml-1">password?</span>
                      </p>
                    </div>
                    <MDBBtn outline color="info" onClick={this.toggle(1)}>
                      CLOSE
                    </MDBBtn>
                  </MDBRow>
                </MDBModalFooter>
              </MDBTabPane>
              <MDBTabPane tabId="2">
                <MDBModalBody className="mx-3">
                  <form className=" mx-3 grey-text">
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                    <MDBInput
                      label="Repeat password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </form>
                </MDBModalBody>
                <MDBModalFooter className="justify-content-center mx-3">
                  <MDBBtn
                    className="mb-4"
                    color="info"
                    onClick={this.toggle(3)}
                  >
                    SIGN UP
                    <MDBIcon icon="sign-in-alt" className="ml-1" />
                  </MDBBtn>
                  <MDBRow
                    className="w-100 justify-content-start pt-4"
                    style={{ borderTop: "1px solid #e9ecef" }}
                  >
                    <div id="options">
                      <p className="font-small grey-text">
                        Already have an account?
                        <span
                          className="blue-text ml-1"
                          onClick={this.toggleTab("1")}
                        >
                          Log in
                        </span>
                      </p>
                    </div>
                    <MDBBtn outline color="info" onClick={this.toggle(1)}>
                      CLOSE
                    </MDBBtn>
                  </MDBRow>
                </MDBModalFooter>
              </MDBTabPane>
            </MDBTabContent>
          </MDBModal>
        </MDBRow>

        <h4 className="mt-4">Elegant modal login</h4>
        <MDBRow>
          <MDBBtn rounded onClick={this.toggle(2)}>
            Launch Modal Login Form
          </MDBBtn>
          <MDBModal
            className="form-elegant"
            isOpen={this.state.modal2}
            toggle={this.toggle(2)}
          >
            <ModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold my-3"
              toggle={this.toggle(2)}
            >
              Sign in
            </ModalHeader>
            <MDBModalBody className="mx-3">
              <form className=" mx-3 grey-text">
                <MDBInput label="Your email" group type="email" validate />
                <MDBInput label="Your password" group type="password" validate />
                <p className="font-small blue-text text-right">
                  Forgot password?
                </p>
              </form>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center mx-4">
              <MDBBtn
                block
                rounded
                gradient="blue"
                onClick={this.toggle(2)}
              >
                SIGN IN
              </MDBBtn>
              <p className="font-small dark-grey-text my-4">or Sign in with:</p>
              <MDBRow className="py-3">
                <MDBBtn rounded color="white" className="mr-md-3">
                  <MDBIcon fab icon="facebook" className="text-center blue-text" />
                </MDBBtn>
                <MDBBtn rounded color="white" className="mr-md-3">
                  <MDBIcon fab icon="twitter" className="text-center blue-text" />
                </MDBBtn>
                <MDBBtn rounded color="white" className="mr-md-3">
                  <MDBIcon fab icon="google-plus" className="text-center blue-text" />
                </MDBBtn>
              </MDBRow>
              <MDBRow
                className="mx-5 w-100 py-3 justify-content-end"
                style={{ borderTop: "1px solid #e9ecef" }}
              >
                <p className="font-small grey-text">
                  Not a member? <span className="blue-text ml-1"> Sign Up</span>
                </p>
              </MDBRow>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>

        <h4 className="mt-4">Dark modal register</h4>
        <MDBRow>
          <MDBBtn rounded onClick={this.toggle(3)}>
            Launch Modal Register Form
          </MDBBtn>
          <MDBModal
            className="form-dark"
            contentClassName="card card-image"
            isOpen={this.state.modal3}
            toggle={this.toggle(3)}
          >
            <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <ModalHeader
                className="text-center"
                titleClass="w-100 font-weight-bold white-text"
                toggle={this.toggle(3)}
              >
                SIGN
                <span className="green-text"> UP</span>
              </ModalHeader>
              <MDBModalBody>
                <form className="mx-3 grey-text">
                  <MDBInput label="Your email" group type="email" validate />
                  <MDBInput label="Your password" group type="password" validate />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="modalFormDarkCheckbox"
                  />
                  <label
                    htmlFor="modalFormDarkCheckbox"
                    className="white-text form-check-label"
                  >
                    Accept the
                    <span className="green-text font-weight-bold">
                      Terms and Conditions
                    </span>
                  </label>
                </form>
              </MDBModalBody>
              <MDBModalFooter className="justify-content-center">
                <MDBCol md="12" className="mb-3">
                  <MDBBtn
                    block
                    rounded
                    color="success"
                    onClick={this.toggle(3)}
                  >
                    SIGN UP
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="12" className="mb-3 text-right font-small">
                  Have an account?
                  <span className="green-text ml-1 font-weight-bold">
                    Log in
                  </span>
                </MDBCol>
              </MDBModalFooter>
            </div>
          </MDBModal>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ModalFormPage;
