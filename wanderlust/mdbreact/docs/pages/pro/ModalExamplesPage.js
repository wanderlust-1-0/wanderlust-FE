import React, { Component } from "react";
import {
  MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBIcon, MDBCol, MDBSelect, MDBSelectOption,  MDBSelectOptions, MDBSelectInput, MDBCollapseHeader, MDBCard, MDBCollapse, MDBCardBody, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBInput } from "mdbreact";
import "./../ModalExamplesPage.css";
import DocsLink from "./../../components/docsLink";

class ModalExamplesPage extends Component {

  state = {
    accordion: 1,
    modal8: false,
    modal9: false,
    modal13: false
  }

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      ...this.state,
      [modalNumber]: !this.state[modalNumber]
    });
  }

  onClick = number => () => {
    let state;
    if (this.state.accordion !== number) {
      state = number;
    } else {
      state = false;
    }

    this.setState({
      ...this.state,
      accordion: state
    });
  };

  render() {
    let { accordion } = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title="Modal Templates & Examples"
          href="https://mdbootstrap.com/docs/react/modals/basic/"
        />
        <h4 className="mt-4">Modal Poll</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(9)}>Launch Modal</MDBBtn>
          <MDBModal
            fullHeight
            position="right"
            backdrop={false}
            className="modal-notify modal-info text-white"
            isOpen={this.state.modal9}
            toggle={this.toggle(9)}
          >
            <MDBModalHeader tag="p" toggle={this.toggle(9)}>
              Feedback request
            </MDBModalHeader>
            <MDBModalBody className="text-center">
              <MDBIcon
                icon="file-text-o"
                size="4x"
                className="animated rotateIn mb-3"
              />
              <p className="font-weight-bold mb-3">Your opinion matters</p>
              <p>
                Have some ideas how to improve our product? Give us your
                feedback.
              </p>
              <hr />
              {/* Radio */}
              <p className="mb-3">Your rating</p>
              <div className="text-left">
                <MDBInput label="Very good" type="radio" id="radio1" />
                <MDBInput label="Good" type="radio" id="radio2" />
                <MDBInput label="Mediocre" type="radio" id="radio3" />
                <MDBInput label="Bad" type="radio" id="radio4" />
                <MDBInput label="Very bad" type="radio" id="radio5" />
              </div>
              {/* Textarea */}
              <p className="mb-3">What could we improve?</p>
              <MDBInput label="Your message" type="textarea" id="radio1" />
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
              <MDBBtn color="primary" onClick={this.toggle(9)}>
                Send
                <MDBIcon icon="paper-plane" className="ml-1" />
              </MDBBtn>
              <MDBBtn color="primary" outline onClick={this.toggle(9)}>
                Calcel
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>
        <h4 className="mt-4">Modal Product</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(13)}>Launch Modal</MDBBtn>
          <MDBModal
            size="lg"
            isOpen={this.state.modal13}
            toggle={this.toggle(13)}
          >
            <MDBModalBody className="d-flex">
              <MDBCol size="5" lg="5">
                {/* Carrousel */}
                <MDBCarousel
                  activeItem={1}
                  length={3}
                  showControls={true}
                  showIndicators={true}
                  thumbnails
                  className="z-depth-1"
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg"
                        alt="First slide"
                      />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg"
                        alt="Second slide"
                      />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg"
                        alt="Third slide"
                      />
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBCol>
              <MDBCol size="7" lg="7">
                <h2 className="h2-responsive product-name">
                  <strong>Product Name</strong>
                </h2>
                <h4 className="h4-responsive">
                  <span className="green-text">
                    <strong>$49</strong>
                  </span>
                  <span className="grey-text ml-1">
                    <small>
                      <s>$89</s>
                    </small>
                  </span>
                </h4>
                {/* Accordion wrapper */}
                <div className="my-4">
                  <MDBCard>
                    <MDBCollapseHeader onClick={this.onClick(1)}>
                      Description
                      <i
                        className={
                          "ml-1 " +
                          (accordion === 1
                            ? "fa fa-angle-down rotate-icon"
                            : "fa fa-angle-down")
                        }
                      />
                    </MDBCollapseHeader>
                    <MDBCollapse isOpen={accordion === 1}>
                      <MDBCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                  <MDBCard>
                    <MDBCollapseHeader onClick={this.onClick(2)}>
                      Details
                      <i
                        className={
                          "ml-1 " +
                          (accordion === 2
                            ? "fa fa-angle-down rotate-icon"
                            : "fa fa-angle-down")
                        }
                      />
                    </MDBCollapseHeader>
                    <MDBCollapse isOpen={accordion === 2}>
                      <MDBCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                  <MDBCard>
                    <MDBCollapseHeader onClick={this.onClick(3)}>
                      Shipping
                      <i
                        className={
                          "ml-1 " +
                          (accordion === 3
                            ? "fa fa-angle-down rotate-icon"
                            : "fa fa-angle-down")
                        }
                      />
                    </MDBCollapseHeader>
                    <MDBCollapse isOpen={accordion === 3}>
                      <MDBCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                </div>
                <MDBRow>
                  <MDBCol size="6">
                    <MDBSelect>
                      <MDBSelectInput />
                      <MDBSelectOptions>
                        <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                        <MDBSelectOption>White</MDBSelectOption>
                        <MDBSelectOption>Black</MDBSelectOption>
                        <MDBSelectOption>Pink</MDBSelectOption>
                      </MDBSelectOptions>
                    </MDBSelect>
                    <label>MDBSelect color</label>
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBSelect>
                      <MDBSelectInput />
                      <MDBSelectOptions>
                        <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                        <MDBSelectOption>White</MDBSelectOption>
                        <MDBSelectOption>Black</MDBSelectOption>
                        <MDBSelectOption>Pink</MDBSelectOption>
                      </MDBSelectOptions>
                    </MDBSelect>
                    <label>MDBSelect size</label>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center">
                  <MDBBtn
                    color="secondary"
                    className="ml-4"
                    onClick={this.toggle(13)}
                  >
                    Close
                  </MDBBtn>
                  <MDBBtn
                    color="primary"
                    className="ml-4"
                    onClick={this.toggle(13)}
                  >
                    Add to Cart
                    <MDBIcon icon="cart-plus" className="ml-2" />
                  </MDBBtn>
                </MDBRow>
              </MDBCol>
            </MDBModalBody>
          </MDBModal>
        </MDBRow>
        <h4 className="mt-4">Modal Social share</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(8)}>Launch Modal</MDBBtn>
          <MDBModal
            cascading
            isOpen={this.state.modal8}
            toggle={this.toggle(8)}
          >
            <MDBModalHeader
              className="text-center text-white light-blue darken-3"
              titleClass="w-100"
              tag="h5"
              toggle={this.toggle(8)}
            >
              <MDBIcon icon="users" className="text-white mr-2" />
              Spreed the word!
            </MDBModalHeader>
            <MDBModalBody className="text-center">
              <MDBBtn tag="a" floating social="fb">
                <MDBIcon fab icon="facebook" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="tw">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="gplus">
                <MDBIcon fab icon="google-plus" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="li">
                <MDBIcon fab icon="linkedin" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="ins">
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="pin">
                <MDBIcon fab icon="pinterest" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="yt">
                <MDBIcon fab icon="youtube" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="dribble">
                <MDBIcon fab icon="dribbble" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="vk">
                <MDBIcon fab icon="vk" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="so">
                <MDBIcon fab icon="stack-overflow" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="slack">
                <MDBIcon fab icon="slack" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="git">
                <MDBIcon fab icon="github" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="comm">
                <MDBIcon icon="comments" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="email">
                <MDBIcon icon="envelope" />
              </MDBBtn>
            </MDBModalBody>
          </MDBModal>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ModalExamplesPage;
