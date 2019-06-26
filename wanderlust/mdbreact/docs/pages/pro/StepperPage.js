import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import DocsLink from "../../components/docsLink";

class StepperPage extends Component {

  state={
    formActivePanel1: 1,
    formActivePanel1Changed: false,
    formActivePanel2: 1,
    formActivePanel2Changed: false,
    formActivePanel3: 1,
    formActivePanel3Changed: false
  }

  swapFormActive = a => param => e => {
    this.setState({
      ["formActivePanel" + a]: param,
      ["formActivePanel" + a + "Changed"]: true
    });
  };

  handleNextPrevClick = a => param => e => {
    this.setState({
      ["formActivePanel" + a]: param,
      ["formActivePanel" + a + "Changed"]: true
    });
  };

  handleSubmission = () => {
    alert("Form submitted!");
  };

  calculateAutofocus = a => {
    if (this.state["formActivePanel" + a + "Changed"]) {
      return true;
    }
  };

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Steppers"
          href="https://mdbootstrap.com/docs/react/components/stepper/"
        />
        <MDBContainer className="mt-5">
          <h2>Horizontal stepper</h2>
          <MDBStepper>
            <MDBStep className="completed">
              <a href="#!">
                <span className="circle">1</span>
                <span className="label">First step</span>
              </a>
            </MDBStep>
            <MDBStep className="active">
              <a href="#!">
                <span className="circle">2</span>
                <span className="label">Second step</span>
              </a>
            </MDBStep>
            <MDBStep className="warning">
              <a href="#!">
                <span className="circle">
                  <MDBIcon icon="warning" />
                </span>
                <span className="label">Third step</span>
              </a>
            </MDBStep>
          </MDBStepper>

          <hr className="my-5" />
          <h2>Vertical stepper</h2>

          <MDBStepper vertical>
            <MDBStep className="completed">
              <a href="#!">
                <span className="circle">1</span>
                <span className="label">First step</span>
              </a>
            </MDBStep>
            <MDBStep className="active">
              <a href="#!">
                <span className="circle">2</span>
                <span className="label">Second step</span>
              </a>
              <div className="step-content grey lighten-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  cupiditate voluptate facere iusto quaerat vitae excepturi,
                  accusantium ut aliquam repellat atque nesciunt nostrum
                  similique. Inventore nostrum ut, nobis porro sapiente.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore error excepturi veniam nemo repellendus, distinctio
                  soluta vitae at sit saepe. Optio eaque quia excepturi adipisci
                  pariatur totam, atque odit fugiat.
                </p>
                <p>
                  Deserunt voluptatem illum quae nisi soluta eum perferendis
                  nesciunt asperiores tempore saepe reiciendis, vero quod a
                  dolor corporis natus qui magni quas fuga rem excepturi
                  laboriosam. Quisquam expedita ab fugiat.
                </p>
              </div>
            </MDBStep>
            <MDBStep className="warning">
              <a href="#!">
                <span className="circle">
                  <MDBIcon icon="exclamation-triangle" />
                </span>
                <span className="label">Third step</span>
              </a>
            </MDBStep>
            <MDBStep>
              <a href="#!">
                <span className="circle">4</span>
                <span className="label">Fourth step</span>
              </a>
            </MDBStep>
            <MDBRow className="mt-1">
              <MDBCol md="12" className="text-right">
                <MDBBtn flat>Cancel</MDBBtn>
                <MDBBtn color="primary">Next </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBStepper>

          <hr className="my-5" />
          <h2>Steps within form</h2>

          <MDBRow>
            <MDBCol xl="6" lg="7" md="10">
              <MDBCard>
                <MDBCardBody>
                  <h2 className="text-center font-weight-bold pt-4 pb-5">
                    <strong>Steps form example</strong>
                  </h2>
                  <MDBStepper form>
                    <MDBStep form>
                      <a href="#formstep1" onClick={this.swapFormActive(1)(1)}>
                        <MDBBtn
                          color={
                            this.state.formActivePanel1 === 1
                              ? "indigo"
                              : "default"
                          }
                          circle
                        >
                          1
                        </MDBBtn>
                      </a>
                      <p>MDBStep 1</p>
                    </MDBStep>
                    <MDBStep form>
                      <a href="#formstep2" onClick={this.swapFormActive(1)(2)}>
                        <MDBBtn
                          color={
                            this.state.formActivePanel1 === 2
                              ? "indigo"
                              : "default"
                          }
                          circle
                        >
                          2
                        </MDBBtn>
                      </a>
                      <p>MDBStep 2</p>
                    </MDBStep>
                    <MDBStep form>
                      <a href="#formstep3" onClick={this.swapFormActive(1)(3)}>
                        <MDBBtn
                          color={
                            this.state.formActivePanel1 === 3
                              ? "indigo"
                              : "default"
                          }
                          circle
                        >
                          3
                        </MDBBtn>
                      </a>
                      <p>MDBStep 3</p>
                    </MDBStep>
                  </MDBStepper>

