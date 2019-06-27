import React from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { connect } from 'react-redux';
import NavBarPreLogin from '../components/NavBarPreLogin';
import { Route } from 'react-router-dom';
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

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from 'mdbreact';

import '../App.css';

class Home extends React.Component {
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
              <MDBNavbarNav right style={{}}>
                <MDBNavItem
                  style={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    fontSize: '1.1rem',
                    fontWeight: '400',
                  }}>
                  <MDBNavLink to='#'>About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  style={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    fontSize: '1.1rem',
                    fontWeight: '400',
                  }}>
                  {this.props.location.pathname === '/' ? (
                    <MDBNavLink to='/signin'>Sign In</MDBNavLink>
                  ) : (
                      <MDBNavLink to='/'>Sign Up</MDBNavLink>
                    )}
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
        <MDBView src='https://i.imgur.com/4ox5JIo.png'>
          <MDBMask
            overlay='black-light'
            className='flex-center flex-column text-white text-center'>
            <div className='mountain-background-card'>
              <MDBCol style={{ maxWidth: '30rem' }}>
                <MDBCard
                  style={{
                    marginTop: '50%',
                    marginLeft: '25rem',
                    padding: '5rem',
                    width: '30rem',
                  }}>
                  <MDBCardBody>
                    <MDBCardText>
                      <Route path="/signin" render={(props) => <SignIn {...props} />} />
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </div>
          </MDBMask>
        </MDBView>
        {/* <footer>@copy; Wanderlust 2019</footer> */}
      </div>
    );
  }
}

export default Home;