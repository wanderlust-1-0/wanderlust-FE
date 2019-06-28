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

class NavBarPreLogin extends React.Component {
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
                                    <MDBNavLink to='#'>Sign Up</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>

                    <MDBView src='https://i.imgur.com/Khv7HRX.png'>
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
                    <MDBContainer className='text-center my-5'>
                        <p align='justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
                    </MDBContainer>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.guide
    }
}

export default connect(mapStateToProps, {})(NavBarPreLogin);