                  <form action="" method="post">
                    <MDBRow>
                      {this.state.formActivePanel1 === 1 && (
                        <MDBCol md="12">
                          <h3 className="font-weight-bold pl-0 my-4">
                            <strong>MDBStep 1</strong>
                          </h3>
                          <MDBInput
                            label="First Name"
                            className="mt-3"
                            autoFocus={this.calculateAutofocus(1)}
                          />
                          <MDBInput label="Last Name" className="mt-3" />
                          <MDBInput label="Address" type="textarea" rows="2" />
                          <MDBBtn
                            color="indigo"
                            rounded
                            className="float-right"
                            onClick={this.handleNextPrevClick(1)(2)}
                          >
                            next
                          </MDBBtn>
                        </MDBCol>
                      )}
                      {this.state.formActivePanel1 === 2 && (
                        <MDBCol md="12">
                          <h3 className="font-weight-bold pl-0 my-4">
                            <strong>MDBStep 2</strong>
                          </h3>
                          <MDBInput
                            label="Company Name"
                            className="mt-4"
                            autoFocus={this.calculateAutofocus(1)}
                          />
                          <MDBInput label="Company Address" className="mt-4" />
                          <MDBBtn
                            color="indigo"
                            rounded
                            className="float-left"
                            onClick={this.handleNextPrevClick(1)(1)}
                          >
                            previous
                          </MDBBtn>
                          <MDBBtn
                            color="indigo"
                            rounded
                            className="float-right"
                            onClick={this.handleNextPrevClick(1)(3)}
                          >
                            next
                          </MDBBtn>
                        </MDBCol>
                      )}
                      {this.state.formActivePanel1 === 3 && (
                        <MDBCol md="12">
                          <h3 className="font-weight-bold pl-0 my-4">
                            <strong>MDBStep 3</strong>
                          </h3>
                          <MDBBtn
                            color="indigo"
                            rounded
                            className="float-left"
                            onClick={this.handleNextPrevClick(1)(2)}
                            autoFocus={this.calculateAutofocus(1)}
                          >
                            previous
                          </MDBBtn>
                          <MDBBtn
                            color="default"
                            rounded
                            className="float-right"
                            onClick={this.handleSubmission}
                          >
                            submit
                          </MDBBtn>
                        </MDBCol>
                      )}
                    </MDBRow>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

          <hr className="my-5" />
          <h2>Registration form with steps</h2>

          <MDBCard>
            <MDBCardBody>
              <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2">
                <strong>Registration form</strong>
              </h2>
              <MDBStepper icon>
                <MDBStep
                  icon="folder-open"
                  stepName="Basic Information"
                  onClick={this.swapFormActive(2)(1)}
                />
                <MDBStep
                  icon="pencil-alt"
                  stepName="Personal Data"
                  onClick={this.swapFormActive(2)(2)}
                />
                <MDBStep
                  icon="image"
                  stepName="Terms and Conditions"
                  onClick={this.swapFormActive(2)(3)}
                />
                <MDBStep
                  icon="check"
                  stepName="Finish"
                  onClick={this.swapFormActive(2)(4)}
                />
              </MDBStepper>

