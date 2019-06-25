import React, { Component } from "react";
import { MDBDatePicker, MDBContainer, MDBBtn } from "mdbreact";
import DocsLink from "./../../components/docsLink";

class DatePickerPage extends Component {
  state = {
    date: new Date("12.12.2012")
  }

  getPickerValue = value => console.log(value);

  updateStateValue = value => this.setState({ date: value });

  setDate = date => this.setState({ date: new Date(date) })

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Date Picker"
          href="https://mdbootstrap.com/docs/react/forms/date-picker/"
        />
        <MDBDatePicker clearable valueDefault={null} emptyLabel="Select Date" getValue={this.getPickerValue} />
        <MDBDatePicker clearable getValue={this.getPickerValue}
          theme={{
            palette: {
              primary: {
                main: '#ffbb33',
              },
              secondary: {
                main: '#FF8800',
                contrastText: '#ffcc00',
              },
            },
            typography: {
              useNextVariants: true,
            }
          }}
        />

        <div className="d-flex align-items-center">
          <MDBDatePicker value={this.state.date} getValue={this.updateStateValue} />
          <MDBBtn onClick={() => this.setDate("10.20.2020")} size="sm" className="ml-4">Set Date "10.20.2020"</MDBBtn>
        </div>
      </MDBContainer>
    );
  }
}

export default DatePickerPage;
