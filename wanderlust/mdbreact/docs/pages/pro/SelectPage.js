import React, { Component } from "react";
import { MDBBtn, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBContainer } from "mdbreact";
import DocsLink from "../../components/docsLink";
import '../InputPage.css';

class SelectPage extends Component {
  state = {
    options: [
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Option One",
        value: "1"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Option Two",
        value: "2"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Option Three",
        value: "3"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Option Four",
        value: "4"
      }
    ]
  };

  // build function for your selects, and pass it as getValue property to reed the select's value
  getValueOfSelect = value => {
    console.log(value);
  };

  remove = () => {
    this.setState({
      options: this.state.options.slice(0, -1)
    });
  };

  onSubmit = e => {
    e.preventDefault();

    e.target.checkValidity() && console.log('Submitted');
  }

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Select"
          href="https://mdbootstrap.com/docs/react/forms/select/"
        />
        
        <h4 className="my-4 indigo-text">
          <strong>Basic example</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <MDBSelect
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
              label="Example label"
            >
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions>
                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                <MDBSelectOption>Option nr 1</MDBSelectOption>
                <MDBSelectOption>Option nr 2</MDBSelectOption>
                <MDBSelectOption>Option nr 3</MDBSelectOption>
                <MDBSelectOption>Option nr 4</MDBSelectOption>
                <MDBSelectOption selected>Option nr 5</MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </div>
        </div>
        <h4 className="my-4 indigo-text">
          <strong>Basic outline example</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <MDBSelect
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
              label="Example label"
              outline
              labelClass="labelBg"
            >
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions>
                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                <MDBSelectOption>Option nr 1</MDBSelectOption>
                <MDBSelectOption>Option nr 2</MDBSelectOption>
                <MDBSelectOption>Option nr 3</MDBSelectOption>
                <MDBSelectOption>Option nr 4</MDBSelectOption>
                <MDBSelectOption selected>Option nr 5</MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </div>
        </div>
        <h4 className="my-4 teal-text">
          <strong>Multiple select</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <MDBSelect
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
              label="Example label"
              multiple
            >
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions search>
                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                <MDBSelectOption value="value nr 1">Option nr 1</MDBSelectOption>
                <MDBSelectOption selected value="value nr 2">
                  Option nr 2
                </MDBSelectOption>
                <MDBSelectOption value="value nr 3">Option nr 3</MDBSelectOption>
                <MDBSelectOption value="value nr 4">
                  Option nr 4
                </MDBSelectOption>
                <MDBSelectOption value="value nr 5">Option nr 5</MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </div>
        </div>
        <h4 className="my-4 deep-orange-text">
          <strong>Colorful select</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <MDBSelect
              getValue={this.getValueOfSelect}
              color="primary"
              label="Blue select"
            >
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions>
                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                <MDBSelectOption value="value nr 1">Option nr 1</MDBSelectOption>
                <MDBSelectOption value="value nr 2">Option nr 2</MDBSelectOption>
                <MDBSelectOption value="value nr 3">Option nr 3</MDBSelectOption>
                <MDBSelectOption value="value nr 4">Option nr 4</MDBSelectOption>
                <MDBSelectOption value="value nr 5">Option nr 5</MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </div>
        </div>
        <h4 className="my-4 blue-grey-text">
          <strong>MDBSelect with icons</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <MDBSelect
              getValue={this.getValueOfSelect}
              label="Example label"
            >
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions search>
                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                <MDBSelectOption
                  value="User nr 1"
                  icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
                >
                  Option nr 1
                </MDBSelectOption>
                <MDBSelectOption
                  value="User nr 2"
                  icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                >
                  Option nr 2
                </MDBSelectOption>
                <MDBSelectOption
                  value="User nr 3"
                  icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg"
                >
                  Option nr 3
                </MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </div>
        </div>
        <h4 className="my-4 deep-purple-text">
          <strong>Options groups</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <MDBSelect
              getValue={this.getValueOfSelect}
              label="Example label"
            >
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions>
                <MDBSelectOption disabled>team 1</MDBSelectOption>
                <MDBSelectOption>Option nr 1</MDBSelectOption>
                <MDBSelectOption>Option nr 2</MDBSelectOption>
                <MDBSelectOption separator>team 2</MDBSelectOption>
                <MDBSelectOption>Option nr 3</MDBSelectOption>
                <MDBSelectOption>Option nr 4</MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </div>
        </div>
        <h4 className="my-4 deep-default-text">
          <strong>MDBSelect without markup</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <MDBSelect
              selectAll
              search
              multiple
              color="primary"
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
              options={this.state.options}
              selected="Choose option"
              label="MDBSelect with Objects"
            />
          </div>
          <div className="col-md-6">
            <MDBBtn onClick={this.remove}>Remove option</MDBBtn>
          </div>
        </div>
        <h4 className="my-4 deep-default-text">
          <strong>Outline MDBSelect without markup</strong>
        </h4>
        <div className="row">
          <div className="col-md-6" >
            <MDBSelect
              outline
              search
              multiple
              color="secondary"
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
              options={this.state.options}
              label="Outline select"
              labelClass="labelBg"
            />
          </div>
        </div>

        <h4 className="my-4 deep-default-text">
          <strong>MDBSelect with required property</strong>
        </h4>
        <div className="row">
          <div className="col-md-6" style={{ marginBottom: '250px'}}>
          <form onSubmit={this.onSubmit}>
            <MDBSelect
              selectAll
              search
              multiple
              color="primary"
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
              options={this.state.options}
              label="MDBSelect with Objects"
              required
            />
            <MDBBtn type="submit" color="primary">Submit</MDBBtn>
            </form>
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default SelectPage;
