import React from 'react';
import { connect } from 'react-redux';
import Guide from '../components/Guide';
import { getAllGuides, getAllTourists } from '../actions';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllTourists();
    this.props.getAllGuides();
  }

  render() {
    console.log('Rendering of Users: ', this.props.guideProps);
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
            <Guide guide={guide} key={guide.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ guideProps: state.userReducer.guides, touristProps: state.userReducer.tourists });

export default connect(
  mapStateToProps,
  { getAllGuides, getAllTourists },
)(Users);
