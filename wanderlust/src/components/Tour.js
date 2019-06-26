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

const Tour = props => (
    <div className='tour-card'>
        <MDBRow>
            <MDBCol style={{ maxWidth: '60rem', backgroundColor: 'white' }}>
                <MDBCard wide>
                    <MDBCardBody
                        cascade
                        style={{ height: '100%', width: '60rem', margin: '1rem' }}>
                        <MDBCardTitle style={{ textAlign: 'center' }}>
                            <strong>ID:</strong>{props.tour.tourid}
                            <br />
                            <strong>Name:</strong>{props.tour.tourname}
                            <br />
                            <strong>Descr:</strong>{props.tour.tourdescription}
                            <br />
                            <strong>Phone:</strong>{props.tour.tourguidephonenumber}
                            <br />
                            <strong>Rec Age:</strong>{props.tour.recommendedage}
                            <br />
                            <strong>Area:</strong> {props.tour.area}
                            <br />
                            <strong>category:</strong> {props.tour.category}
                            <br />
                            <strong>duration:</strong> {props.tour.durationhrs}
                            <br />
                            <strong>meetingaddress:</strong> {props.tour.meetingaddress}
                            <br />
                            <strong>price:</strong> {props.tour.price}
                            <br />
                            <strong>whattobring:</strong> {props.tour.whattobring}
                            <br />
                            <strong>touristsCount:</strong> {props.tour.tourists.length}
                            <br />
                            <strong>touristsByEmail:</strong> {props.tour.tourists.map(tourist => (
                                <li>{tourist.email}</li>
                            ))}
                            <br />
                            <strong>guideemail:</strong> {props.tour.guide.email}
                            <br />
                            <strong>guideid:</strong> {props.tour.guide.guideid}
                        </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </div>
);

export default Tour;
