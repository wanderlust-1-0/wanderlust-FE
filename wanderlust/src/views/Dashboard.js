import React from 'react';
import { connect } from 'react-redux';

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

import ShowTourList from '../components/ShowTourList';
import { getAllTours } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class Dashboard extends React.Component {
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
    this.props.getAllTours();
    /* console.log('These are all the tours: ', tours); */
  }

  render() {
    if (localStorage.getItem("auth-token") === null) {
      return <Redirect to="/" />
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
              {/* <MDBNavbarNav left style={{ marginLeft: '35%' }}>
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
              </MDBNavbarNav> */}
              <MDBNavbarNav right style={{}}>
                {!this.state.collapse ? (
                  <MDBNavItem style={{ display: 'hide' }}>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret color='unique-color'>
                        {this.props.guide.username}
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

        <main>
          <h2 style={{ marginLeft: "20%", marginTop: "4rem", fontSize: "1.3rem", fontWeight: "bold" }}>Your Tour Offers</h2>
          <MDBContainer className='text-center my-5'>

            <div className="allToursWrapper">
              <ShowTourList allTours={this.props.tourProps} />
            </div>

          </MDBContainer>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({ tourProps: state.tourReducer.tours, guide: state.userReducer.guide });

export default connect(
  mapStateToProps,
  { getAllTours },
)(Dashboard);
