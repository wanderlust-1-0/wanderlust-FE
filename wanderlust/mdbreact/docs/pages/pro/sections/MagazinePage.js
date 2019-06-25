import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBadge } from "mdbreact";
import DocsLink from "../../../components/docsLink";

const MagazinePage = () => {
  const newsStyle = {
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "1.5rem"
  };

  return (
    <MDBContainer style={{ maxWidth: "80%" }}>
      <DocsLink
        title="Magazine Sections"
        href="https://mdbootstrap.com/docs/react/sections/magazine/"
      />
      <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Section title
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p>
          <MDBRow>
            <MDBCol lg="6" md="12">
              <div style={newsStyle}>
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="light-blue-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="plane" className="pr-2" />
                      Travels
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon icon="clock" className="pr-2" />
                    20/08/2018
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">Title of the news</a>
                </h3>
                <p className="dark-grey-text">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus.
                </p>
              </div>

              <div style={newsStyle}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/photo8.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      19/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={newsStyle}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/54.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      18/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Soluta nobis est eligendi optio cumque nihil impedit
                          quo minus
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      17/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Voluptatem accusantium doloremque
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>

            <MDBCol lg="6" md="12">
              <div style={newsStyle}>
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="pink-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="home" className="pr-2" />
                      Lifestyle
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon icon="clock" className="pr-2" />
                    24/08/2018
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">Title of the news</a>
                </h3>
                <p className="dark-grey-text">
                  Sed ut perspiciatis unde voluptatem omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae.
                </p>
              </div>

              <div style={newsStyle}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      23/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Itaque earum rerum hic tenetur a sapiente delectus
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={newsStyle}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      22/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Soluta nobis est eligendi optio cumque nihil impedit
                          quo minus
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(56).jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      21/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Maiores alias consequatur aut perferendis
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

      <h2 className="title pt-4 mt-5">
        <strong>Magazine newsfeed v.2 </strong>
      </h2>

      <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Section title
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p>
          <MDBRow>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Slides/1.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="deep-orange-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="utensils" className="pr-2" />
                      Culinary
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon icon="clock" className="pr-2" />
                    27/02/2018
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">Title of the news</a>
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                  Sed ut perspiciatis unde voluptatem omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae explicabo. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                </p>
              </div>
            </MDBCol>

            <MDBCol md="12" lg="6">
              <div style={newsStyle}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      26/02/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={newsStyle}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      25/02/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Itaque earum rerum hic tenetur a sapiente delectus
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={newsStyle}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      24/03/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Soluta nobis est eligendi optio cumque nihil impedit
                          quo minus
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      23/02/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Duis aute irure dolor in reprehenderit in voluptate
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

      <h2 className="title pt-4 mt-5">
        <strong>Magazine newsfeed v.3 </strong>
      </h2>

      <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Section title
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p>
          <MDBRow>
            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3">
                <MDBCol size="12">
                  <a href="#!">
                    <MDBBadge color="pink">
                      <MDBIcon icon="camera" className="pr-2" aria-hidden="true" />
                      Adventure
                    </MDBBadge>
                  </a>
                </MDBCol>
              </MDBRow>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!" className="font-weight-bold">
                    This is title of the news
                  </a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">24 Food Swaps That Slash Calories.</a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">How to Make a Beet Cocktail?</a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">8 Sneaky Reasons You're Always Hungry.</a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">5 Pressure Cooker Recipes You Need to Try.</a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
            </MDBCol>

            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3">
                <MDBCol size="12">
                  <a href="#!">
                    <MDBBadge color="deep-orange">
                      <MDBIcon icon="plane" className="pr-2" aria-hidden="true" />
                      Travel
                    </MDBBadge>
                  </a>
                </MDBCol>
              </MDBRow>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!" className="font-weight-bold">
                    This is title of the news
                  </a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">Trends in the blogosphere for 2018.</a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">Where can you eat the best lunch in Warsaw?</a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">What camera is worth taking for holidays?</a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">Why should you visit Lisbon?</a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
            </MDBCol>

            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3">
                <MDBCol size="12">
                  <a href="#!">
                    <MDBBadge color="success">
                      <MDBIcon icon="leaf" className="pr-2" aria-hidden="true" />
                      Nature
                    </MDBBadge>
                  </a>
                </MDBCol>
              </MDBRow>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!" className="font-weight-bold">
                    This is title of the news
                  </a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">
                    How to recognize the footsteps of wild animals?
                  </a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">National Parks in Poland.</a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">Traveling without littering the planet.</a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!">How to protect rainforests?</a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default MagazinePage;
