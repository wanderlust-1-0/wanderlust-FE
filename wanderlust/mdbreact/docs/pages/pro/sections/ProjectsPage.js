import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBCardBody, MDBBtn, MDBIcon, MDBCard } from "mdbreact";
import DocsLink from "../../../components/docsLink";

const ProjectsPage = () =>  {
  return (
    <MDBContainer>
      <DocsLink
        title="Project Sections"
        href="https://mdbootstrap.com/docs/react/sections/projects/"
      />
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Our best projects
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          est laborum.
        </p>

        <MDBRow className="text-center">
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">Title of the news</h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <MDBBtn color="indigo" size="sm">
                <MDBIcon icon="clone" className="left" /> MDBView project
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">Title of the news</h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <MDBBtn color="indigo" size="sm">
                <MDBIcon icon="clone" className="left" /> MDBView project
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">Title of the news</h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <MDBBtn color="indigo" size="sm">
                <MDBIcon icon="clone" className="left" /> MDBView project
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Our best projects
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          est laborum.
        </p>

        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="green-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="chart-line" className="pr-2" />
                  Marketing
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Title of the news</h4>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit cupidatat proident
                voluptatem quia numquam.
              </p>
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="blue-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="eye" className="pr-2" />
                  Entertainment
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Title of the news</h4>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit cupidatat proident
                voluptatem quia numquam.
              </p>
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="brown-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="camera" className="pr-2" />
                  Travel
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Title of the news</h4>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit cupidatat proident
                voluptatem quia numquam.
              </p>
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="cyan-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="phone" className="pr-2" />
                  Technology
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Title of the news</h4>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit cupidatat proident
                voluptatem quia numquam.
              </p>
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our best projects
        </h2>
        <p className="grey-text w-responsive text-center mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          est laborum.
        </p>

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="chart-bar" size="2x" className="indigo-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Marketing</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="music" size="2x" className="pink-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Entertainment</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="smile" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Communication</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="book" size="2x" className="cyan-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Education</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="code" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Technology</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="money-bill-alt" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Finance</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg"
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Our best projects
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          est laborum.
        </p>

        <MDBRow>
          <MDBCol md="12" className="mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h6 className="purple-text">
                    <MDBIcon icon="plane" />
                    <strong> Travel</strong>
                  </h6>
                  <h3 className="py-3 font-weight-bold">
                    <strong>This is card title</strong>
                  </h3>
                  <p className="pb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio
                    nam sit officia accusamus minus error nisi architecto
                    nulla ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                  <MDBBtn color="secondary" rounded size="md">
                    <MDBIcon icon="clone" className="left" /> MDBView project
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h6 className="pink-text">
                    <MDBIcon icon="chart-pie" />
                    <strong> Marketing</strong>
                  </h6>
                  <h3 className="py-3 font-weight-bold">
                    <strong>This is card title</strong>
                  </h3>
                  <p className="pb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio
                    nam sit officia accusamus minus error nisi architecto
                    nulla ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                  <MDBBtn color="pink" rounded size="md">
                    <MDBIcon icon="clone" className="left" /> MDBView project
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h6 className="green-text">
                    <MDBIcon icon="eye" />
                    <strong> Entertainment</strong>
                  </h6>
                  <h3 className="py-3 font-weight-bold">
                    <strong>This is card title</strong>
                  </h3>
                  <p className="pb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio
                    nam sit officia accusamus minus error nisi architecto
                    nulla ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                  <MDBBtn color="success" rounded size="md">
                    <MDBIcon icon="clone" className="left" /> MDBView project
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default ProjectsPage;
