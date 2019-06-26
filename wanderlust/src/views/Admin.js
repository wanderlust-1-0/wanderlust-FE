import React from 'react';
import { connect } from 'react-redux';
import Guide from '../components/Guide';
import Tour from '../components/Tour';
import { getAllGuides, getAllTourists, getAllTours } from '../actions';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*  this.props.getAllTourists(); */
    this.props.getAllGuides();
    this.props.getAllTours();
  }

  render() {
    console.log('Rendering of Guides: ', this.props.guideProps);
    console.log('Rendering of Tours: ', this.props.tourProps);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <h2>List of all Users from DB</h2>
        <br />
        <h3>Tourists:</h3>
        <br />
        <h3>Guides:</h3>
        <div
          className='guide-list'
          style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.props.guideProps.map(guide => (
            <Guide guide={guide} key={guide.guideid} />
          ))}
        </div>
        <br />
        <h3>Tours:</h3>
        <div
          className='tours-list'
          style={{ display: 'flex', flexWrap: 'wrap', maxWidth: "60", justifyContent: "center" }}>
          {this.props.tourProps.map(tour => (
            <Tour tour={tour} key={tour.tourid} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ guideProps: state.userReducer.guides, touristProps: state.userReducer.tourists, tourProps: state.tourReducer.tours });

export default connect(
  mapStateToProps,
  { getAllGuides, getAllTourists, getAllTours },
)(Admin);
