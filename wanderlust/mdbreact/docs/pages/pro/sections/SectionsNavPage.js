import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "../../../components/menuLink";

const SectionsNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="th" className="grey-text" /> Sections
            </h1>
            <ul className="list-unstyled example-components-list">
              <h5 className="grey-text">Intros</h5>
              <MenuLink to="/sections/app" title="App intro" />
              <MenuLink to="/sections/contactform" title="Contact Form intro" />
              <MenuLink to="/sections/classicform" title="Classic Register Form intro" />
              <MenuLink to="/sections/videobackground" title="Video Background intro" />
              <MenuLink to="/sections/contact" title="Contact" />
              <MenuLink to="/sections/blog" title="Blog" />
              <MenuLink to="/sections/ecommerce" title="E-commerce" />
              <MenuLink to="/sections/features" title="Features" />
              <MenuLink to="/sections/magazine" title="Magazine" />
              <MenuLink to="/sections/projects" title="Projects" />
              <MenuLink to="/sections/social" title="Social" />
              <MenuLink to="/sections/team" title="Team" />
              <MenuLink to="/sections/testimonials" title="Testimonials" />
              <MenuLink to="/sections/testimonialsMulti" title="Testimonials Multi Item" />
              <MenuLink to="/sections/minimalistic-intro" title="Minimalistic Intro" />
              <MenuLink to="/sections/parallax-intro" title="Parallax Effect Intro" />
              <MenuLink to="/sections/call-to-action-intro" title="Call to Action Intro" />
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SectionsNavPage;
