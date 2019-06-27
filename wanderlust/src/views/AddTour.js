import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTour } from '../actions';
import './AddTour.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
} from 'mdbreact';
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';

class AddTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      tourTitle: '',
      tourCategory: '',
      tourDescription: '',
      tourLength: null,
      recommendedAge: '',
      whatTheyShouldBring: '',
      tourAddress: '',
      tourPrice: null
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
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

  componentDidMount() {
    /* this.props.getAllTours(); */
    /* console.log('These are all the tours: ', tours); */
  }

  render() {
   if (localStorage.getItem("auth-token") === null || localStorage.getItem("username") === null || localStorage.getItem("user") === null) {
      return <Redirect to="/" />;
    } else if (!JSON.parse(localStorage.getItem("user")).istourguide) {
      return <Redirect to="/explore-tours" />
    }
    return (
      <div>
        <header className='addTourHeader'>
          <MDBNavbar
            color='unique-color'
            fixed='top'
            dark
            expand='md'
            scrolling
            transparent
            style={{ boxShadow: 'none' }}>
            <MDBNavbarBrand href='/'>
              <strong style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                Wanderlust
              </strong>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right style={{}}>
                {!this.state.collapse ? (
                  <MDBNavItem style={{ display: 'hide' }}>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret color='unique-color'>
                        {JSON.parse(localStorage.getItem("user")).firstname}
                      </MDBDropdownToggle>
                      {JSON.parse(localStorage.getItem("user")).istourguide ? <MDBDropdownMenu color='unique-color'>
                        <MDBDropdownItem href="/dashboard">My offered Tours</MDBDropdownItem>
                        <MDBDropdownItem href="/settings">Settings</MDBDropdownItem>
                        <MDBDropdownItem href="/logout">Logout</MDBDropdownItem>
                      </MDBDropdownMenu> : <MDBDropdownMenu color='unique-color'>
                          <MDBDropdownItem href="/explore-tours">Explore Tours</MDBDropdownItem>
                          <MDBDropdownItem href="/settings">Settings</MDBDropdownItem>
                          <MDBDropdownItem href="/logout">Logout</MDBDropdownItem>
                        </MDBDropdownMenu>}
                    </MDBDropdown>
                  </MDBNavItem>
                ) : (
                    <MDBNavItem
                      style={{
                        marginLeft: '1rem',
                        marginRight: '1rem',
                        fontSize: '1.3rem',
                        fontWeight: '400',
                      }}>
                      {JSON.parse(localStorage.getItem("user")).istourguide ?
                        <><MDBNavLink to='/dashboard'>My offered Tours</MDBNavLink>
                          <MDBNavLink to='/settings'>Settings</MDBNavLink>
                          <MDBNavLink to='/logout'>Logout</MDBNavLink></>
                        :
                        <><MDBNavLink to='/explore-tours'>Explore Tours</MDBNavLink>
                          <MDBNavLink to='/settings'>Settings</MDBNavLink>
                          <MDBNavLink to='logout'>Logout</MDBNavLink></>}
                    </MDBNavItem>
                  )}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <MDBView src='https://i.imgur.com/eAs1xr6.png'>
            <MDBMask
              overlay='black-light'
              className='flex-center flex-column text-white text-center'>
              <h2
                className='poppins-font'
                style={{ fontSize: '6rem', fontWeight: 'bold' }}>
                ADD A TOUR
              </h2>
              <h5 style={{ paddingBottom: "7rem" }}>
                Fill out the form to create a new tour thus enriching the life of hundreds of people!
              </h5>

              <div className="addTourWrapper">
                <div className="tourTitleWrapper">
                  <div className="tourTitle">
                    <input className='title' type="text" placeholder="Title Your Tour" name="tourTitle" maxlength="35" value={this.state.tourTitle} onChange={this.handleInputChanges} style={{outline: "none", backgroundColor: "darkgrey", border: "none", fontSize: "2rem", color: "white"}}/>
                    <input className="category" type="text" placeholder="Category" name="tourCategory" maxlength="15" value={this.state.tourCategory} onChange={this.handleInputChanges} style={{outline: "none", backgroundColor: "darkgrey", border: "none", color: "white"}}/>
                  </div>
                </div>
              </div>
            </MDBMask>
          </MDBView>
        </header>

       
          <MDBContainer className='text-center my-5'style={{height: "100%"}}>
             <main>
            <div className="addTourAboutWrapper">
            <div className='addTourAbout'>
              <h2>What is your tour about?</h2>
              <div className="info">
                <i className='infoSymbol'></i>
                <textarea className="tourDescription" name="tourDescription" value={this.state.tourDescription} placeholder='Tour description' onChange={this.handleInputChanges} cols="40" rows="5">Description</textarea>
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
                <textarea className="itemsToBring" name="itemsToBring" name='whatTheyShouldBring' value={this.state.whatTheyShouldBring} placeholder='What should tourists bring with them?' onChange={this.handleInputChanges} cols="40" rows="5">What should they bring</textarea>
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
            </div>            
        
        </main>
          </MDBContainer>
        {/*     

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
} */}
        <form onSubmit={this.addTour}>
          Test
</form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allTours: state.tourReducer.tours,
    users: state.userReducer.user
  }
}

export default connect(mapStateToProps, { addTour })(AddTour)