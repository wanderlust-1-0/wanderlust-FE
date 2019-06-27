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
            style={{ height: '100%', width: '15rem', margin: '1rem' }}>
            <MDBCardTitle style={{ textAlign: 'center' }}>
              <strong>ID:</strong> {props.guide.guideid}
              <br />
              <strong>Email:</strong> {props.guide.email}
              <br />
              <strong>First:</strong> {props.guide.firstname}
              <br />
              <strong>Last:</strong> {props.guide.lastname}
              <br />
              <strong>Phone:</strong> {props.guide.phonenumber}
              <br />
              <strong>OfferedTours:</strong>
              {JSON.stringify(props.guide.tours, null, 4)}
              <br />
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </div>
);

export default Guide;
