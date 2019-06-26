import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";
import DocsLink from "./../../components/docsLink";

const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

const data = [
  ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
  ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
  ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
  ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
];

const TableEditablePage = props => {
  return (
    <MDBContainer className="mt-3">
      <DocsLink
        title="Table Editable"
        href="https://mdbootstrap.com/docs/react/tables/editable/"
      />
      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardHeader
              tag="h3"
              className="text-center font-weight-bold text-uppercase py-4"
            >
              Table Editable
            </MDBCardHeader>
            <MDBCardBody>
              <MDBTableEditable data={data} columns={columns} striped bordered />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default TableEditablePage;
