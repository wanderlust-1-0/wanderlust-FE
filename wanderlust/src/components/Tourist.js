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

const Tourist = props => (
    <div className='guide-card'>
        <MDBRow>
            <MDBCol style={{ maxWidth: '22rem', backgroundColor: 'white' }}>
                <MDBCard wide>
                    <MDBCardBody
                        cascade
                        style={{ height: '100%', width: '15rem', margin: '1rem' }}>
                        <MDBCardTitle style={{ textAlign: 'center' }}>
                            <strong>ID:</strong> {props.tourist.touristid}
                            <br />
                            <strong>Email:</strong> {props.tourist.email}
                            <br />
                            <strong>First:</strong> {props.tourist.firstname}
                            <br />
                            <strong>Last:</strong> {props.tourist.lastname}
                            <br />
                            <strong>Phone:</strong> {props.tourist.phonenumber}
                            <br />
                            <strong>isTourGuide:</strong> {props.tourist.istourguide ? "true" : "false"}
                            <br />
                            <strong>FavoritedTours:</strong>
                            {JSON.stringify(props.tourist.favoritedtours, null, 4)}
                            <br />
                            <strong>BookedTours:</strong>
                            {JSON.stringify(props.tourist.bookedtours, null, 4)}
                        </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </div>
);

export default Tourist;
