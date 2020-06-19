import React from "react";
import "./componentStyles/showTour.css";
import { Link } from "react-router-dom";

class ShowTourCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomCardValue: 0,
    };
  }

  componentDidMount() {
    this.setState({ randomCardValue: Math.random() * 100 });
  }

  render() {
    return (
      <div className='card-background-forrest'>
        <Link
          to={"/tours/" + this.props.showTour.id}
          style={{ color: "white", textDecoration: "none" }}
        >
          <div className='heart-icon' />

          <h3
            className='font-poppins background'
            style={{
              fontWeight: "bold",
              fontSize: "1.3rem",
            }}
          >
            {this.props.showTour.tourname}
          </h3>
          <span className='background'>
            ${this.props.showTour.price} per person
          </span>
        </Link>
      </div>
    );
  }
}

export default ShowTourCard;
