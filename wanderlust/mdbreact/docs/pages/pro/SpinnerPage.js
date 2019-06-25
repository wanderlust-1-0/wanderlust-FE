import React from "react";
import { MDBSpinner, MDBContainer } from "mdbreact";
import DocsLink from "../../components/docsLink";

const SpinnerPage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title="Loader/Spinner"
        href="https://mdbootstrap.com/docs/react/components/spinners/"
      />

      <h2>Colorful</h2>
      <div className="my-5 d-flex justify-content-around">
        <MDBSpinner red />
        <MDBSpinner />
        <MDBSpinner yellow />
        <MDBSpinner green />
        <MDBSpinner multicolor />
      </div>

      <hr />

      <h2 className="mt-5">Sizes</h2>
      <div className="my-5 d-flex justify-content-around">
        <MDBSpinner small />
        <MDBSpinner />
        <MDBSpinner big />
      </div>

      <hr />

      <h2 className="mt-5">Crazy speed</h2>
      <div className="my-5 d-flex justify-content-around">
        <MDBSpinner crazy big />
      </div>
    </MDBContainer>
  );
};

export default SpinnerPage;
