import React, { Component } from 'react';
import { updateUserInfo } from '../actions';
import { connect } from 'react-redux';

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact';
import { FormHelperText } from '@material-ui/core';

/* import { Link } from 'react-router-dom'; */
class EditInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
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

  updateUserInfo = e => {
    e.preventDefault();
    this.props.updateUserInfo(this.state);
  };

  componentDidMount() {
    //prefill the inputs with the API call data of the current user
    this.setState({
      username: 123,
      password: 123,
      firstname: 'sascha',
      lastname: 'majewsky',
      email: 'sascha@test.com',
      phone: '12345',
      isTourGuide: true,
    });
    console.log('MY STATE IS: ', this.state);
  }

  render() {
    return (
      /*      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid black',
          height: '400px',
          width: '500px',
          marginTop: '50px',
        }}> */
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
                    <form onSubmit={this.updateUserInfo}>
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
                            View or Edit your <br />
                            information
                          </span>
                          <div
                            className='grey-text'
                            style={{ marginLeft: '2rem' }}>
                            <MDBInput
                              label='Change your password here'
                              group
                              type='password' // Todo: change back type to email
                              validate
                              error='wrong'
                              success='right'
                              autoComplete='off'
                              name='password'
                              value={this.state.password}
                              onChange={this.handleInputChanges}
                              style={{ width: '15rem', marginBottom: '0rem' }}
                            />
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

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { updateUserInfo },
)(EditInfoForm);
