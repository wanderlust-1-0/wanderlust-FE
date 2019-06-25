import React, { Component } from 'react';
import { updateUserInfo } from '../actions';
import { connect } from 'react-redux';

class EditInfoForm extends Component {
  state = {
    currentPassword: '',
    name: '',
    email: '',
    phone: '',
    newPassword: '',
  };

  handleInputChanges = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateUserInfo = e => {
    e.preventDefault();
    this.props.updateUserInfo(this.state);
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid black',
          height: '400px',
          width: '500px',
          marginTop: '50px',
        }}>
        <div style={{ display: 'flex' }}>
          <div>Back</div>
          <h2>Edit your information</h2>
        </div>
        <form style={{ display: 'flex' }} onSubmit={this.updateUserInfo}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '0 10px',
            }}>
            <h3>Profile Photo</h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '150px',
                width: '150px',
                border: '1px dashed black',
                borderRadius: '50%',
              }}>
              Upload an image
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '50px 10px 0 10px',
            }}>
            <div>
              <input
                type='password'
                placeholder='Current Password'
                name='currentPassword'
                value={this.state.currentPassword}
                onChange={this.handleInputChanges}
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Name'
                name='name'
                value={this.state.name}
                onChange={this.handleInputChanges}
              />
            </div>
            <div>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={this.state.email}
                onChange={this.handleInputChanges}
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Phone Number'
                name='phone'
                value={this.state.phone}
                onChange={this.handleInputChanges}
              />
            </div>
            <div>
              <input
                type='password'
                placeholder='New Password'
                name='newPassword'
                value={this.state.newPassword}
                onChange={this.handleInputChanges}
              />
            </div>
            <div>
              <span>Register as a guide</span>
              <input type='checkbox' />
            </div>
            <button type='submit'>Save</button>
          </div>
        </form>
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
