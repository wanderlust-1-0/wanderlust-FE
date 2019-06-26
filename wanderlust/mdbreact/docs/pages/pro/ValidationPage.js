import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import DocsLink from "../../components/docsLink";

class FormsPage extends React.Component {
  state = {
    fname: "Mark",
    lname: "Otto",
    email: "",
    city: "",
    state: "",
    zip: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Form Validation"
          href="https://mdbootstrap.com/docs/react/forms/validation/"
        />
        <h2 className="mb-5">Material example</h2>
        <div>
          <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <MDBRow>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.fname}
                  name="fname"
                  onChange={this.changeHandler}
                  type="text"
                  id="materialFormRegisterNameEx"
                  label="First name"
                  required
                >
                  <div className="valid-feedback">Looks good!</div>
                </MDBInput>
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.lname}
                  name="lname"
                  onChange={this.changeHandler}
                  type="text"
                  id="materialFormRegisterEmailEx2"
                  label="Last name"
                  required
                >
                  <div className="valid-feedback">Looks good!</div>
                </MDBInput>
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.email}
                  onChange={this.changeHandler}
                  type="email"
                  id="materialFormRegisterConfirmEx3"
                  name="email"
                  label="Your Email address"
                >
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.city}
                  onChange={this.changeHandler}
                  type="text"
                  id="materialFormRegisterPasswordEx4"
                  name="city"
                  label="City"
                  required
                >
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBInput>
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.state}
                  onChange={this.changeHandler}
                  type="text"
                  id="materialFormRegisterPasswordEx4"
                  name="state"
                  label="State"
                  required
                >
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBInput>
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.zip}
                  onChange={this.changeHandler}
                  type="text"
                  id="materialFormRegisterPasswordEx4"
                  name="zip"
                  label="Zip"
                  required
                >
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBInput
                type="checkbox"
                value="conditions"
                id="materialInvalidCheck"
                required
                label="Agree to terms and conditions"
              >
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </MDBInput>
            </MDBRow>
            <MDBBtn color="success" type="submit">
              Submit Form
            </MDBBtn>
          </form>
        </div>

        <hr className="my-5" />
        <h2 className="mb-5">Browser defualt validation</h2>
        <div>
          <form>
            <MDBRow>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.fname}
                  name="fname"
                  onChange={this.changeHandler}
                  type="text"
                  id="browserFormRegisterNameEx"
                  label="First name"
                  required
                />
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.lname}
                  name="lname"
                  onChange={this.changeHandler}
                  type="text"
                  id="browserFormRegisterEmailEx2"
                  label="Last name"
                  required
                />
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.email}
                  onChange={this.changeHandler}
                  type="email"
                  id="browserFormRegisterConfirmEx3"
                  name="email"
                  label="Your Email address"
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.city}
                  onChange={this.changeHandler}
                  type="text"
                  id="browserFormRegisterPasswordEx4"
                  name="city"
                  label="City"
                  required
                />
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.state}
                  onChange={this.changeHandler}
                  type="text"
                  id="browserFormRegisterPasswordEx4"
                  name="state"
                  label="State"
                  required
                />
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  value={this.state.zip}
                  onChange={this.changeHandler}
                  type="text"
                  id="browserFormRegisterPasswordEx4"
                  name="zip"
                  label="Zip"
                  required
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBInput
                type="checkbox"
                value="conditions"
                id="browserInvalidCheck"
                required
                label="Agree to terms and conditions"
              />
            </MDBRow>
            <MDBBtn color="primary" type="submit">
              Submit Form
            </MDBBtn>
          </form>
        </div>

        <hr className="my-5" />
        <h2 className="mb-5">Supported elements</h2>
        <MDBRow className="mt-6">
          <MDBCol md="4">
            <form className="was-validated" noValidate>
              <MDBInput
                type="checkbox"
                id="customControlValidation1"
                label="Check this custom checkbox"
                required
              >
                <div className="invalid-feedback">
                  Example invalid feedback text
                </div>
              </MDBInput>

              <MDBInput
                type="radio"
                id="customControlValidation2"
                name="radio-stacked"
                required
                label="Toggle this custom radio"
              />

              <MDBInput
                type="radio"
                id="customControlValidation3"
                name="radio-stacked"
                required
                label="Or toggle this other custom radio"
              >
                <div className="invalid-feedback">
                  More example invalid feedback text
                </div>
              </MDBInput>
            </form>
          </MDBCol>
        </MDBRow>

        <hr className="my-5" />
        <h2 className="mb-5">Tooltips</h2>
        <MDBRow className="mt-6">
          <MDBCol md="">
            <form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <MDBRow>
                <MDBCol md="4">
                  <MDBInput
                    value={this.state.fname}
                    name="fname"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    label="First name"
                    required
                  >
                    <div style={{ top: "auto" }} className="valid-tooltip">
                      Looks good!
                    </div>
                  </MDBInput>
                </MDBCol>
                <MDBCol m="4">
                  <MDBInput
                    value={this.state.lname}
                    name="lname"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterEmailEx2"
                    label="Last name"
                    required
                  >
                    <div style={{ top: "auto" }} className="valid-tooltip">
                      Looks good!
                    </div>
                  </MDBInput>
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput
                    value={this.state.email}
                    onChange={this.changeHandler}
                    type="email"
                    id="defaultFormRegisterConfirmEx3"
                    name="email"
                    label="Your Email address"
                  >
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </MDBInput>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="4">
                  <MDBInput
                    value={this.state.city}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="city"
                    label="City"
                    required
                  >
                    <div style={{ top: "auto" }} className="invalid-tooltip">
                      Please provide a valid city.
                    </div>
                    <div style={{ top: "auto" }} className="valid-tooltip">
                      Looks good!
                    </div>
                  </MDBInput>
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput
                    value={this.state.state}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="state"
                    label="State"
                    required
                  >
                    <div style={{ top: "auto" }} className="invalid-tooltip">
                      Please provide a valid state.
                    </div>
                    <div style={{ top: "auto" }} className="valid-tooltip">
                      Looks good!
                    </div>
                  </MDBInput>
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput
                    value={this.state.zip}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="zip"
                    label="Zip"
                    required
                  >
                    <div style={{ top: "auto" }} className="invalid-tooltip">
                      Please provide a valid zip.
                    </div>
                    <div style={{ top: "auto" }} className="valid-tooltip">
                      Looks good!
                    </div>
                  </MDBInput>
                </MDBCol>
              </MDBRow>
              <MDBBtn className="mt-4" color="unique" type="submit">
                Submit Form
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default FormsPage;
