import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBContainer, MDBFormInline, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBCollapse, MDBNavbarToggler, MDBNavbarNav, MDBNavItem,  MDBNavLink, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBIcon } from "mdbreact";
import DocsLink from "../../components/docsLink";

class SearchPagePro extends Component {

  state = {
    collapsed: false,
    value: "Choose your option",
    value2: "Choose your option"
  }

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleNavbarClick = () => {
    this.setState({
      collapsed: false
    });
  }

  getValueOfSelectOne = value => {
    this.setState({ value: value });
    console.log(value);
  }

  getValueOfSelectTwo = value => {
    this.setState({ value2: value });
    console.log(value);
  }

  render() {
    return (
      <Router>
        <MDBContainer>
          <DocsLink
            title="Search"
            href="https://mdbootstrap.com/docs/react/forms/search/"
          />
          <MDBFormInline className="md-form mr-auto mb-4">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn gradient="blue" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn outline color="success" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn color="unique" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
        </MDBFormInline>
        <MDBFormInline className="md-form mr-auto mb-4">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn outline color="warning" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn color="elegant" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
        </MDBFormInline>
        <MDBFormInline className="mr-auto mb-4">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn gradient="purple" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn outline color="danger" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn outline color="indigo" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
        </MDBFormInline>
        <MDBFormInline className="mr-auto mb-4">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn gradient="peach" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn outline color="primary" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn color="mdb-color" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
        </MDBFormInline>
          <h3 className="mt-5">Search within navbar</h3>
          <MDBNavbar
            color="deep-purple"
            className="text-white darken-3"
            dark
            expand="md"
          >
            <MDBNavbarBrand>MDBNavbar</MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.handleTogglerClick} />
            <MDBCollapse isOpen={this.state.collapsed} navbar>
              <MDBNavbarNav right onClick={this.handleNavbarClick}>
                <MDBFormInline className="md-form mr-auto m-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <MDBBtn
                    outline
                    color="white"
                    size="sm"
                    type="submit"
                    className="mr-auto"
                  >
                    Search
                  </MDBBtn>
                </MDBFormInline>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <br />
          <MDBNavbar color="blue-grey" light className="lighten-5" expand="md">
            <MDBNavbarBrand>MDBNavbar</MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.handleTogglerClick} />
            <MDBCollapse isOpen={this.state.collapsed} navbar>
              <MDBNavbarNav left onClick={this.handleNavbarClick}>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Features</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Pricing</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right onClick={this.handleNavbarClick}>
                <MDBFormInline className="mr-auto m-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </MDBFormInline>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <MDBNavbar color="pink lighten-3" dark className="lighten-5 mt-4" expand="md">
            <MDBNavbarNav left onClick={this.handleNavbarClick}>
            <MDBFormInline className="md-form m-0">
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <MDBIcon icon="search" />
            </MDBFormInline>
            </MDBNavbarNav>
            <MDBNavbarBrand>MDBNavbar</MDBNavbarBrand>
          </MDBNavbar>
          <MDBNavbar color="blue lighten-2" dark className="lighten-5 mt-4" expand="md">
            <MDBNavbarNav left onClick={this.handleNavbarClick}>
            <MDBFormInline className="mr-auto">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <MDBBtn color="mdb-color" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
            </MDBFormInline>
            </MDBNavbarNav>
            <MDBNavbarBrand>MDBNavbar</MDBNavbarBrand>
          </MDBNavbar>
          <h3 className="mt-5">Search within select</h3>
          <MDBSelect getValue={ value => this.getValueOfSelectOne(value)}>
            <MDBSelectInput selected="Choose your option" />
            <MDBSelectOptions search>
              <MDBSelectOption disabled>Choose your option</MDBSelectOption>
              <MDBSelectOption>Option nr 1</MDBSelectOption>
              <MDBSelectOption>Option nr 2</MDBSelectOption>
              <MDBSelectOption>Option nr 3</MDBSelectOption>
              <MDBSelectOption>Option nr 4</MDBSelectOption>
              <MDBSelectOption>Option nr 5</MDBSelectOption>
            </MDBSelectOptions>
          </MDBSelect>
          <label>Example label</label>
          <h3 className="mt-5">Search within multiselect</h3>
          <MDBSelect multiple getValue={value => this.getValueOfSelectOne(value)}>
            <MDBSelectInput selected="Choose your option" />
            <MDBSelectOptions search>
              <MDBSelectOption disabled>Choose your option</MDBSelectOption>
              <MDBSelectOption>Option nr 1</MDBSelectOption>
              <MDBSelectOption>Option nr 2</MDBSelectOption>
              <MDBSelectOption>Option nr 3</MDBSelectOption>
              <MDBSelectOption>Option nr 4</MDBSelectOption>
              <MDBSelectOption>Option nr 5</MDBSelectOption>
            </MDBSelectOptions>
          </MDBSelect>
          <label>Example label</label>
        </MDBContainer>
      </Router>
    );
  }
}

export default SearchPagePro;
