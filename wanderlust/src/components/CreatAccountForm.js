import React, { Component } from 'react';
import { addNewGuideToStore, addNewGuide, addNewTouristToStore, addNewTourist } from '../actions';
import { connect } from 'react-redux';

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
} from 'mdbreact';


class CreateAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      email: '',
      phone: '',
      isTourGuide: '',
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

  handleInputChanges = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    if (this.props.guide.isTourGuide) {
      this.addNewGuide(e)
    } else {
      this.addNewTourist(e)
    }
  }

  addNewGuide = (e) => {
    e.preventDefault();

    const { username, firstname, lastname, password, email, phone, isTourGuide } = this.state;

    this.props.addNewGuideToStore({ username, firstname, lastname, password, email, phone, isTourGuide })

    this.props.addNewGuide({ username, firstname, lastname, password, email, phone })

    this.props.history.push('/dashboard')
  }

  addNewTourist = (e) => {
    e.preventDefault();

    const { username, firstname, lastname, password, email, phone, isTourGuide } = this.state

    this.props.addNewTouristToStore({ username, firstname, lastname, password, email, phone, isTourGuide })

    this.props.addNewTourist({ firstname, lastname })

    this.props.history.push('/explore-tours')
  }

  componentDidMount() {
    console.log('CDM: ', this.props.guide.isTourGuide)
    if (this.props.isTourGuide) {
      this.setState({
        username: this.props.guide.username,
        password: this.props.guide.password,
        isTourGuide: this.props.guide.isTourGuide
      })
    } else {
      this.setState({
        username: this.props.tourist.username,
        password: this.props.tourist.password,
        isTourGuide: this.props.tourist.isTourGuide
      })
    }
    console.log('Is this a guide or tourist: ', this.state.isTourGuide)
  }



  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol style={{ maxWidth: '50rem', minHeight: '65vh' }}>
              <MDBCard
                style={{
                  marginTop: '0%',
                  marginLeft: '0rem',
                  padding: '5rem',
                  paddingTop: '1.7rem',
                  width: '50rem',
                  height: '65vh',
                }}>
                <MDBCardBody>
                  <MDBCardText>
                    <form onSubmit={this.addUser}>
                      <div className='seperator' style={{ display: 'flex' }}>
                        <div
                          className='left-side'
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}>
                          <span
                            className='h3 poppins-font main-color-blue'
                            style={{ paddingBottom: '4rem' }}>
                            Hello {this.state.username}!
                          </span>
                          <span className='h5 poppins-font main-color-blue'>
                            Profile Photo
                          </span>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '200px',
                              width: '200px',
                              border: '1px dashed black',
                              borderRadius: '50%',
                              marginTop: '25%',
                            }}>
                            Upload an image
                          </div>
                        </div>
                        <div
                          className='right-side'
                          style={{ marginLeft: '3rem' }}>
                          <span className='h5 poppins-font main-color-blue'>
                            Create Your Account
                          </span>
                          <div
                            className='grey-text'
                            style={{ marginLeft: '2rem' }}>
                            <MDBInput
                              label='Type your first name'
                              group
                              type='text'
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='off'
                              name='firstname'
                              value={this.state.firstname}
                              onChange={this.handleInputChanges}
                              style={{ width: '15rem', marginBottom: '0rem' }}
                            />
                            <MDBInput
                              label='Type your last name'
                              group
                              type='text'
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='off'
                              name='lastname'
                              value={this.state.lastname}
                              onChange={this.handleInputChanges}
                              style={{ width: '15rem', marginBottom: '0rem' }}
                            />
                            <MDBInput
                              label='Type your email'
                              group
                              type='text'
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='off'
                              name='email'
                              value={this.state.email}
                              onChange={this.handleInputChanges}
                              style={{ width: '15rem', marginBottom: '0rem' }}
                            />
                            <MDBInput
                              label='Type your phonenumber'
                              group
                              type='text'
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='off'
                              name='phone'
                              value={this.state.phone}
                              onChange={this.handleInputChanges}
                              style={{ width: '15rem', marginBottom: '0rem' }}
                            />
                          </div>
                          <div
                            className='text-left'
                            style={{ marginLeft: '1.5rem' }}>
                            <MDBBtn
                              gradient='blue'
                              type='submit'
                              style={{ width: '15rem' }}>
                              Save
                            </MDBBtn>
                          </div>
                        </div>
                      </div>
                    </form>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("MStp in create guide form", state)
  return {
    guide: state.userReducer.guide,
    tourist: state.userReducer.tourist
  };
};

export default connect(
  mapStateToProps,
  { addNewGuideToStore, addNewGuide, addNewTouristToStore, addNewTourist },
)(CreateAccountForm);