import React, { Component } from "react";
import { MDBContainer, MDBNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import DocsLink from "../../components/docsLink";

class NavsPage extends Component {

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Tabs"
          href="https://mdbootstrap.com/docs/react/navigation/navs/"
        />

        <h2 className="mt-5">Basic MDB Navs with Tabs & Pills</h2>
        <MDBContainer className="mt-4">
          <MDBNav tabs color="indigo">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 1</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 2</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 3</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <MDBContainer className="mt-4">
          <MDBNav pills color="unique">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 1</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 2</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 3</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <h2 className="mt-5">Justified Navs with Tabs & Pills</h2>
        <MDBContainer className="mt-4">
          <MDBNav tabs color="purple" className="nav-justified">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 1</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 2</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 3</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <MDBContainer className="mt-4">
          <MDBNav pills className="nav-justified">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 1</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 2</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 3</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <h2 className="mt-5">Navs with Tabs & Pills with dropdown</h2>

        <MDBContainer className="mt-4">
          <MDBNav tabs color="secondary">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret color="secondary">
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu color="secondary">
                  <MDBDropdownItem>Action</MDBDropdownItem>
                  <MDBDropdownItem>Another Action</MDBDropdownItem>
                  <MDBDropdownItem>Something else here</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem>Separated link</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <MDBContainer className="mt-4">
          <MDBNav pills color="dark">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret color="dark">
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu color="dark">
                  <MDBDropdownItem>Action</MDBDropdownItem>
                  <MDBDropdownItem>Another Action</MDBDropdownItem>
                  <MDBDropdownItem>Something else here</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem>Separated link</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

      </MDBContainer>
    );
  }
}

export default NavsPage;

