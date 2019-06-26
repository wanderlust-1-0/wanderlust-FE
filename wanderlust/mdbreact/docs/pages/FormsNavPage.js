import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const FormsNavPage = () =>  {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="edit" className="grey-text mr-2" />
              Forms
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/forms/forms" title="Forms" />
              <MenuLink to="/forms/input" title="Input" />
              <MenuLink to="/forms/validation" title="Validation" />
              {/* PRO-START */}
              <h6 className="mt-3 grey-text">PRO </h6>
              <MenuLink to="/forms/pro/autocomplete" title="Autocomplete" />
              <MenuLink to="/forms/pro/datepicker" title="Date picker" />
              <MenuLink to="/forms/pro/forms" title="Forms" />
              <MenuLink to="/forms/pro/input" title="Input" />
              <MenuLink to="/forms/pro/select" title="Material Select" />
              <MenuLink to="/forms/pro/slider" title="Slider" />
              <MenuLink to="/forms/pro/timepicker" title="Time picker" />
              <MenuLink to="/forms/pro/validation" title="Validation" />
              {/* PRO-END */}
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FormsNavPage;
