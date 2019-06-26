import React from 'react';
import './componentStyles/showTour.css';

function ShowTourCard(props) {
  return (
    <div className='card-background'>
      <div className='heart-icon' />
      <h3
        className='font-poppins'
        style={{
          fontWeight: 'bold',
          fontSize: '1.3rem',
          marginLeft: '0.5rem',
        }}>
        {props.showTour.tourname}
      </h3>
      <span>${props.showTour.price} per person</span>
    </div>
  );
}

export default ShowTourCard;
