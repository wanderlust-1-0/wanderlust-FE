import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTours } from '../actions';
import ShowTourList from '../components/ShowTourList';

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
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  componentDidMount() {
    const tours = this.props.getAllTours();
    console.log('These are all the tours: ', tours);
  }

  render() {
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
                  <MDBNavLink to='#'>Popular</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  style={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    fontSize: '1.3rem',
                    fontWeight: '400',
                  }}>
                  <MDBNavLink to='#'>Deals</MDBNavLink>
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
                      <MDBDropdownItem>Mountain Biking</MDBDropdownItem>
                      <MDBDropdownItem>Hiking</MDBDropdownItem>
                      <MDBDropdownItem>Rafting</MDBDropdownItem>
                      <MDBDropdownItem>Rock Climbing</MDBDropdownItem>
                      <MDBDropdownItem>City</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right style={{}}>
                {!this.state.collapse ? (
                  <MDBNavItem style={{ display: 'hide' }}>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret color='unique-color'>
                        Username
                      </MDBDropdownToggle>
                      <MDBDropdownMenu color='unique-color'>
                        <MDBDropdownItem>My offered Tours</MDBDropdownItem>
                        <MDBDropdownItem>Settings</MDBDropdownItem>
                        <MDBDropdownItem>Logout</MDBDropdownItem>
                      </MDBDropdownMenu>
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
                      <MDBNavLink to='#'>My offered Tours</MDBNavLink>
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
                MAKE THE LEAP
              </h2>
              <h5>
                Beeing a tour guide can make the day of thousands of people
                better.
              </h5>
            </MDBMask>
          </MDBView>
        </header>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px',
          }}>
          <input type='text' />
          <button>Search</button>
        </div>

        <div className="allToursWrapper">
          <ShowTourList allTours={this.props.allTours} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mstp: ', state)
  return {
    allTours: state.tourReducer.tours
  }
}

export default connect(mapStateToProps, { getAllTours })(ExploreTours)
