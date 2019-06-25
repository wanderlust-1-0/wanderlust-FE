import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBModalFooter,   MDBCardHeader } from "mdbreact";
import DocsLink from "../../components/docsLink";
import "./Forms.css";

const FormsPage = () => {
  return (
    <MDBContainer className="mt-5">
      <DocsLink
        title="Forms"
        href="https://mdbootstrap.com/docs/react/forms/basic/"
      />
      <section className="form-elegant">
        <h2 className="mb-5">A gradient login form</h2>
        <MDBRow>
          <MDBCol md="5">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header warm-flame-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <label
                  htmlFor="defaultFormEmailEx"
                  className="grey-text font-weight-light"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormEmailEx"
                  className="form-control"
                />

                <label
                  htmlFor="defaultFormPasswordEx"
                  className="grey-text font-weight-light"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="defaultFormPasswordEx"
                  className="form-control"
                />

                <div className="text-center mt-4">
                  <MDBBtn color="deep-orange" className="mb-3" type="submit">
                    Login
                  </MDBBtn>
                </div>

                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p>Not a member? Sign Up</p>
                    <p>Forgot Password?</p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
      <section className="form-elegant my-5">
        <MDBRow>
          <MDBCol md="5">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>

                <div className="text-center mt-4">
                  <MDBBtn
                    color="light-blue"
                    className="mb-3"
                    type="submit"
                  >
                    Login
                  </MDBBtn>
                </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p>Not a member? Sign Up</p>
                    <p>Forgot Password?</p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
      <hr className="my-5" />
      <section className="form-elegant">
        <h2 className="my-5">Form elegant</h2>
        <MDBRow>
          <MDBCol md="5">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Sign in</strong>
                  </h3>
                </div>
                <MDBInput
                  label="Your email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                />
                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  Forgot
                  <a href="#!" className="blue-text ml-1">
                    Password?
                  </a>
                </p>
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                  >
                    Sign in
                  </MDBBtn>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                  or Sign in with:
                </p>
                <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon
                      brand
                      icon="facebook"
                      className="blue-text text-center"
                    />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon brand icon="twitter" className="blue-text" />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="z-depth-1a"
                  >
                    <MDBIcon brand icon="google-plus" className="blue-text" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <a href="#!" className="blue-text ml-1">
                    Sign Up
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
      <hr className="my-5" />
      <section className="form-gradient">
        <h2 className="mb-5">Form gradient</h2>
        <MDBRow>
          <MDBCol md="5">
            <MDBCard>
              <div className="header pt-3 peach-gradient">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="white-text mb-3 pt-3 font-weight-bold">
                    Log in
                  </h3>
                </MDBRow>
                <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                  <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                    <MDBIcon brand icon="facebook" size="lg" className="white-text" />
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                    <MDBIcon brand icon="twitter" size="lg" className="white-text" />
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                    <MDBIcon brand icon="google-plus" size="lg" className="white-text" />
                  </a>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput label="Your email" group type="text" validate />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                />
                <p className="font-small grey-text d-flex justify-content-end">
                  Forgot
                  <a
                    href="#!"
                    className="dark-grey-text ml-1 font-weight-bold"
                  >
                    Password?
                  </a>
                </p>
                <MDBRow className="d-flex align-items-center mb-4 mt-5">
                  <MDBCol md="5" className="d-flex align-items-start">
                    <div className="text-center">
                      <MDBBtn
                        color="grey"
                        rounded
                        type="button"
                        className="z-depth-1a"
                      >
                        Log in
                      </MDBBtn>
                    </div>
                  </MDBCol>
                  <MDBCol md="7" className="d-flex justify-content-end">
                    <p className="font-small grey-text mt-3">
                      Don't have an account?
                      <a
                        href="#!"
                        className="dark-grey-text ml-1 font-weight-bold"
                      >
                        Sign up
                      </a>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
      <hr className="my-5" />
      <section className="form-light">
        <h2 className="mb-5">Form light</h2>
        <MDBRow>
          <MDBCol md="5">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="pink-text mb-5">
                    <strong>Sign up</strong>
                  </h3>
                </div>
                <MDBInput label="Your email" group type="text" validate />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                />
                <div className="md-form pb-3">
                  <div className="form-check my-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck12"
                    />
                    <label htmlFor="defaultCheck12" className="grey-text">
                      Accept the
                      <a href="#!" className="blue-text">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <MDBRow className="d-flex align-items-center mb-4">
                  <MDBCol md="6" className="text-center">
                    <button
                      type="button"
                      className="btn btn-pink btn-block btn-rounded z-depth-1"
                    >
                      Sign up
                    </button>
                  </MDBCol>
                  <MDBCol md="6">
                    <p className="font-small grey-text d-flex justify-content-end">
                      Have an account?
                      <a href="#!" className="blue-text ml-1">
                        Log in
                      </a>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <div className="footer pt-3 mdb-color lighten-3">
                <MDBRow className="d-flex justify-content-center">
                  <p className="font-small white-text mb-2 pt-3">
                    or Sign up with:
                  </p>
                </MDBRow>
                <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                  <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                    <MDBIcon brand icon="facebook" size="lg" className="white-text " />
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                    <MDBIcon brand icon="twitter" className="white-text" />
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                    <MDBIcon brand icon="google-plus" size="lg" className="white-text" />
                  </a>
                </MDBRow>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
      <hr className="my-5" />
      <section className="form-dark">
        <h2 className="mb-5">Form dark</h2>
        <MDBRow>
          <MDBCol md="5">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)",
                width: "28rem"
              }}
            >
              <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                <div className="text-center">
                  <h3 className="white-text mb-5 mt-4 font-weight-bold">
                    <strong>SIGN</strong>
                    <a href="#!" className="green-text font-weight-bold">
                      <strong> UP</strong>
                    </a>
                  </h3>
                </div>
                <MDBInput label="Your email" group type="text" validate />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                />
                <div className="md-form pb-3">
                  <div className="form-check my-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck17"
                    />
                    <label
                      className="form-check-label white-text"
                      htmlFor="defaultCheck17"
                    >
                      Accept the
                      <a href="#!" className="green-text font-weight-bold">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <MDBRow className="d-flex align-items-center mb-4">
                  <div className="text-center mb-3 col-md-12">
                    <MDBBtn
                      color="success"
                      rounded
                      type="button"
                      className="btn-block z-depth-1"
                    >
                      Sign in
                    </MDBBtn>
                  </div>
                </MDBRow>
                <MDBCol md="12">
                  <p className="font-small white-text d-flex justify-content-end">
                    Have an account?
                    <a href="#!" className="green-text ml-1 font-weight-bold">
                      Log in
                    </a>
                  </p>
                </MDBCol>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
      <hr className="my-5" />
      <section className="form-simple">
        <h2 className="mb-5">Form simple</h2>
        <MDBRow>
          <MDBCol md="5">
            <MDBCard>
              <div className="header pt-3 grey lighten-2">
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                    Log in
                  </h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput label="Your email" group type="text" validate />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                />
                <p className="font-small grey-text d-flex justify-content-end">
                  Forgot
                  <a
                    href="#!"
                    className="dark-grey-text font-weight-bold ml-1"
                  >
                    Password?
                  </a>
                </p>
                <div className="text-center mb-4 mt-5">
                  <MDBBtn
                    color="danger"
                    type="button"
                    className="btn-block z-depth-2"
                  >
                    Log in
                  </MDBBtn>
                </div>
                <p className="font-small grey-text d-flex justify-content-center">
                  Don't have an account?
                  <a
                    href="#!"
                    className="dark-grey-text font-weight-bold ml-1"
                  >
                    Sign up
                  </a>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default FormsPage;
