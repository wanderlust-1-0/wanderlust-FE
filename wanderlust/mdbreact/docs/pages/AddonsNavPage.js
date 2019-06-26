import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const AddonsNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="window-restore" className="grey-text mr-2" />
              Addons
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/addons/edge-header" title="Edge Header" />
              <MenuLink to="/addons/iframe" title="Iframe" />
              <MenuLink to="/addons/notifications" title="Notifications" />
              {/* PRO-START */}
              <h6 className="mt-3 grey-text">PRO </h6>
              <MenuLink to="/addons/pro/blog-components" title="Blog components" />
              <MenuLink to="/addons/pro/chat" title="Chat" />
              <MenuLink to="/addons/pro/e-commerce-components" title="E-commerce components" />
              <MenuLink to="/addons/pro/flipping-cards" title="Flipping Cards" />
              <MenuLink to="/addons/pro/notifications" title="Notifications" />
              <MenuLink to="/addons/pro/streak" title="Streak" />
              <MenuLink to="/addons/pro/timeline" title="Timeline" />
              {/* PRO-END */}
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AddonsNavPage;
