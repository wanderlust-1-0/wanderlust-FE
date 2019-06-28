import React, { Component } from 'react';
import { deleteTour } from '../actions';
import './componentStyles/showTour.css';
import { connect } from 'react-redux';

class EditDeleteTourCard extends Component {
  constructor(props) {
    super();
  }

  deleteTour = (e) => {
    e.stopPropagation();
    // functioncall()
    this.props.deleteTour(this.props.offeredTours.tourid)
    this.props.history.push('/dashboard');
    window.location.reload()
  }

  displayTour = (e) => {
    e.stopPropagation();
    this.props.history.push(`/tours/${this.props.offeredTours.tourid}`)
  }

  render() {
    return (
      <div className='card-background' onClick={(e) => this.displayTour(e)}>
        <div>
          <div className='paperbin-icon' onClick={(e) => this.deleteTour(e)} />
          <h3
            className='font-poppins background'
            style={{
              fontWeight: 'bold',
              fontSize: '1.3rem',
            }}>
            {this.props.offeredTours.tourname}
          </h3>
          <span className="background">${this.props.offeredTours.price} per person</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, { deleteTour })(EditDeleteTourCard);