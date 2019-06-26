import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTour } from '../actions';
import './AddTour.css';

class AddTour extends Component {
  state = {
    tourTitle: '',
    tourCategory: '',
    tourDescription: '',
    tourLength: null,
    recommendedAge: '',
    whatTheyShouldBring: '',
    tourAddress: '',
    tourPrice: null
  }

  handleInputChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTour = (e) => {
    e.preventDefault();
    this.props.addTour(this.state);
  }

  render() {
    return (
      <form onSubmit={this.addTour}>
        <div>
          <header className='addTourHeader'>
            <nav className="addTourNav">
              <h1 className="addTourBrand">Wanderlust</h1>
              <div className="addTourDropdown">
                <div>
                  name
                </div>
                <div>
                  chevron
                </div>
              </div>
            </nav>

            <div className="addTourWrapper">
              <div className="tourTitleWrapper">
                <div className="tourTitle">
                  <input className='title' type="text" placeholder="Title Your Tour" name="tourTitle" value={this.state.tourTitle} onChange={this.handleInputChanges} />
                  <input className="category" type="text" placeholder="Category" name="tourCategory" value={this.state.tourCategory} onChange={this.handleInputChanges} />
                </div>
              </div>
              <div>
                <div className="addThumbnail"></div>
              </div>
            </div>
          </header>

          <div className="addTourAboutWrapper">
            <div className='addTourAbout'>
              <h2>About This Tour</h2>
              <div className="info">
                <i className='infoSymbol'></i>
                <textarea className="tourDescription" name="tourDescription" value={this.state.tourDescription} onChange={this.handleInputChanges} cols="40" rows="5">Description</textarea>
              </div>
              <div className='clock'>
                <i className="clockSymbol"></i>
                <input className="tourLength" type="number" placeholder='How long is it' name="tourLength" value={this.state.tourLength} onChange={this.handleInputChanges} />
              </div>
              <div className='people'>
                <i className='peopleSymbol'></i>
                <input className="recommendedAge" type="number" placeholder='Recommended age' name="recommendedAge" value={this.state.recommendedAge} onChange={this.handleInputChanges} />
              </div>
              <div className='note'>
                <i className='noteSymbol'></i>
                <textarea className="itemsToBring" name="itemsToBring" name='whatTheyShouldBring' value={this.state.whatTheyShouldBring} onChange={this.handleInputChanges} cols="40" rows="5">What should they bring</textarea>
              </div>
              <div className="target">
                <i className="targetSymbol"></i>
                <input className="tourAddress" type="text" placeholder="What is the address" name="tourAddress" value={this.state.tourAddress} onChange={this.handleInputChanges} />
              </div>
              <div>
                <button className="btnAddTour" type='submit'>Add Tour</button>
                <button className="btnCancel">Cancel</button>
              </div>
            </div>

            <div className="addTourInfo">
              <div>
                <div className="tourPriceWrapper">
                  <div className="tourPrice">
                    <div>US$</div>
                    <input className="tourPriceInput" type="number" name='tourPrice' value={this.state.tourPrice} onChange={this.handleInputChanges} />
                  </div>
                  <div>
                    per person
                  </div>
                </div>
              </div>
              <div className="aboutGuide">
                <div className="favoritesCount">Number of Favorites</div>
                <div className="guideImage" ></div>
                <div className="messages">Messages</div>
              </div>
            </div>
          </div>

        </div>
      </form>
    )
  }
}
// <div className='tour-wrapper'>
//   <header>
//     <div className='header-wrapper'>
//       <div className='background'>
//         <div>
//           <nav className='nav'>
//             <h1 className='tour-header'>Wanderlust</h1>

//             <div className='nav-right'>
//               <a href='#'>Username </a>
//               <div className='chevron-down' />
//               {/* <a href='#'>{props.user.firstname}</a> */}
//             </div>
//           </nav>
//         </div>
//         <div className="addTourWrapper">
//           <div>
//             <div className='titleTourWrapper'>
//               <input className="titleTour" type="text" placeholder="Title Your Tour" />
//             </div>
//             <input className='tourCategory' placeholder="Category" />
//           </div>
//           <div>
//             <div className="addThumbnail"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </header>

//   <div className='tour-information-wrapper'>
//     <div className='tour-information-left'>
//       <div className='info-wrapper'>
//         <div className='info-symbol' />
//         <div className='description-wrapper'>
//           About this tour
//           <br />
//           <span className='decent-text'>
//             This three hour excursion the mountain tops is perfect for
//             families. This tip covers 6 miles with fantastic scenery, and lots
//             of fresh air.
//           </span>
//           {/*  <span className='decent-text'>{props.tour.description} </span>*/}
//         </div>
//       </div>
//       <div className='clock-wrapper'>
//         <div className='clock-symbol' />
//         <div className='description-wrapper'>
//           {/* <span className='decent-text'>{props.tour.duration}</span> */}
//           <span className='clock-text'>Duration 3 hours</span>
//         </div>
//       </div>
//       <div className='people-wrapper'>
//         <div className='people-symbol' />
//         <div className='description-wrapper'>
//           {/* <span className='clock-text'>Redommended Age ({props.tour.recommendedAge})</span> */}
//           <span className='people-text'>Recommended Age (11+)</span>
//         </div>
//       </div>
//       <div className='note-wrapper'>
//         <div className='note-symbol' />
//         <div>
//           <span className='decent-text'>What to bring:</span>
//           <ul className='decent-text'>
//             {/* { props.tour.whattobring } */}
//             <li>Hiking Boots</li>
//             <li>Bottles Water</li>
//             <li>Sunscreen</li>
//           </ul>
//         </div>
//       </div>
//       <div className='target-wrapper'>
//         <div className='target-symbol' />
//         <div>
//           <div className='decent-text'>
//             {/*   { props.tour.meetingaddress}*/}
//             Address
//             <br />
//             4300 Pine Highway,
//             <br />
//             Yosemite National Park, CA 95389
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className='tour-information-right'>
//       <div className='call-to-action'>
//         <div className='price'>
//           {/* US$ {props.tour.price} */}
//           US$ 50 <br />
//           <span className='tiny'>per person</span>
//         </div>
//         <div className='booking'>
//           <button className='bookingButton'> Book Now</button>
//         </div>
//       </div>
//       <div className='social-media-wrapper'>
//         <div className='heart-symbol' />
//         <div className='favorites'>Add to favorites</div>
//       </div>
//       <div className='avatar' />
//       <span className='avatar-text'>Your Tour Guide</span>
//     </div>
//   </div>
// </div>


const mapStateToProps = (state) => {
  return {
    allTours: state.tourReducer.tours,
    users: state.userReducer.user
  }
}

export default connect(mapStateToProps, { addTour })(AddTour)