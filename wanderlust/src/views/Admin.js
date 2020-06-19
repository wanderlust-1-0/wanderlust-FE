import React from "react";
import { connect } from "react-redux";
import Guide from "../components/Guide";
import Tour from "../components/Tour";
import Tourist from "../components/Tourist";
import { getAllTours } from "../actions";
import { Redirect } from "react-router-dom";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      touristarray: [],
    };
  }

  componentDidMount() {
    this.props.getAllTourists();
    this.props.getAllGuides();
    this.props.getAllTours();
  }

  setTourists(tourists) {
    console.log("HERE: ", tourists);
    this.setState({
      touristarray: tourists,
    });
  }

  render() {
    if (
      localStorage.getItem("auth-token") === null ||
      !localStorage.getItem("admin")
    ) {
      return <Redirect to='/' />;
    }
    console.log("Rendering of Tourists: ", this.props.touristProps);
    console.log("Rendering of Guides: ", this.props.guideProps);
    console.log("Rendering of Tours: ", this.props.tourProps);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>List of all Users from DB</h2>
        <br />
        <button
          style={{ width: "2rem", height: "2rem" }}
          onClick={() => this.setTourists(this.props.touristProps)}
        ></button>
        <h3>Tourists:</h3>
        <br />

        <div
          className='tourist-list'
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {this.state.touristarray.map((tourist) => (
            <Tourist tourist={tourist} key={tourist.touristid} />
          ))}
        </div>
        <h3>Guides:</h3>
        <div
          className='guide-list'
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {this.props.guideProps.map((guide) => (
            <Guide guide={guide} key={guide.guideid} />
          ))}
        </div>
        <br />
        <h3>Tours:</h3>
        <div
          className='tours-list'
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "60",
            justifyContent: "center",
          }}
        >
          {this.props.tourProps.map((tour) => (
            <Tour tour={tour} key={tour.tourid} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  guideProps: state.userReducer.guides,
  touristProps: state.userReducer.tourist,
  tourProps: state.tourReducer.tours,
});

export default connect(mapStateToProps, {
  getAllTours,
})(Admin);
