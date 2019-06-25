import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";
import DocsLink from "./../../components/docsLink";

class SideNavPage extends Component {
  state = {
    sideNavLeft: false,
    sideNavRight: false
  }

  sidenavToggle = sidenavId => () => {
    const sidenavNr = `sideNav${sidenavId}`
    this.setState({
      [sidenavNr]: !this.state[sidenavNr]
    });
  };

  render() {
    return (
      <Router>
        <MDBContainer>
          <DocsLink
            title="Sidenav"
            href="https://mdbootstrap.com/docs/react/navigation/sidenav/"
          />

          <MDBBtn onClick={this.sidenavToggle("Left")}><MDBIcon size="lg" icon="bars" /></MDBBtn>
          <MDBBtn onClick={this.sidenavToggle("Right")}><MDBIcon size="lg" icon="bars" /></MDBBtn>

          {/* the left SideNav: */}
          <MDBSideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            hidden
            triggerOpening={this.state.sideNavLeft}
            breakWidth={1300}
            className="deep-purple darken-4"
          >
            <li>
              <ul className="social">
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="twitter" />
                  </a>
                </li>
              </ul>
            </li>
            <MDBSideNavNav>
              <MDBSideNavLink to="/other-page" topLevel><MDBIcon icon="pencil-alt" className="mr-2" />Submit listing</MDBSideNavLink>
              <MDBSideNavCat
                name="Submit blog"
                id="submit-blog"
                icon="chevron-right"
              >
                <MDBSideNavLink>Submit listing</MDBSideNavLink>
                <MDBSideNavLink>Registration form</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat
                name="Instruction"
                id="instruction"
                icon="hand-pointer"
                href="#"
              >
                <MDBSideNavLink>For bloggers</MDBSideNavLink>
                <MDBSideNavLink>For authors</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="About" id="about" icon="eye">
                <MDBSideNavLink>Instruction</MDBSideNavLink>
                <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">
                <MDBSideNavLink>FAQ</MDBSideNavLink>
                <MDBSideNavLink>Write a message</MDBSideNavLink>
              </MDBSideNavCat>
            </MDBSideNavNav>
          </MDBSideNav>

          {/* the right SideNav: */}
          <MDBSideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            hidden
            triggerOpening={this.state.sideNavRight}
            className="side-nav-light"
            right
            breakWidth={1300}
          >
            <li>
              <ul className="social">
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="twitter" />
                  </a>
                </li>
              </ul>
            </li>
            <MDBSideNavNav>
              <MDBSideNavCat
                name="Submit blog"
                id="submit-blog2"
                icon="chevron-right"
              >
                <MDBSideNavLink className="active">Submit listing</MDBSideNavLink>
                <MDBSideNavLink>Registration form</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat
                name="Instruction"
                id="instruction2"
                icon="hand-pointer"
              >
                <MDBSideNavLink>For bloggers</MDBSideNavLink>
                <MDBSideNavLink>For authors</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="About" id="about2" icon="eye">
                <MDBSideNavLink>Instruction</MDBSideNavLink>
                <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="Contact me" id="contact-me2" icon="envelope">
                <MDBSideNavLink>FAQ</MDBSideNavLink>
                <MDBSideNavLink>Write a message</MDBSideNavLink>
              </MDBSideNavCat>
            </MDBSideNavNav>
          </MDBSideNav>
        </MDBContainer>
      </Router>
    );
  }
}

export default SideNavPage;
