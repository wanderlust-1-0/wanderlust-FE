import React from "react";

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
} from "mdbreact";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import "./Dashboard.css";

import OfferedToursList from "../components/OfferedToursList";
import {
  getAllTours,
  getSingleUserById,
  getSingleGuidesTours,
} from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

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
    this.props.getSingleUserById();
    this.props.getSingleGuidesTours();
  }

  render() {
    return (
      <div>
        <header className='dashboardHeader'>
          <MDBNavbar
            color='unique-color'
            fixed='top'
            dark
            expand='md'
            scrolling
            transparent
            style={{ boxShadow: "none" }}
          >
            <MDBNavbarBrand href='/'>
              <strong style={{ fontSize: "2rem", fontWeight: "bold" }}>
                Wanderlust
              </strong>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right style={{}}>
                {!this.state.collapse ? (
                  <MDBNavItem style={{ display: "hide" }}>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret color='unique-color'>
                        <span style={{ fontSize: "1.3rem" }}>
                          {this.props.currentUser.first_name}
                        </span>
                      </MDBDropdownToggle>
                      {/* {JSON.parse(localStorage.getItem("user")).istourguide ? ( */}
                      <MDBDropdownMenu color='unique-color'>
                        <MDBDropdownItem href='/dashboard'>
                          My offered Tours
                        </MDBDropdownItem>
                        <MDBDropdownItem href='/add-tour'>
                          Add a Tour
                        </MDBDropdownItem>
                        <MDBDropdownItem href='/settings'>
                          Settings
                        </MDBDropdownItem>
                        <MDBDropdownItem href='/logout'>Logout</MDBDropdownItem>
                      </MDBDropdownMenu>
                      {/* ) : ( */}
                      {/* <MDBDropdownMenu color='unique-color'>
                          <MDBDropdownItem href='/explore-tours'>
                            Explore Tours
                          </MDBDropdownItem>

                          <MDBDropdownItem href='/settings'>
                            Settings
                          </MDBDropdownItem>
                          <MDBDropdownItem href='/logout'>
                            Logout
                          </MDBDropdownItem>
                        </MDBDropdownMenu> */}
                      )
                    </MDBDropdown>
                  </MDBNavItem>
                ) : (
                  <MDBNavItem
                    style={{
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      fontSize: "1.3rem",
                      fontWeight: "400",
                    }}
                  >
                    {/* {JSON.parse(localStorage.getItem("user")).istourguide ? ( */}
                    <>
                      <MDBNavLink to='/dashboard'>My offered Tours</MDBNavLink>
                      <MDBNavLink to='/add-tour'>Add a Tour</MDBNavLink>
                      <MDBNavLink to='/settings'>Settings</MDBNavLink>
                      <MDBNavLink to='/logout'>Logout</MDBNavLink>
                    </>
                    {/* ) : (
                      <>
                        <MDBNavLink to='/explore-tours'>
                          Explore Tours
                        </MDBNavLink>
                        <MDBNavLink to='/settings'>Settings</MDBNavLink>
                        <MDBNavLink to='logout'>Logout</MDBNavLink>
                      </> */}
                    )
                  </MDBNavItem>
                )}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <MDBView src='/assets/mountains2.png' className='background'>
            <MDBMask className='flex-center flex-column text-white text-center rgba-black-strong'>
              {this.props.currentUser.first_name && (
                <h2
                  className='poppins-font'
                  style={{ fontSize: "6rem", fontWeight: "bold" }}
                >
                  Hi {this.props.currentUser.first_name}
                </h2>
              )}
              <h3>Tours Dashboard</h3>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <h2
            style={{
              marginLeft: "20%",
              marginTop: "4rem",
              fontSize: "1.3rem",
              fontWeight: "bold",
            }}
          >
            Your Tour Offers
          </h2>
          <MDBContainer className='text-center my-5'>
            <div className='allToursWrapper'>
              {this.props.currentUser.offeredTours && (
                <Route
                  path='/dashboard'
                  render={(props) => (
                    <OfferedToursList
                      {...props}
                      offeredTours={this.props.currentUser.offeredTours}
                    />
                  )}
                />
              )}
            </div>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tourProps: state.tourReducer.tours,
  currentUser: state.userReducer.currentUser,
});

export default connect(mapStateToProps, {
  getAllTours,
  getSingleUserById,
  getSingleGuidesTours,
})(Dashboard);
