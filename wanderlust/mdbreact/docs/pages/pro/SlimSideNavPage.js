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
            title="Slim Sidenav"
            href="https://mdbootstrap.com/docs/react/navigation/sidenav/"
          />

          <MDBBtn onClick={this.sidenavToggle("Left")}><MDBIcon size="lg" icon="bars" /></MDBBtn>
          <MDBBtn onClick={this.sidenavToggle("Right")}><MDBIcon size="lg" icon="bars" /></MDBBtn>

          {/* the left SideNav: */}
          <MDBSideNav
            slim
            mask="rgba-blue-strong"
            triggerOpening={this.state.sideNavLeft}
            breakWidth={1300}
            className="sn-bg-1"
          >
            <li>
              <div className="logo-wrapper sn-ad-avatar-wrapper">
                <a href="#!">
                  <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" />
                  <span>Anna Deynah</span>
                </a>
              </div>
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
            slim
            triggerOpening={this.state.sideNavRight}
            className="side-nav-light"
            right
            breakWidth={1300}
          >
            <li>
              <div className="logo-wrapper sn-ad-avatar-wrapper">
                <a href="#!">
                  <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" className="rounded-circle" />
                  <span className="text-black-50">John Smith</span>
                </a>
              </div>
            </li>
            <li>
              <ul className="social">
                <li>
                  <MDBIcon brand icon="facebook" />
                </li>
                <li>
                  <MDBIcon brand icon="pinterest" />
                </li>
                <li>
                  <MDBIcon brand icon="google-plus" />
                </li>
                <li>
                  <MDBIcon brand icon="twitter" />
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
