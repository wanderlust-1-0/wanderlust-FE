import React from 'react';
import './componentStyles/showTour.css';

function ShowTourCard(props) {
  return (
    <div className="card-background">
      <div className="heart-icon"></div>
      <h3>{props.showTour.tourname}</h3>
      <span>${props.showTour.price} per person</span>
    </div>
  )
}

export default ShowTourCard;