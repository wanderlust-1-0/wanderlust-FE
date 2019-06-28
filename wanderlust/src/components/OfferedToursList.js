import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTours } from '../actions';
import EditDeleteTourCard from './EditDeleteTourCard';
import { Route } from 'react-router-dom';

import './componentStyles/showTour.css';

class OfferedToursList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllTours();
  }


  // guidesOfferedTours = (id) => {
  //   const offeredTours = this.props.allTours.filter(tour => {
  //     if (tour.guide.guideid === 4) {
  //       return tour;
  //     }
  //   })
  //   return offeredTours;
  // }

  render() {
    // console.log('filtered tours', this.guidesOfferedTours
    // const singleGuideTours = this.guidesOfferedTours()
    return (
      <div className="showTourList">
        {this.props.alltours.map(tour => {
          return <Route path="/dashboard" render={(props) => <EditDeleteTourCard offeredTours={tour} {...props} />} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state in offered tours: ', state)
  return {
    alltours: state.tourReducer.tours
  }
}

export default connect(mapStateToProps, { getAllTours })(OfferedToursList);