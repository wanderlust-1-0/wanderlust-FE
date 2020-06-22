import React, { Component } from "react";
import ShowTourCard from "./ShowTourCard";

import "./componentStyles/showTour.css";

class ShowTourList extends Component {
  componentWillMount() {
    console.log("show all tours list", this.props.allTours);
  }

  render() {
    return (
      <div className='showTourList'>
        {this.props.allTours.map((tour) => {
          return <ShowTourCard showTour={tour} />;
        })}
      </div>
    );
  }
}

export default ShowTourList;
