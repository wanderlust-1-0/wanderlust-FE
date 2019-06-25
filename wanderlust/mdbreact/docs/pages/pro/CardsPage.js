import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBAvatar, MDBRotatingCard, MDBIcon, MDBBtn } from "mdbreact";
import DocsLink from "../../components/docsLink";

class CardPage extends Component {

  state = {
    flipped: false
  }

  handleFlipping = () => {
    this.setState({ flipped: !this.state.flipped });
  }
  render() {
    const colStyle = { maxWidth: "22rem" };

    return (
      <MDBContainer>
        <DocsLink
          title="Cards"
          href="https://mdbootstrap.com/docs/react/components/cards/"
        />
        <MDBContainer>
          <h2>Stylish cards</h2>
          <MDBRow className="mt-2">
            <MDBCol style={colStyle}>
              <MDBCard>
                <MDBCardImage
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
                  overlay="white-slight"
                  hover
                  waves
                  alt="MDBCard image cap"
                />
                <MDBCardBody>
                  <a
                    href="#!"
                    className="activator waves-effect waves-light mr-4"
                  >
                    <MDBIcon icon="share-alt" />
                  </a>
                  <MDBCardTitle>MDBCard Title</MDBCardTitle>
                  <hr />
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </MDBCardText>
                  <a
                    href="#!"
                    className="black-text d-flex justify-content-end"
                  >
                    <h5>
                      Read more <MDBIcon icon="angle-double-right" />
                    </h5>
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol style={colStyle}>
              <MDBCard>
                <MDBCardImage
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
                  overlay="white-slight"
                  hover
                  waves
                  alt="MDBCard image cap"
                />
                <MDBCardBody className="elegant-color white-text rounded-bottom">
                  <a
                    href="#!"
                    className="activator waves-effect waves-light mr-4"
                  >
                    <MDBIcon icon="share-alt" />
                  </a>
                  <MDBCardTitle>MDBCard Title</MDBCardTitle>
                  <hr className="hr-light" />
                  <MDBCardText className="white-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </MDBCardText>
                  <a
                    href="#!"
                    className="black-text d-flex justify-content-end"
                  >
                    <h5 className="white-text">
                      Read more <MDBIcon icon="angle-double-right" />
                    </h5>
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

          <hr className="my-5" />
          <h2>Testimonial cards</h2>

          <MDBRow className="mt-2">
            <MDBCol style={colStyle}>
              <MDBCard testimonial>
                <MDBCardUp className="indigo lighten-1" />
                <MDBAvatar className="mx-auto white">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                    alt=""
                  />
                </MDBAvatar>
                <MDBCardBody>
                  <h4 className="card-title">Anna Doe</h4>
                  <hr />
                  <p>
                    <MDBIcon icon="quote-left" /> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Eos, adipisci
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol style={colStyle}>
              <MDBCard testimonial>
                <MDBCardUp gradient="aqua" />
                <MDBAvatar className="mx-auto white">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                    alt=""
                  />
                </MDBAvatar>
                <MDBCardBody>
                  <h4 className="card-title">Martha Smith</h4>
                  <hr />
                  <p>
                    <MDBIcon icon="quote-left" /> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Eos, adipisci
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

          <hr className="my-5" />
          <h2>Image Overlay</h2>

          <MDBRow>
            <MDBCol>
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage:
                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                  <div>
                    <h5 className="pink-text">
                      <MDBIcon icon="chart-pie" /> Marketing
                    </h5>
                    <MDBCardTitle tag="h3" className="pt-2">
                      <strong>This is card title</strong>
                    </MDBCardTitle>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat fugiat, laboriosam, voluptatem, optio vero odio
                      nam sit officia accusamus minus error nisi architecto
                      nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <MDBBtn color="pink">
                      <MDBIcon icon="clone left" /> View project
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage:
                    "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
                  <div>
                    <h5 className="orange-text">
                      <MDBIcon icon="desktop" /> Software
                    </h5>
                    <MDBCardTitle tag="h3" className="pt-2">
                      <strong>This is card title</strong>
                    </MDBCardTitle>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat fugiat, laboriosam, voluptatem, optio vero odio
                      nam sit officia accusamus minus error nisi architecto
                      nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <MDBBtn color="deep-orange">
                      <MDBIcon icon="clone left" /> View project
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>

          <hr className="my-5" />
          <h2>Flipping card</h2>

          <MDBRow>
            <MDBCol style={{ minHeight: '26rem' }}>
              <MDBRotatingCard
                flipped={this.state.flipped}
                className="text-center h-100 w-100"
                style={colStyle}
              >
                <MDBCard className="face front">
                  <MDBCardUp>
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg"
                      alt=""
                    />
                  </MDBCardUp>
                  <MDBAvatar className="mx-auto white" circle>
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      alt=""
                      className="rounded-circle"
                    />
                  </MDBAvatar>
                  <MDBCardBody>
                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                    <p className="font-weight-bold blue-text">Web developer</p>
                    <a
                      href="#!"
                      className="rotate-btn"
                      data-card="card-1"
                      onClick={this.handleFlipping}
                    >
                      <MDBIcon icon="redo" /> Click here to rotate
                    </a>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="face back">
                  <MDBCardBody>
                    <h4 className="font-weight-bold">About me</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                      dolores nihil quae in mollitia asperiores ut rerum
                      repellendus, voluptatum eum, officia laudantium quaerat?
                    </p>
                    <hr />
                    <ul className="list-inline py-2">
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg fb-ic">
                          <MDBIcon icon="facebook" brand />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg tw-ic">
                          <MDBIcon icon="twitter" brand />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg gplus-ic">
                          <MDBIcon icon="google-plus" brand />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg li-ic">
                          <MDBIcon icon="linkedin" brand />
                        </a>
                      </li>
                    </ul>
                    <a
                      href="#!"
                      className="rotate-btn"
                      data-card="card-1"
                      onClick={this.handleFlipping}
                    >
                      <MDBIcon icon="undo" /> Click here to rotate back
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBRotatingCard>
            </MDBCol>
          </MDBRow>

          <hr className="my-5" />
          <h2>Action button and footer</h2>

          <MDBRow>
            <MDBCol style={colStyle}>
              <MDBCard cascade>
                <MDBCardImage
                  cascade
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
                />
                <MDBBtn
                  floating
                  tag="a"
                  className="ml-auto mr-4 lighten-3 mdb-coalor"
                  action
                >
                  <MDBIcon icon="chevron-right" />
                </MDBBtn>
                <MDBCardBody cascade>
                  <MDBCardTitle>MDBCard title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
                <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
                  <ul className="list-unstyled list-inline font-small">
                    <li className="list-inline-item pr-2 white-text">
                      <MDBIcon icon="clock" /> 05/10/2015
                    </li>
                    <li className="list-inline-item pr-2">
                      <a href="#!" className="white-text">
                        <MDBIcon icon="comments" /> 12
                      </a>
                    </li>
                    <li className="list-inline-item pr-2">
                      <a href="#!" className="white-text">
                        <MDBIcon icon="facebook" brand /> 21
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!" className="white-text">
                        <MDBIcon icon="twitter" brand /> 5
                      </a>
                    </li>
                  </ul>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default CardPage;
