import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTours, getAllTourists } from '../actions';
import ShowTourList from '../components/ShowTourList';
import { Redirect } from 'react-router';
import './explore-tours.css';

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
  MDBIcon,
} from 'mdbreact';
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';

class ExploreTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      selected: "",
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  componentDidMount() {
    this.props.getAllTours();
    /* console.log('These are all the tours: ', tours); */
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  setSelected(searchterm) {
    this.setState({
      selected: searchterm,
    });
  }

  render() {
    if (localStorage.getItem("auth-token") === null || localStorage.getItem("username") === null || localStorage.getItem("user") === null) {
      return <Redirect to="/" />
    } else if (JSON.parse(localStorage.getItem("user")).istourguide) {
      return <Redirect to="/dashboard" />
    }
    return (
      <div>
        <header>
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
              {/* This part can be used for the explore-page */}
              <MDBNavbarNav left style={{ marginLeft: '35%' }}>
                <MDBNavItem
                  style={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    fontSize: '1.3rem',
                    fontWeight: '400',
                  }}>
                  <MDBNavLink to='#' onClick={() => this.setSelected("")}>Popular</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  style={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    fontSize: '1.3rem',
                    fontWeight: '400',
                  }}>
                  <MDBNavLink to='#' onClick={() => this.setSelected(100)}>Deals</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem
                  style={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    fontSize: '1.3rem',
                    fontWeight: '400',
                  }}>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret color='unique-color'>
                      Categories
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color='unique-color'>
                      <MDBDropdownItem onClick={() => this.setSelected("Jungle")}>Jungle</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => this.setSelected("Desert")}>Desert</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => this.setSelected("Cruise")}>Cruise</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => this.setSelected("Outdoor")}>Outdoor</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => this.setSelected("City")}>City</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right style={{}}>
                {!this.state.collapse ? (
                  <MDBNavItem style={{ display: 'hide' }}>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret color='unique-color'>
                        {JSON.parse(localStorage.getItem("user")).firstname}
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
                TRAVEL THE WORLD
              </h2>
              <h5>
                There was never a better time in history to explore the world than today!
              </h5>
            </MDBMask>
          </MDBView>
        </header>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: "10rem",
            position: "absolute",
            bottom: "-2.7rem",
            marginLeft: "20%",

          }}>
          <input type='text' style={{ padding: "2rem", width: "60vw", outline: "none" }} maxlength="50" value={this.state.selected} name="selected" onChange={this.handleInput} autoComplete='off'>
          </input>
          <button className="search-button" style={{ position: "absolute", right: "2rem", bottom: "1.3rem" }}>Search</button>
        </div>
        <main>
          <h2 style={{ marginLeft: "20%", marginTop: "4rem", fontSize: "1.3rem", fontWeight: "bold" }}>Popular tours</h2>
          <MDBContainer className='text-center my-5'>

            <div className="allToursWrapper">
              <ShowTourList allTours={this.state.selected.length == 0 ? this.props.tourProps : this.props.tourProps.filter(tour => typeof this.state.selected == 'number' ? this.state.selected >= tour.price : tour.tourname.toLowerCase().includes(this.state.selected.toLowerCase()) || tour.tourdescription.toLowerCase().includes(this.state.selected.toLowerCase()) || tour.category.toLowerCase().includes(this.state.selected.toLowerCase()) || tour.area.toLowerCase().includes(this.state.selected.toLowerCase()))} />
            </div>

          </MDBContainer>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({ tourProps: state.tourReducer.tours });

export default connect(
  mapStateToProps,
  { getAllTours, getAllTourists },
)(ExploreTours);

