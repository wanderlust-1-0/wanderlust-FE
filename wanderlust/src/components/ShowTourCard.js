import React from 'react';
import './componentStyles/showTour.css';
import { Link } from 'react-router-dom';

function ShowTourCard(props) {
  return (
    <div className='card-background'>
      <Link to={"/tours/" + props.showTour.tourid} style={{ color: "white", textDecoration: "none" }}>
        <div className='heart-icon' />

        <h3
          className='font-poppins background'
          style={{
            fontWeight: 'bold',
            fontSize: '1.3rem',
          }}>
          {props.showTour.tourname}
        </h3>
        <span className="background">${props.showTour.price} per person</span>
      </Link>
    </div>
  );
}

export default ShowTourCard;
