import React from 'react';
import './AddTour.css';

const Tour = props => (
  <div className='tour-wrapper'>
    <header>
      <div className='header-wrapper'>
        <div className='bg-image'>
          <div>
            <div>
              <div className='nav'>
                <h1 className='tour-header'>Wanderlust</h1>

                <div className='nav-middle'>
                  <a href='#'>Popular</a>
                  <a href='#'>Deals</a>
                  <a href='#'>Catagories</a>
                </div>

                <div className='nav-right'>
                  <a href='#'>Username </a>
                  <div className='chevron-down' />
                  {/* <a href='#'>{props.user.firstname}</a> */}
                </div>
              </div>
            </div>
            <div className='header-text-wrapper'>
              {/* <h1>{props.tour.title}</h1> */}
              <h1 className='header'>An Awesome Tour!</h1>
            </div>
            <h2 className='sub-header'>Hiking</h2>
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
            <span className='decent-text'>
              This three hour excursion the mountain tops is perfect for
              families. This tip covers 6 miles with fantastic scenery, and lots
              of fresh air.
            </span>
            {/*  <span className='decent-text'>{props.tour.description} </span>*/}
          </div>
        </div>
        <div className='clock-wrapper'>
          <div className='clock-symbol' />
          <div className='description-wrapper'>
            {/* <span className='decent-text'>{props.tour.duration}</span> */}
            <span className='clock-text'>Duration 3 hours</span>
          </div>
        </div>
        <div className='people-wrapper'>
          <div className='people-symbol' />
          <div className='description-wrapper'>
            {/* <span className='clock-text'>Redommended Age ({props.tour.recommendedAge})</span> */}
            <span className='people-text'>Recommended Age (11+)</span>
          </div>
        </div>
        <div className='note-wrapper'>
          <div className='note-symbol' />
          <div>
            <span className='decent-text'>What to bring:</span>
            <ul className='decent-text'>
              {/* { props.tour.whattobring } */}
              <li>Hiking Boots</li>
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
              4300 Pine Highway,
              <br />
              Yosemite National Park, CA 95389
            </div>
          </div>
        </div>
      </div>
      <div className='tour-information-right'>
        <div className='call-to-action'>
          <div className='price'>
            {/* US$ {props.tour.price} */}
            US$ 50 <br />
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
      </div>
    </div>
  </div>
);

export default Tour;