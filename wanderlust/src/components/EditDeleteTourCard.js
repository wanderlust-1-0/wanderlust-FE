import React from 'react';
import { deleteTour } from '../actions';
import './componentStyles/showTour.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function EditDeleteTourCard(props) {

  const deleteTour = (e) => {
    // e.stopPropagation();
    this.props.deleteTour(props.offeredTours.tourid);
  }

  return (
    <div className='card-background'>
      <Link to={"/tours/" + props.offeredTours.tourid} style={{ color: "white", textDecoration: "none" }}>
        <div className='heart-icon' onClick={deleteTour} />

        <h3
          className='font-poppins background'
          style={{
            fontWeight: 'bold',
            fontSize: '1.3rem',
          }}>
          {props.offeredTours.tourname}
        </h3>
        <span className="background">${props.offeredTours.price} per person</span>
      </Link>
    </div>
  );
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, { deleteTour })(EditDeleteTourCard);