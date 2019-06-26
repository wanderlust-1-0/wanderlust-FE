import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBRow,
  MDBCol,
} from 'mdbreact';

const Guide = props => (
  <div className='guide-card'>
    <MDBRow>
      <MDBCol style={{ maxWidth: '22rem', backgroundColor: 'white' }}>
        <MDBCard wide>
          <MDBCardBody
            cascade
            style={{ height: '15rem', width: '15rem', margin: '1rem' }}>
            <MDBCardTitle style={{ textAlign: 'center' }}>
              ID: {props.guide.guideid}
              <br />
              {props.guide.email}
              <br />
              first: {props.guide.firstname}
              <br />
              last: {props.guide.lastname}
              <br />
              {props.guide.phonenumber}
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </div>
);

export default Guide;
