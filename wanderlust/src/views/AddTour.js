import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTour } from '../actions';
import './AddTour.css';
import { Redirect } from 'react-router';

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

import {MDBModal, MDBModalBody, MDBModalHeader, MDBBtn } from 'mdbreact';

class AddTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      modal: false,
      tourTitle: '',
      tourCategory: '',
      tourDescription: '',
      tourLength: '',
      recommendedAge: '',
      whatTheyShouldBring: '',
      tourAddress: '',
      tourPrice: ''
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

   toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  redirectDashBoard() {
    this.props.history.push('/dashboard');
  }

  handleInputChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTour = (e) => {
    e.preventDefault();
    this.props.addTour({
      tourname: this.state.tourTitle, category: this.state.tourCategory, tourdescription: this.state.tourDescription, recommendedage: this.state.recommendedAge, durationhrs: this.state.tourLength,
      price: this.state.tourPrice, whattobring: this.state.whatTheyShouldBring, meetingaddress: this.state.tourAddress, guide: {guideid: JSON.parse(localStorage.getItem("user")).guideid}
    });
  }
/* ,guide: {guideid: JSON.parse(localStorage.getItem("user")).guideid, email: JSON.parse(localStorage.getItem("user")).email, firstname: JSON.parse(localStorage.getItem("user")).firstname, lastname: JSON.parse(localStorage.getItem("user")).lastname, phonenumber: JSON.parse(localStorage.getItem("user")).phonenumber, istourguide: JSON.parse(localStorage.getItem("user")).istourguide} */


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
                        <span style={{ fontSize: "1.3rem" }}>{JSON.parse(localStorage.getItem("user")).firstname}</span>
                      </MDBDropdownToggle>
                      {JSON.parse(localStorage.getItem("user")).istourguide ? <MDBDropdownMenu color='unique-color'>
                        <MDBDropdownItem href="/dashboard">My offered Tours</MDBDropdownItem>
                        <MDBDropdownItem href="/add-tour">Add a Tour</MDBDropdownItem>
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
                          <MDBNavLink to="/add-tour">Add a Tour</MDBNavLink>
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
                    <input className='title' type="text" placeholder="Title Your Tour" name="tourTitle" maxLength="35" value={this.state.tourTitle} onChange={this.handleInputChanges} style={{ outline: "none", border: "none", fontSize: "2rem"}} />
                    <input className="category" type="text" placeholder="Category" name="tourCategory" maxLength="15" value={this.state.tourCategory} onChange={this.handleInputChanges} style={{ outline: "none", border: "none" }} />
                  </div>
                </div>
              </div>
            </MDBMask>
          </MDBView>
        </header>
        <MDBContainer className='text-center my-5' style={{ height: "100%" }}>
          <main>
            <div className="addTourAboutWrapper">
              <div className='addTourAbout'>
                <h2 style={{paddingLeft: "4rem"}}>What is your tour about?</h2>
                <form onSubmit={this.addTour}>
                  <div className="info">
                    <i className='infoSymbol'></i>
                    <textarea className="tourDescription" name="tourDescription" value={this.state.tourDescription} placeholder='Tour description' onChange={this.handleInputChanges} cols="40" rows="5">Description</textarea>
                  </div>
                  <div className="tourPriceWrapper">
                    <div className="tourPrice">
                      <div><strong style={{ fontWeight: "bold" }}>US $ </strong></div>
                      <input className="tourPriceInput" type="number" name='tourPrice' value={this.state.tourPrice} onChange={this.handleInputChanges} style={{color: "black", width: "5rem"}}/>
                       &nbsp;<div style={{fontWeight: 500, textAlign: "left"}}>per person</div>
                  </div>
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
                    <textarea className="itemsToBring" name='whatTheyShouldBring' value={this.state.whatTheyShouldBring} placeholder='What should tourists bring with them?' onChange={this.handleInputChanges} cols="40" rows="5">What should they bring</textarea>
                  </div>
                  <div className="target">
                    <i className="targetSymbol"></i>
                    <input className="tourAddress" type="text" placeholder="What is the address" name="tourAddress" value={this.state.tourAddress} onChange={this.handleInputChanges} />
                  </div>
                  <div>
                  <MDBContainer>
                    <MDBBtn className="btnAddTour" gradient='blue' type='submit' onClick={this.toggle}>Save</MDBBtn>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                      <MDBModalHeader toggle={this.toggle} style={{ border: "none" }}></MDBModalHeader>
                      <MDBModalBody style={{ textAlign: "center", paddingBottom: "4rem", fontSize: "1.8rem", color: "green" }}>
                        Your tour is now published!
                    </MDBModalBody>
                      </MDBModal>
                      <MDBBtn className="btnCancel" color="danger" type='submit' onClick={() => this.redirectDashBoard()}>Cancel</MDBBtn>
                      {/* <button className="btnCancel"  onClick={() => this.redirectDashBoard()}>Cancel</button> */}
                    </MDBContainer>
                    {/* <button className="btnAddTour" type='submit'>Add Tour</button> */}
                    
                  </div>
                </form>
              </div>
            </div>
          </main>
        </MDBContainer>
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