              <form action="" method="post">
                <MDBRow>
                  {this.state.formActivePanel2 === 1 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Basic Information</strong>
                      </h3>
                      <MDBInput
                        label="Email"
                        className="mt-4"
                        autoFocus={this.calculateAutofocus(2)}
                      />
                      <MDBInput label="Username" className="mt-4" />
                      <MDBInput label="Password" className="mt-4" />
                      <MDBInput label="Repeat Password" className="mt-4" />
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-right"
                        onClick={this.handleNextPrevClick(2)(2)}
                      >
                        next
                      </MDBBtn>
                    </MDBCol>
                  )}
                  {this.state.formActivePanel2 === 2 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Personal Data</strong>
                      </h3>
                      <MDBInput
                        label="First Name"
                        className="mt-3"
                        autoFocus={this.calculateAutofocus(2)}
                      />
                      <MDBInput label="Second Name" className="mt-3" />
                      <MDBInput label="Surname" className="mt-3" />
                      <MDBInput label="Address" type="textarea" rows="2" />
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-left"
                        onClick={this.handleNextPrevClick(2)(1)}
                      >
                        previous
                      </MDBBtn>
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-right"
                        onClick={this.handleNextPrevClick(2)(3)}
                      >
                        next
                      </MDBBtn>
                    </MDBCol>
                  )}
                  {this.state.formActivePanel2 === 3 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Terms and conditions</strong>
                      </h3>
                      <MDBInput
                        label="I agreee to the terms and conditions"
                        type="checkbox"
                        id="checkbox"
                        autoFocus={this.calculateAutofocus(2)}
                      />
                      <MDBInput
                        label="I want to receive newsletter"
                        type="checkbox"
                        id="checkbox2"
                      />
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-left"
                        onClick={this.handleNextPrevClick(2)(2)}
                      >
                        previous
                      </MDBBtn>
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-right"
                        onClick={this.handleNextPrevClick(2)(4)}
                      >
                        next
                      </MDBBtn>
                    </MDBCol>
                  )}

                  {this.state.formActivePanel2 === 4 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Finish</strong>
                      </h3>
                      <h2 className="text-center font-weight-bold my-4">
                        Registration completed!
                      </h2>
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-left"
                        onClick={this.handleNextPrevClick(2)(3)}
                      >
                        previous
                      </MDBBtn>
                      <MDBBtn
                        color="success"
                        rounded
                        className="float-right"
                        onClick={this.handleSubmission}
                      >
                        submit
                      </MDBBtn>
                    </MDBCol>
                  )}
                </MDBRow>
              </form>
            </MDBCardBody>
          </MDBCard>

          <hr className="my-5" />
          <h2>Vertical registration form steps</h2>

          <MDBCard>
            <MDBCardBody>
              <MDBRow className="pt-5 justify-content-center">
                <MDBCol md="2" className="pl-5 pl-md-0 pb-5">
                  <MDBStepper icon vertical>
                    <MDBStep
                      icon="folder-open"
                      stepName="Basic Information"
                      onClick={this.swapFormActive(3)(1)}
                      vertical
                    />
                    <MDBStep
                      icon="pencil-alt"
                      stepName="Personal Data"
                      onClick={this.swapFormActive(3)(2)}
                      vertical
                    />
                    <MDBStep
                      icon="image"
                      stepName="Terms and Conditions"
                      onClick={this.swapFormActive(3)(3)}
                      vertical
                    />
                    <MDBStep
                      icon="check"
                      stepName="Finish"
                      onClick={this.swapFormActive(3)(4)}
                      vertical
                    />
                  </MDBStepper>
                </MDBCol>

                <MDBCol md="7">
                  {this.state.formActivePanel3 === 1 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Basic Information</strong>
                      </h3>
                      <MDBInput
                        label="Email"
                        className="mt-4"
                        autoFocus={this.calculateAutofocus(3)}
                      />
                      <MDBInput label="Username" className="mt-4" />
                      <MDBInput label="Password" className="mt-4" />
                      <MDBInput label="Repeat Password" className="mt-4" />
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-right"
                        onClick={this.handleNextPrevClick(3)(2)}
                      >
                        next
                      </MDBBtn>
                    </MDBCol>
                  )}
                  {this.state.formActivePanel3 === 2 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Personal Data</strong>
                      </h3>
                      <MDBInput
                        label="First Name"
                        className="mt-3"
                        autoFocus={this.calculateAutofocus(3)}
                      />
                      <MDBInput label="Second Name" className="mt-3" />
                      <MDBInput label="Surname" className="mt-3" />
                      <MDBInput label="Address" type="textarea" rows="2" />
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-left"
                        onClick={this.handleNextPrevClick(3)(1)}
                      >
                        previous
                      </MDBBtn>
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-right"
                        onClick={this.handleNextPrevClick(3)(3)}
                      >
                        next
                      </MDBBtn>
                    </MDBCol>
                  )}
                  {this.state.formActivePanel3 === 3 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Terms and conditions</strong>
                      </h3>
                      <MDBInput
                        label="I agreee to the terms and conditions"
                        type="checkbox"
                        id="checkbox3"
                        autoFocus={this.calculateAutofocus(3)}
                      />
                      <MDBInput
                        label="I want to receive newsletter"
                        type="checkbox"
                        id="checkbox4"
                      />
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-left"
                        onClick={this.handleNextPrevClick(3)(2)}
                      >
                        previous
                      </MDBBtn>
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-right"
                        onClick={this.handleNextPrevClick(3)(4)}
                      >
                        next
                      </MDBBtn>
                    </MDBCol>
                  )}
                  {this.state.formActivePanel3 === 4 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Finish</strong>
                      </h3>
                      <h2 className="text-center font-weight-bold my-4">
                        Registration completed!
                      </h2>
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-left"
                        onClick={this.handleNextPrevClick(3)(3)}
                      >
                        previous
                      </MDBBtn>
                      <MDBBtn
                        color="success"
                        rounded
                        className="float-right"
                        onClick={this.handleSubmission}
                      >
                        submit
                      </MDBBtn>
                    </MDBCol>
                  )}
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default StepperPage;
