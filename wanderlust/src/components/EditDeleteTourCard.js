import React, { Component } from "react";
import { deleteTour } from "../actions";
import "./componentStyles/showTour.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EditDeleteTourCard extends Component {
  constructor(props) {
    super();
    this.state = {
      randomCardValue: 0,
    };
  }

  componentDidMount() {
    this.setState({ randomCardValue: Math.random() * 100 });
  }

  deleteTour = (e) => {
    e.stopPropagation();
    this.props.deleteTour(this.props.offeredTours.tourid);
    this.props.history.push("/dashboard");
    window.location.reload();
  };

  displayTour = (e) => {
    this.props.history.push(`/tours/${this.props.offeredTours.id}`);
  };

  render() {
    return (
      <Link
        to={{
          pathname: "/update-tour",
          state: {
            ...this.props.offeredTours,
          },
        }}
      >
        <div
          className='card-background card-background-forrest'
          onClick={(e) => this.displayTour(e)}
        >
          <div>
            <div className='edit-icon' onClick={(e) => this.deleteTour(e)} />
            <h3
              className='font-poppins background'
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
            >
              {this.props.offeredTours.tourname}
            </h3>
            <span className='background'>
              ${this.props.offeredTours.price} per person
            </span>
          </div>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { deleteTour })(EditDeleteTourCard);
