import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBRangeInput, MDBCard, MDBCol, MDBCardBody, MDBCardTitle, MDBCardImage,   MDBIcon, MDBBadge } from "mdbreact";
import DocsLink from "../../components/docsLink";

class SliderPage extends Component {
  state = {
    value: 0
  };

  handlePricingChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <MDBContainer className="my-5">
        <DocsLink
          title="Slider"
          href="https://mdbootstrap.com/docs/react/forms/slider/"
        />
        <MDBContainer className="mt-5">
          <div className="my-5">
            <label htmlFor="customRange1">Example range</label>
            <input type="range" className="custom-range" id="customRange1" />
          </div>

          <div className="my-5">
            <MDBRangeInput min={0} max={100} value={50} />
          </div>
          <MDBRow className="my-5" center>
            <MDBCol sm="4">
              <MDBCard>
                <MDBCardBody>
                  <h3 className="text-center font-weight-bold blue-text mt-3 mb-4 pb-4">
                    <strong>Slide to see the pricing change</strong>
                  </h3>
                  <hr />
                  <MDBRow className="my-4" center>
                    <MDBRangeInput
                      min={0}
                      max={96}
                      value={0}
                      formClassName="w-75"
                      getValue={this.handlePricingChange}
                    />
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center pb-5" size="6">
                      <h2>
                        <MDBBadge color="blue lighten-2" className="mb-4">
                          You earn
                        </MDBBadge>
                      </h2>
                      <h2 className="display-4" style={{ color: "#0d47a1" }}>
                        <strong>${this.state.value}</strong>
                      </h2>
                    </MDBCol>
                    <MDBCol className="text-center pb-5" size="6">
                      <h2>
                        <MDBBadge color="blue lighten-2" className="mb-4">
                          Client pays
                        </MDBBadge>
                      </h2>
                      <h2 className="display-4" style={{ color: "#0d47a1" }}>
                        <strong>${223 + +this.state.value}</strong>
                      </h2>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="4">
              <MDBCard>
                <MDBCardImage
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
                  overlay="white-slight"
                  hover
                  waves
                  alt="Card image cap"
                />
                <MDBCardBody>
                  <MDBCardTitle>Choose your slider option</MDBCardTitle>
                  <hr />
                  <MDBRow className="my-4" center>
                    <MDBIcon
                      className="font-weight-bold blue-text mr-2 mt-1"
                      icon="thumbs-down"
                    />
                    <MDBRangeInput
                      min={0}
                      max={100}
                      value={50}
                      formClassName="w-75"
                    />
                    <MDBIcon
                      className="font-weight-bold blue-text ml-2 mt-1"
                      icon="thumbs-up"
                    />
                  </MDBRow>
                  <MDBRow className="my-4" center>
                    <MDBIcon
                      className="font-weight-bold indigo-text mr-2 mt-1"
                      icon="dollar-sign"
                    />
                    <MDBRangeInput
                      min={0}
                      max={100}
                      value={50}
                      formClassName="w-75"
                    />
                    <MDBIcon
                      className="font-weight-bold indigo-text ml-2 mt-1"
                      icon="euro-sign"
                    />
                  </MDBRow>
                  <MDBRow className="my-4" center>
                    <MDBIcon
                      className="font-weight-bold indigo-text mr-2 mt-1"
                      icon="minus"
                    />
                    <MDBRangeInput
                      min={0}
                      max={100}
                      value={50}
                      formClassName="w-75"
                    />
                    <MDBIcon
                      className="font-weight-bold indigo-text ml-2 mt-1"
                      icon="plus"
                    />
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow style={{ flexDirection: "column" }} className="my-5">
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-25"
            />
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-50"
            />
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-75"
            />
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-100"
            />
          </MDBRow>

          <MDBRow center>
            <span className="font-weight-bold indigo-text mr-2">0</span>
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-25"
            />
            <span className="font-weight-bold indigo-text ml-2">100</span>
          </MDBRow>
          <MDBRow center>
            <span className="font-weight-bold blue-text mr-2">0</span>
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-50"
            />
            <span className="font-weight-bold blue-text ml-2">100</span>
          </MDBRow>
          <MDBRow center>
            <span className="font-weight-bold purple-text mr-2">0</span>
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-75"
            />
            <span className="font-weight-bold purple-text ml-2">100</span>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default SliderPage;
