import React, { Component } from "react";
import { connect } from "react-redux";
// import {  } from "../actions";
import EditDeleteTourCard from "./EditDeleteTourCard";
import { Route } from "react-router-dom";

import "./componentStyles/showTour.css";

class OfferedToursList extends Component {
  // componentDidMount() {
  //   this.props.getSingleGuidesTours();
  // }

  // guidesOfferedTours = (id) => {
  //   const offeredTours = this.props.allTours.filter(tour => {
  //     if (tour.guide.guideid === ) {
  //       return tour;
  //     }
  //   })
  //   return offeredTours;
  // }

  render() {
    return (
      <div className='showTourList'>
        {this.props.offeredTours.map((tour) => {
          return (
            <Route
              path='/dashboard'
              render={(props) => (
                <EditDeleteTourCard offeredTours={tour} {...props} />
              )}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state in offered tours: ", state);
  return {
    allTours: state.tourReducer.tours,
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps, {})(OfferedToursList);
