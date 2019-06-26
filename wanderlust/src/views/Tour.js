import React from 'react';
import './Tour.css';
import { connect } from 'react-redux';
import { getTourById } from '../actions';

class Tour extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      test: ""
    }
  }

  componentDidMount(){
     this.props.getTourById(this.props.location.pathname.split("/")[2])
  }

  render() {
    console.log("PATH: ", this.props.location.pathname.split("/")[2])
    return(

  <div className='tour-wrapper'>
    <header>
      <div className='header-wrapper'>
        <div className='bg-image'>
          <div>
            <div>
              <div className='nav'>
                <h1 className='tour-header poppins-font'>Wanderlust</h1>


                <div className='nav-right'>
                  <a href='#' className="poppins-font" style={{marginLeft: "30rem"}}>Username </a>
                  <div className='chevron-down' />
                  {/* <a href='#'>{props.user.firstname}</a> */}
                </div>
              </div>
            </div>
            <div className='header-text-wrapper'>
              {/* <h1>{props.tour.title}</h1> */}
              <h1 className='header poppins-font' style={{ fontSize: '5.5rem', fontWeight: 'bold' }}>{this.props.tourProps.tour.tourname}</h1>
            </div>
            <h2 className='sub-header poppins-font' style={{ fontSize: '2rem', fontWeight: 'bold' }}>{this.props.tourProps.tour.category}</h2>
          </div>
        </div>
      </div>
    </header>
    <div className='tour-information-wrapper'>
      <div className='tour-information-left'>
        <div className='info-wrapper'>
          <div className='info-symbol' />
          <div className='description-wrapper'>
            About this tour
            <br />
            <span className='decent-text' style={{textAlign: "left", marginLeft: "4.3rem"}}>
              {this.props.tourProps.tour.tourdescription}
            </span>
            {/*  <span className='decent-text'>{props.tour.description} </span>*/}
          </div>
        </div>
        <div className='clock-wrapper'>
          <div className='clock-symbol' />
          <div className='description-wrapper'>
            {/* <span className='decent-text'>{props.tour.duration}</span> */}
            <span className='clock-text'>Duration {this.props.tourProps.tour.durationhrs} hours</span>
          </div>
        </div>
        <div className='people-wrapper'>
          <div className='people-symbol' />
          <div className='description-wrapper'>
            {/* <span className='clock-text'>Redommended Age ({props.tour.recommendedAge})</span> */}
            <span className='people-text'>Recommended Age ({this.props.tourProps.tour.recommendedage}+)</span>
          </div>
        </div>
        <div className='note-wrapper'>
          <div className='note-symbol' />
          <div>
            <span className='decent-text'>What to bring:</span>
            <ul className='decent-text'>
              {/* { props.tour.whattobring } */}
              <li>{this.props.tourProps.tour.whattobring}</li>
              <li>Bottles Water</li>
              <li>Sunscreen</li>
            </ul>
          </div>
        </div>
        <div className='target-wrapper'>
          <div className='target-symbol' />
          <div>
            <div className='decent-text'>
              {/*   { props.tour.meetingaddress}*/}
              Address
              <br />
              {this.props.tourProps.tour.meetingaddress}
            </div>
          </div>
        </div>
      </div>
      <div className='tour-information-right'>
        <div className='call-to-action'>
          <div className='price'>
            {/* US$ {props.tour.price} */}
            US$ {this.props.tourProps.tour.price} <br />
            <span className='tiny'>per person</span>
          </div>
          <div className='booking'>
            <button className='bookingButton'> Book Now</button>
          </div>
        </div>
        <div className='social-media-wrapper'>
          <div className='heart-symbol' />
          <div className='favorites'>Add to favorites</div>
        </div>
        <div className='avatar' />
        <span className='avatar-text'>Your Tour Guide</span>
        {/* <span className='avatar-text'>{this.props.tourProps.tour.guide[email]}</span>  */}
         {/* <span className='avatar-text'>{this.props.tourProps.tour.guide.phonenumber}</span> */}
      </div>
    </div>
  </div>
  )
  }
};


const mapStateToProps = state => ({ tourProps: state.tourReducer });

export default connect(
  mapStateToProps,
  { getTourById },
)(Tour);

