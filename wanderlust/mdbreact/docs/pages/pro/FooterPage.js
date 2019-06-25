import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import DocsLink from "./../../components/docsLink";

const FooterPagePro = () => {
  return (
    <MDBContainer className="mt-5">
      <DocsLink
        title="Footer"
        href="https://mdbootstrap.com/docs/react/navigation/footer/"
      />
      <MDBFooter
        color="stylish-color-dark"
        className="page-footer font-small pt-4 mt-4"
      >
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Footer Content
              </h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr />
        <div className="text-center py-3">
          <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item">
              <h5 className="mb-1">Register for free</h5>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn btn-danger btn-rounded">
                Sign up!
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="text-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="#!" className="btn-floating btn-sm btn-fb mx-1">
                <MDBIcon brand icon="facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn-floating btn-sm btn-tw mx-1">
                <MDBIcon brand icon="twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn-floating btn-sm btn-gplus mx-1">
                <MDBIcon brand icon="google-plus" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn-floating btn-sm btn-li mx-1">
                <MDBIcon brand icon="linkedin" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn-floating btn-sm btn-dribbble mx-1">
                <MDBIcon brand icon="dribbble" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
      <MDBFooter
        color="unique-color-dark"
        className="page-footer font-small mt-4 pt-0"
      >
        <div style={{ backgroundColor: "#6351ce" }}>
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow className="py-4 d-flex align-items-center">
              <MDBCol
                md="6"
                lg="5"
                className="text-center text-md-left mb-4 mb-md-0"
              >
                <h6 className="mb-0 white-text">
                  Get connected with us on social networks!
                </h6>
              </MDBCol>
              <MDBCol md="6" lg="7" className="text-center text-md-right">
                <a href="#!" className="fb-ic ml-0">
                  <MDBIcon brand icon="facebook" className="white-text mr-lg-4" />
                </a>
                <a href="#!" className="tw-ic">
                  <MDBIcon brand icon="twitter" className="white-text mr-lg-4" />
                </a>
                <a href="#!" className="gplus-ic">
                  <MDBIcon brand icon="google-plus" className="white-text mr-lg-4" />
                </a>
                <a href="#!" className="li-ic">
                  <MDBIcon brand icon="linkedin" className="white-text mr-lg-4" />
                </a>
                <a href="#!" className="ins-ic">
                  <MDBIcon brand icon="instagram" className="white-text mr-lg-4" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Company name</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                Here you can use rows and columns here to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Products</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">MDBootstrap</a>
              </p>
              <p>
                <a href="#!">MDWordPress</a>
              </p>
              <p>
                <a href="#!">BrandFlow</a>
              </p>
              <p>
                <a href="#!">Bootstrap Angular</a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Shipping Rates</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <MDBIcon icon="home" className="mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="mr-3" /> info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="mr-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="mr-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
      <MDBFooter
        color="blue-grey"
        className="page-footer font-small lighten-5 mt-4 pt-0"
      >
        <div style={{ backgroundColor: "#21d192" }}>
          <MDBContainer>
            <MDBRow className="py-4 d-flex align-items-center">
              <MDBCol
                md="6"
                lg="5"
                className="text-center text-md-left mb-4 mb-md-0"
              >
                <h6 className="mb-0 white-text">
                  Get connected with us on social networks!
                </h6>
              </MDBCol>
              <MDBCol md="6" lg="7" className="text-center text-md-right">
                <a href="#!" className="fb-ic ml-0">
                  <MDBIcon brand icon="facebook" className="white-text mr-lg-4" />
                </a>
                <a href="#!" className="tw-ic">
                  <MDBIcon brand icon="twitter" className="white-text mr-lg-4" />
                </a>
                <a href="#!" className="gplus-ic">
                  <MDBIcon brand icon="google-plus" className="white-text mr-lg-4" />
                </a>
                <a href="#!" className="li-ic">
                  <MDBIcon brand icon="linkedin" className="white-text mr-lg-4" />
                </a>
                <a href="#!" className="ins-ic">
                  <MDBIcon brand icon="instagram" className="white-text mr-lg-4" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Company name</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                Here you can use rows and columns here to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Products</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!" className="dark-grey-text">
                  MDBootstrap
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  MDWordPress
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  BrandFlow
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  Bootstrap Angular
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!" className="dark-grey-text">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  Help
                </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <MDBIcon icon="home" className="mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="mr-3" /> info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="mr-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="mr-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
      <MDBFooter color="cyan" className="font-small darken-3 mt-4 pt-0">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="py-5">
              <div className="mb-5 flex-center">
                <a href="#!" className="fb-ic ml-0">
                  <MDBIcon brand icon="facebook" size="2x" className="white-text mr-md-5 mr-3" />
                </a>
                <a href="#!" className="tw-ic">
                  <MDBIcon brand icon="twitter" size="2x" className="white-text mr-md-5 mr-3" />
                </a>
                <a href="#!" className="gplus-ic">
                  <MDBIcon brand icon="google-plus" size="2x" className="white-text mr-md-5 mr-3" />
                </a>
                <a href="#!" className="li-ic">
                  <MDBIcon brand icon="linkedin" size="2x" className="white-text mr-md-5 mr-3" />
                </a>
                <a href="#!" className="ins-ic">
                  <MDBIcon brand icon="instagram" size="2x" className="white-text mr-md-5 mr-3" />
                </a>
                <a href="#!" className="pin-ic">
                  <MDBIcon brand icon="pinterest" size="2x" className="white-text" />
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
      <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left mt-3 pb-3">
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Company name
              </h6>
              <p>
                Here you can use rows and columns here to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Products
              </h6>
              <p>
                <a href="#!">MDBootstrap</a>
              </p>
              <p>
                <a href="#!">MDWordPress</a>
              </p>
              <p>
                <a href="#!">BrandFlow</a>
              </p>
              <p>
                <a href="#!">Bootstrap Angular</a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Shipping Rates</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Contact
              </h6>
              <p>
                <MDBIcon icon="home" className="mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="mr-3" /> info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="mr-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="mr-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="8" lg="8">
              <p className="text-center text-md-left grey-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-sm rgba-white-slight mx-1">
                      <MDBIcon brand icon="facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-sm rgba-white-slight mx-1">
                      <MDBIcon brand icon="twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-sm rgba-white-slight mx-1">
                      <MDBIcon brand icon="google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-sm rgba-white-slight mx-1">
                      <MDBIcon brand icon="linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
      <MDBFooter color="indigo" className="font-small mt-4 pt-0">
        <MDBContainer>
          <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="#!">About us</a>
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="#!">Products</a>
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="#!">Awards</a>
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="#!">Help</a>
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="#!">Contact</a>
              </h6>
            </MDBCol>
          </MDBRow>
          <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
          <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
            <MDBCol md="8" sm="12" className="mt-5">
              <p style={{ lineHeight: "1.7rem" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur.
              </p>
            </MDBCol>
          </MDBRow>
          <hr
            className="clearfix d-md-none rgba-white-light"
            style={{ margin: "10% 15% 5%" }}
          />
          <MDBRow className="pb-3">
            <MDBCol md="12">
              <div className="mb-5 flex-center">
                <a href="#!" className="fb-ic">
                  <MDBIcon brand icon="facebook" size="lg" className="white-text mr-md-4" />
                </a>
                <a href="#!" className="tw-ic">
                  <MDBIcon brand icon="twitter" size="lg" className="white-text mr-md-4" />
                </a>
                <a href="#!" className="gplus-ic">
                  <MDBIcon brand icon="google-plus" size="lg" className="white-text mr-md-4" />
                </a>
                <a href="#!" className="li-ic">
                  <MDBIcon brand icon="linkedin" size="lg" className="white-text mr-md-4" />
                </a>
                <a href="#!" className="ins-ic">
                  <MDBIcon brand icon="instagram" size="lg" className="white-text mr-md-4" />
                </a>
                <a href="#!" className="pin-ic">
                  <MDBIcon brand icon="pinterest" size="lg" className="white-text" />
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
      <MDBFooter color="mdb-color" className="font-small lighten-3 pt-4 my-4">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="my-4">
            <MDBCol md="4" lg="4">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Footer Content
              </h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fugit, error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum.{" "}
              </p>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2" lg="2" className="ml-auto">
              <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
              <ul className="list-unstyled">
                <p>
                  <a href="#!">PROJECTS</a>
                </p>
                <p>
                  <a href="#!">ABOUT US</a>
                </p>
                <p>
                  <a href="#!">BLOG</a>
                </p>
                <p>
                  <a href="#!">AWARDS</a>
                </p>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="5" lg="3">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Address
              </h5>
              <p>
                <MDBIcon icon="home" className="mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="mr-3" /> info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="mr-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="mr-3" /> + 01 234 567 89
              </p>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2" lg="2" className="text-center">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Follow us
              </h5>
              <div className="mt-2 ">
                <a href="#!" type="button" className="btn-floating btn-small btn-fb">
                  <MDBIcon brand icon="facebook" />
                </a>
                <a href="#!" type="button" className="btn-floating btn-small btn-tw">
                  <MDBIcon brand icon="twitter" />
                </a>
                <a href="#!" type="button" className="btn-floating btn-small btn-gplus">
                  <MDBIcon brand icon="google-plus" />
                </a>
                <a href="#!"
                  type="button"
                  className="btn-floating btn-small btn-dribbble"
                >
                  <MDBIcon brand icon="dribbble" />
                </a>
              </div>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </MDBContainer>
  );
}

export default FooterPagePro;
