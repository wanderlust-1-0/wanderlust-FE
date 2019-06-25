import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import DocsLink from "../../../components/docsLink";

const BlogPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Blog Sections"
        href="https://mdbootstrap.com/docs/react/sections/blog/"
      />
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Recent posts
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <a href="#!" className="green-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="utensils" className="pr-2" />
                  Food
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus et aut
                officiis debitis.
              </p>
              <p>
                by <a href="#!">
                  <strong>Carine Fox</strong>
                </a>
                , 19/08/2018
              </p>
              <MDBBtn color="success" size="md" className="waves-light ">
                Read more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="7">
              <a href="#!" className="pink-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="image" className="pr-2" />
                  Lifestyle
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <p>
                by <a href="#!">
                  <strong>Carine Fox</strong>
                </a>
                , 14/08/2018
              </p>
              <MDBBtn
                color="pink"
                size="md"
                className="mb-lg-0 mb-4 waves-light"
              >
                Read more
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <a href="#!" className="indigo-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="suitcase" className="pr-2" />
                  Food
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                sit amet.
              </p>
              <p>
                by <a href="#!">
                  <strong>Carine Fox</strong>
                </a>
                , 11/08/2018
              </p>
              <MDBBtn color="indigo" size="md" className="waves-light ">
                Read more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Blog listing v.2 </strong>
      </h2>
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="text-center">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Recent posts
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
                  alt=""
                />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <a href="#!" className="pink-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="map" className="pr-2" />
                  Adventure
                </h6>
              </a>
              <h4 className="font-weight-bold mb-3">
                <strong>Title of the news</strong>
              </h4>
              <p>
                by <a href="#!" className="font-weight-bold">Billy Forester</a>,
                15/07/2018
              </p>
              <p className="dark-grey-text">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus
                voluptas.
              </p>
              <MDBBtn color="pink" rounded size="md">
                Read more
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  alt=""
                />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <a href="#!" className="deep-orange-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="graduation-cap" className="pr-2" />
                  Education
                </h6>
              </a>
              <h4 className="font-weight-bold mb-3">
                <strong>Title of the news</strong>
              </h4>
              <p>
                by <a href="#!" className="font-weight-bold">Billy Forester</a>,
                13/07/2018
              </p>
              <p className="dark-grey-text">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis voluptatum deleniti atque corrupti quos dolores.
              </p>
              <MDBBtn color="deep-orange" rounded size="md">
                Read more
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                  alt=""
                />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <a href="#!" className="blue-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="fire" className="pr-2" />
                  Culture
                </h6>
              </a>
              <h4 className="font-weight-bold mb-3">
                <strong>Title of the news</strong>
              </h4>
              <p>
                by <a href="#!" className="font-weight-bold">Billy Forester</a>,
                11/07/2018
              </p>
              <p className="dark-grey-text">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
              <MDBBtn color="info" rounded size="md">
                Read more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Blog listing v.3</strong>
      </h2>
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Recent posts
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <MDBRow>
            <MDBCol lg="5" xl="4">
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p className="dark-grey-text">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus et aut
                officiis debitis cum soluta nobis est eligendi placeat facere
                aut rerum.
              </p>
              <p>
                by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
              </p>
              <MDBBtn color="primary" size="md">
                Read More
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5" xl="4">
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p className="dark-grey-text">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident et accusamus iusto odio dignissimos et dolorum
                fuga.
              </p>
              <p>
                by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 16/04/2018
              </p>
              <MDBBtn color="primary" size="md">
                Read More
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5" xl="4">
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p className="dark-grey-text">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, psam voluptatem quia consectetur.
              </p>
              <p>
                by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 12/04/2018
              </p>
              <MDBBtn color="primary" size="md">
                Read More
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Blog listing v.4</strong>
      </h2>
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard reverse>
                <MDBView hover cascade waves>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <MDBMask overlay="white-slight" className="waves-light" />
                </MDBView>
                <MDBCardBody cascade className="text-center">
                  <h2 className="font-weight-bold">
                    <a href="#!">Title of the news</a>
                  </h2>
                  <p>
                    Written by
                    <a href="#!">
                      <strong>Abby Madison</strong>
                    </a>
                    , 26/08/2018
                  </p>
                  <MDBBtn className="btn-fb waves-light">
                    <MDBIcon fab icon="facebook" className="pr-2" />
                    Facebook
                  </MDBBtn>
                  <span className="counter">46</span>
                  <MDBBtn className="btn-tw waves-light">
                    <MDBIcon fab icon="twitter" className="pr-2" />
                    Twitter
                  </MDBBtn>
                  <span className="counter">22</span>
                  <MDBBtn className="btn-gplus waves-light">
                    <MDBIcon fab icon="google-plus" className="pr-2" />
                    Google
                  </MDBBtn>
                  <span className="counter">31</span>
                  <MDBBtn color="default" className="waves-light">
                    <MDBIcon fab icon="comments" className="pr-2" />
                    Comments
                  </MDBBtn>
                  <span className="counter">18</span>
                </MDBCardBody>
              </MDBCard>
              <MDBContainer className="mt-5">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecati cupiditate non
                  provident, similique sunt in culpa nemo enim ipsam voluptatem
                  quia voluptas sit qui officia deserunt mollitia animi, id est
                  laborum et dolorum fuga quidem rerum facilis est distinctio.
                </p>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur.
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae itaque earum rerum.
                </p>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
          <hr className="mb-5 mt-4" />
          <MDBRow>
            <MDBCol md="12">
              <MDBCard reverse>
                <MDBView hover cascade waves>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <MDBMask overlay="white-slight" className="waves-light" />
                </MDBView>
                <MDBCardBody cascade className="text-center">
                  <h2 className="font-weight-bold">
                    <a href="#!">Title of the news</a>
                  </h2>
                  <p>
                    Written by
                    <a href="#!">
                      <strong>Abby Madison</strong>
                    </a>
                    , 21/08/2018
                  </p>
                  <MDBBtn className="btn-fb waves-light">
                    <MDBIcon fab icon="facebook" className="pr-2" />
                    Facebook
                  </MDBBtn>
                  <span className="counter">87</span>
                  <MDBBtn className="btn-tw waves-light">
                    <MDBIcon fab icon="twitter" className="pr-2" />
                    Twitter
                  </MDBBtn>
                  <span className="counter">73</span>
                  <MDBBtn className="btn-gplus waves-light">
                    <MDBIcon fab icon="google-plus" className="pr-2" />
                    Google
                  </MDBBtn>
                  <span className="counter">91</span>
                  <MDBBtn color="default" className="waves-light">
                    <MDBIcon fab icon="comments" className="pr-2" />
                    Comments
                  </MDBBtn>
                  <span className="counter">67</span>
                </MDBCardBody>
              </MDBCard>
              <MDBContainer className="mt-5">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem.
                </p>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur.
                </p>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};
export default BlogPage;
