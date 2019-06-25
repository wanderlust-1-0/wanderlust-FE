import React, { Component } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBFormInline,
  MDBSwitch,
  MDBFileInput,
  MDBRangeInput
} from "mdbreact";
import DocsLink from "../../components/docsLink";

class InputPage extends Component {
  state = {
    radioSet1: false,
    radioSet2: false,
    radioSet3: false,
    checkbox: true,
    switchInput: true
  };

  fileInputHandler = files => {
    console.log(files);
  };

  radioInputHandler = (setNr, radioNr) => () => {
    const radioSetNr = `radioSet${setNr}`;
    this.setState({
      [radioSetNr]: radioNr
    });
  };

  handleCheckboxChange = e => {
    this.setState({ checkbox: !this.state.checkbox });
    console.log(e.target.value + " checked? " + e.target.checked);
  };

  handleSwitchChange = value => {
    console.log(value);
    this.setState({ switchInput: value });
  };

  handleChange = e => {
    console.log(e.target.value + " checked? " + e.target.checked);
  };

  handleRangeChange = value => {
    console.log("range value: " + value);
  };

  render() {
    const {
      radioSet1,
      radioSet2,
      radioSet3,
      checkbox,
      switchInput
    } = this.state;
    return (
      <MDBContainer className="mt-5">
        <DocsLink
          title="Inputs"
          href="https://mdbootstrap.com/docs/react/forms/inputs/"
        />
        <MDBContainer className="mt-5">
          <h2 className="title mb-5">
            <strong>Checkboxes</strong>
          </h2>
          <h4 className="mt-5 mb-3">Basic examples</h4>
          <MDBInput
            value="Classic checkbox"
            label="Classic checkbox"
            checked={checkbox}
            onChange={this.handleCheckboxChange}
            type="checkbox"
            id="checkbox"
          />
          <MDBInput
            label="Filled-in checkbox"
            filled
            type="checkbox"
            id="checkbox2"
          />

          <h4 className="mt-5 mb-3">Disabled checkboxes</h4>
          <MDBInput
            label="Classic checkbox"
            disabled
            type="checkbox"
            id="checkbox3"
          />
          <MDBInput
            label="Filled-in checkbox"
            filled
            disabled
            type="checkbox"
            id="checkbox4"
          />

          <h4 className="mt-5 mb-3">Inline checkboxes</h4>
          <MDBFormInline>
            <MDBInput
              label="Classic checkbox"
              type="checkbox"
              value="example"
              id="checkbox5"
              onChange={this.handleChange}
            />
            <MDBInput
              label="Filled-in checkbox"
              filled
              value="example2"
              type="checkbox"
              id="checkbox6"
              onChange={this.handleChange}
            />
            <MDBInput
              label="Classic checkbox"
              type="checkbox"
              value="example3"
              id="checkbox7"
              onChange={this.handleChange}
            />
          </MDBFormInline>

          <hr className="my-5" />

          <h2 className="title mb-5">
            <strong>Radio buttons</strong>
          </h2>
          <h4 className="mt-5 mb-3">Basic examples</h4>
          <MDBInput
            value="Option 1"
            onChange={this.radioInputHandler(1, 1)}
            checked={radioSet1 === 1 ? true : false}
            label="Option 1"
            type="radio"
            id="radio1"
          />
          <MDBInput
            value="Option 2"
            onChange={this.radioInputHandler(1, 2)}
            checked={radioSet1 === 2 ? true : false}
            label="Option 2"
            type="radio"
            id="radio2"
          />
          <MDBInput
            value="Option 3"
            onChange={this.radioInputHandler(1, 3)}
            checked={radioSet1 === 3 ? true : false}
            label="Option 3"
            type="radio"
            id="radio3"
          />

          <h4 className="mt-5 mb-3">Radio buttons with gap</h4>
          <MDBInput
            gap
            onChange={this.radioInputHandler(2, 4)}
            checked={radioSet2 === 4 ? true : false}
            label="Option 1"
            type="radio"
            id="radio4"
          />
          <MDBInput
            gap
            onChange={this.radioInputHandler(2, 5)}
            checked={radioSet2 === 5 ? true : false}
            label="Option 2"
            type="radio"
            id="radio5"
          />
          <MDBInput
            gap
            onChange={this.radioInputHandler(2, 6)}
            checked={radioSet2 === 6 ? true : false}
            label="Option 3"
            type="radio"
            id="radio6"
          />

          <h4 className="mt-5 mb-3">Inline radio buttons</h4>
          <MDBFormInline>
            <MDBInput
              onChange={this.radioInputHandler(3, 7)}
              checked={radioSet3 === 7 ? true : false}
              label="Option 1"
              type="radio"
              id="radio7"
            />
            <MDBInput
              onChange={this.radioInputHandler(3, 8)}
              checked={radioSet3 === 8 ? true : false}
              label="Option 2"
              type="radio"
              id="radio8"
            />
            <MDBInput
              onChange={this.radioInputHandler(3, 8)}
              checked={radioSet3 === 9 ? true : false}
              label="Option 3"
              type="radio"
              id="radio9"
            />
          </MDBFormInline>

          <hr className="my-5" />

          <h2 className="title mb-5">
            <strong>Switch</strong>
          </h2>
          <MDBSwitch
            checked={switchInput}
            getValue={this.handleSwitchChange}
            labelLeft="No"
            labelRight="Yes"
          />
          <h4 className="mt-5 mb-3">Disabled</h4>
          <MDBSwitch disabled />

          <hr className="my-5" />

          <h2 className="title mb-5">
            <strong>File input</strong>
          </h2>
          <h4 className="mt-5 mb-3">Basic example</h4>
          <MDBFileInput getValue={this.fileInputHandler} />

          <h4 className="mt-5 mb-3">Basic example with reset button</h4>
          <MDBFileInput
            reset
            getValue={this.fileInputHandler}
          />

          <h4 className="mt-5 mb-3">Multiple files</h4>
          <MDBFileInput
            getValue={this.fileInputHandler}
            multiple
            btnColor="info"
            btn-size="sm"
          />

          <hr className="my-5" />

          <h2 className="title mb-5">
            <strong>Range</strong>
          </h2>
          <MDBRangeInput
            getValue={this.handleRangeChange}
            min={0}
            max={100}
            value={20}
          />
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default InputPage;
