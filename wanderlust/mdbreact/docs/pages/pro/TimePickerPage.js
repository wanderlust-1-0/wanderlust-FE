import React, { Component } from "react";
import { MDBTimePicker, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import DocsLink from "./../../components/docsLink";

class TimePickerPage extends Component {

  getPickerValue = value => {
    console.log(value);
  };

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Time Picker"
          href="https://mdbootstrap.com/docs/react/forms/time-picker/"
        />
        <MDBRow>
          <MDBCol md="3">
            <MDBTimePicker id="timePicker" label="24hrs format" closeOnCancel cancelable clearable hours={12} minutes={30} hoursFormat={24} getValue={this.getPickerValue} />
          </MDBCol>
          <MDBCol md="3">
            <MDBTimePicker id="timePicker" label="12 hrs format" color="default" hours={12} minutes={30} hoursFormat={12} getValue={this.getPickerValue} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default TimePickerPage;
