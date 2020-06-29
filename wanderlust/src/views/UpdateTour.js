import React, { Component } from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import { getSingleUserById, updateTour, deleteTour } from "../actions";
import "./AddTour.css";
import { Redirect } from "react-router";

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
  MDBSelect,
} from "mdbreact";

import { MDBModal, MDBModalBody, MDBModalHeader, MDBBtn } from "mdbreact";

class UpdateTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      modal: false,
      id: null,
      tourTitle: "",
      tourCategory: "",
      tourDescription: "",
      tourguidephonenumber: "",
      tourLength: null,
      recommendedAge: "",
      whatTheyShouldBring: "",
      tourAddress: "",
      tourPrice: null,
      options: [
        {
          text: "All Ages",
          value: "allAges",
        },
        {
          text: "13 Yrs +",
          value: "13Yrs+",
        },
        {
          text: "18 Yrs +",
          value: "18Yrs+",
        },
      ],
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    console.log("update-tour state", this.props);
    const {
      id,
      tourname,
      tourdescription,
      durationhrs,
      whattobring,
      recommendedage,
      meetingaddress,
      price,
    } = this.props.location.state;

    this.setState((state) => {
      return {
        ...state,
        id,
        tourTitle: tourname,
        tourDescription: tourdescription,
        recommendedAge: recommendedage,
        whatTheyShouldBring: whattobring,
        tourLength: durationhrs,
        tourAddress: meetingaddress,
        tourPrice: price,
      };
    });
    this.props.getSingleUserById();
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  redirectDashBoard() {
    this.props.history.push("/dashboard");
  }

  handleInputChanges = (e) => {
    e.target.name
      ? this.setState({
          [e.target.name]: e.target.value,
        })
      : this.setState({
          [this.inputElm]: e.target.value,
        });
  };

  // Handle recommended age select
  handleSelect = (value) => {
    this.setState((state) => {
      return {
        ...state,
        recommendedAge: value[0],
      };
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    console.log("Update Start");
    this.props.updateTour(this.state.id, {
      tourname: this.state.tourTitle,
      category: this.state.tourCategory,
      tourdescription: this.state.tourDescription,
      tourguidephonenumber: this.state.tourguidephonenumber,
      recommendedage: this.state.recommendedAge,
      durationhrs: this.state.tourLength,
      price: this.state.tourPrice,
      whattobring: this.state.whatTheyShouldBring,
      meetingaddress: this.state.tourAddress,
    });

    this.redirectDashBoard();
  };

  handleDelete() {
    this.props.deleteTour(this.state.id).then(() => {
      this.props.history.push("/dashboard");
    });
  }

  render() {
    const { isTourGuide } = this.props.currentUser;
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
                      {isTourGuide ? (
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
                          <MDBDropdownItem href='/logout'>
                            Logout
                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                      ) : (
                        <MDBDropdownMenu color='unique-color'>
                          <MDBDropdownItem href='/explore-tours'>
                            Explore Tours
                          </MDBDropdownItem>
                          <MDBDropdownItem href='/settings'>
                            Settings
                          </MDBDropdownItem>
                          <MDBDropdownItem href='/logout'>
                            Logout
                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                      )}
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
                    {isTourGuide ? (
                      <>
                        <MDBNavLink to='/dashboard'>
                          My offered Tours
                        </MDBNavLink>
                        <MDBNavLink to='/add-tour'>Add a Tour</MDBNavLink>
                        <MDBNavLink to='/settings'>Settings</MDBNavLink>
                        <MDBNavLink to='/logout'>Logout</MDBNavLink>
                      </>
                    ) : (
                      <>
                        <MDBNavLink to='/explore-tours'>
                          Explore Tours
                        </MDBNavLink>
                        <MDBNavLink to='/settings'>Settings</MDBNavLink>
                        <MDBNavLink to='logout'>Logout</MDBNavLink>
                      </>
                    )}
                  </MDBNavItem>
                )}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <MDBView src='/assets/mapwithcamera.jpg' className='d-flex h-100'>
            <MDBMask className='flex-center flex-column text-white text-center rgba-black-strong'>
              <h2
                className='poppins-font'
                style={{
                  fontSize: "6rem",
                  fontWeight: "bold",
                  marginTop: "5rem",
                }}
              >
                TOUR INFO
              </h2>
              <h5 style={{ paddingBottom: "1rem", marginBottom: "5rem" }}>
                Here you can update information or delete a tour.
              </h5>
              <div className='addTourWrapper'>
                <div className='tourTitleWrapper'>
                  <div className='tourTitle'>
                    <input
                      className='title'
                      type='text'
                      placeholder='Title Your Tour'
                      name='tourTitle'
                      maxLength='35'
                      value={this.state.tourTitle}
                      onChange={this.handleInputChanges}
                      style={{
                        outline: "none",
                        border: "none",
                        fontSize: "2rem",
                      }}
                    />
                    {/* <input
                      className='category'
                      type='text'
                      placeholder='Category'
                      name='tourCategory'
                      maxLength='15'
                      value={this.state.tourCategory}
                      onChange={this.handleInputChanges}
                      style={{ outline: "none", border: "none" }}
                    /> */}
                  </div>
                </div>
              </div>
            </MDBMask>
          </MDBView>
        </header>
        <MDBContainer className='text-center' style={{ height: "100%" }}>
          <div className='addTourAboutWrapper'>
            <div className='addTourAbout'>
              <h2
                style={{
                  textAlign: "left",
                  width: "60%",
                  marginLeft: "3rem",
                }}
              >
                About this tour
              </h2>
              <form onSubmit={this.handleUpdate} className='d-flex flex-column'>
                <div className='d-flex'>
                  <div className='d-flex flex-column'>
                    <div className='info'>
                      <i className='infoSymbol'></i>
                      <textarea
                        className='tourDescription'
                        name='tourDescription'
                        value={this.state.tourDescription}
                        placeholder='Tour description'
                        onChange={this.handleInputChanges}
                        cols='40'
                        rows='5'
                      >
                        Description
                      </textarea>
                    </div>
                    <div className='clock'>
                      <i className='clockSymbol'></i>
                      <input
                        className='tourLength'
                        type='number'
                        placeholder='How long is it'
                        name='tourLength'
                        value={this.state.tourLength}
                        onChange={this.handleInputChanges}
                      />
                    </div>
                    <div className='people'>
                      <i className='peopleSymbol'></i>
                      <MDBSelect
                        required
                        getValue={this.handleSelect}
                        options={this.state.options}
                        selected={this.state.recommendedAge}
                        color='primary'
                        className='form-control'
                        style={{
                          backgroundColor: "#F2F2F2",
                          borderRadius: "5px",
                          justifyContent: "center",
                        }}
                      />
                    </div>
                    <div className='note'>
                      <i className='noteSymbol'></i>
                      <textarea
                        className='itemsToBring'
                        name='whatTheyShouldBring'
                        value={this.state.whatTheyShouldBring}
                        placeholder='What should tourists bring with them?'
                        onChange={this.handleInputChanges}
                        cols='40'
                        rows='5'
                      >
                        What should they bring
                      </textarea>
                    </div>
                    <div className='target'>
                      <i className='targetSymbol'></i>
                      <input
                        className='tourAddress'
                        type='text'
                        placeholder='What is the address'
                        name='tourAddress'
                        value={this.state.tourAddress}
                        onChange={this.handleInputChanges}
                      />
                    </div>
                    <div></div>
                    {/* <MDBContainer style={{ marginLeft: "1.5rem" }}>
                      {/* <button className="btnCancel"  onClick={() => this.redirectDashBoard()}>Cancel</button> */}
                    {/* </MDBContainer>  */}
                    {/* <button className="btnAddTour" type='submit'>Add Tour</button> */}
                  </div>
                  <div>
                    <div className='tourPriceWrapper'>
                      <div className='tourPrice border-bottom border-light pb-4'>
                        <div>
                          <strong
                            className='d-flex px-3'
                            style={{ fontSize: "1.5em", fontWeight: "bold" }}
                          >
                            US${" "}
                          </strong>
                        </div>
                        <NumberFormat
                          thousandSeparator={true}
                          allowNegative={false}
                          decimalScale={2}
                          fixedDecimalScale={true}
                          className='tourPriceInput py-3'
                          value={this.state.tourPrice}
                          style={{ color: "black", width: "6rem" }}
                          onValueChange={(values) => {
                            const { formattedValue, value } = values;
                            this.setState((state) => {
                              return {
                                ...state,
                                tourPrice: value,
                              };
                            });
                          }}
                        />
                        &nbsp;
                        <div style={{ fontWeight: 500, textAlign: "left" }}>
                          per person
                        </div>
                      </div>
                    </div>
                    <div className='profileImgWrapper d-flex pl-5'>
                      <div className='guideImage'></div>
                    </div>
                  </div>
                </div>
                <div>
                  <MDBBtn
                    className='btnAddTour'
                    gradient='blue'
                    type='submit'
                    // onClick={this.toggle}
                  >
                    Save
                  </MDBBtn>
                  <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader
                      toggle={this.toggle}
                      style={{ border: "none" }}
                    ></MDBModalHeader>
                    <MDBModalBody
                      style={{
                        textAlign: "center",
                        paddingBottom: "4rem",
                        fontSize: "1.8rem",
                        color: "green",
                      }}
                    >
                      <h3 style={{ color: "red" }}>Warning:</h3>
                      <p style={{ color: "red" }}>This cannot be undone!</p>
                      <div className='d=flex' color='danger'>
                        <MDBBtn color='secondary' onClick={this.toggle}>
                          Go Back
                        </MDBBtn>
                        <MDBBtn color='danger' onClick={this.handleDelete}>
                          Delete
                        </MDBBtn>
                      </div>
                    </MDBModalBody>
                  </MDBModal>
                  <MDBBtn
                    className='btnCancel'
                    color='info'
                    onClick={() => this.redirectDashBoard()}
                  >
                    Cancel
                  </MDBBtn>
                  <MDBBtn
                    className='btnCancel'
                    color='danger'
                    onClick={() => this.toggle()}
                  >
                    Delete
                  </MDBBtn>
                </div>
              </form>
            </div>
          </div>
        </MDBContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allTours: state.tourReducer.tours,
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps, {
  getSingleUserById,
  updateTour,
  deleteTour,
})(UpdateTour);
