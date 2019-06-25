import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import DocsLink from "../../components/docsLink";

class PillsPage extends Component {
  state = {
    modal1: false,

    items: {
      default: "1",
      justified: "1",
      dropdown: "1",
      vertical: "1",
      gradient: "1",
      rounded: "1",
      rounded2: "1",
      roundedGradient: "1",
      roundedGradient2: "1",
      roundedOutline: "1",
      roundedOutline2: "1",
      icons: "1",
      iconsRight: "1",
      content: "1",
      contentCard: "1",
      animation: "1",
      animationRO: "1",
      animationR: "1",
      modal: "1",
      outer: "1",
      inner: "1"
    }
  };

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  componentDidMount() {
    this.Styles();
  }
  Styles = () => {
    let style = document.createElement("style");
    style.innerHTML = `
      /* Remove outline (border if you click button) */
      a,
      li,
      a::-moz-focus-inner,
      li::-moz-focus-inner,
      a:focus,
      li:focus,
      select:-moz-focusring,
      button::-moz-focus-inner {
        outline: none !important;
      }

      /* Gradient buttons */
      .pills-peach-gradient .nav-item .nav-link.active {
        background: linear-gradient(40deg, #ffd86f, #fc6262);
      }
      .pills-blue-gradient .nav-item .nav-link.active {
        background: linear-gradient(40deg, #45cafc, #303f9f);
      }
      .pills-purple-gradient .nav-item .nav-link.active {
        background: linear-gradient(40deg, #ff6ec4, #7873f5);
      }
      .pills-aqua-gradient .nav-item .nav-link.active {
        background: linear-gradient(40deg, #2096ff, #05ffa3);
      }

      /* Rounded buttons and outline*/
      .pills-rounded .nav-item .nav-link {
        border-radius: 10em;
      }
      .pills-light-purple .nav-item .nav-link.active {
        background-color: #ba68c8;
      }

      .pills-outline-red .nav-item .nav-link {
        border: 2px solid transparent;
        color: #666;
        background-color: transparent;
      }
      .pills-outline-red .nav-item .nav-link:hover {
        border: 2px solid #fff;
      }
      .pills-outline-red .nav-item .nav-link.active {
        border: 2px solid #f44336;
        color: #f44336;
      }
      .pills-outline-red .nav-item .nav-link.active:hover {
        border: 2px solid #f44336;
        color: #f44336;
      }

      .pills-outline-green .nav-item .nav-link {
        border: 2px solid transparent;
        color: #666;
        background-color: transparent;
      }
      .pills-outline-green .nav-item .nav-link:hover {
        border: 2px solid #fff;
      }
      .pills-outline-green .nav-item .nav-link.active {
        border: 2px solid #4caf50;
        color: #4caf50;
      }
      .pills-outline-green .nav-item .nav-link.active:hover {
        border: 2px solid #4caf50;
        color: #4caf50;
      }


      /* Colors animations */

      .pills-blue-teal .nav-item .nav-link.active {
        background-color: #4fc3f7;
        -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
        animation-name: example;
        animation-duration: 4s;
        }
        /* Safari 4.0 - 8.0 */
        @-webkit-keyframes example {
        from {background-color: #4fc3f7;}
        to {background-color: #009688;}
        }
        
        /* Standard syntax */
        @keyframes example {
        from {background-color: #4fc3f7;}
        to {background-color: #009688;}
        }
        
        .pills-outline-purple-anm .nav-item .nav-link.active {
        border: 2px solid #9c27b0;
        color: #9c27b0;
        background-color: transparent;
        -webkit-animation-name: outline; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
        animation-name: outline;
        animation-duration: 4s;
        }
        /* Safari 4.0 - 8.0 */
        @-webkit-keyframes outline {
        from {border: 2px solid #9c27b0; color: #9c27b0;}
        to {border: 2px solid #f48fb1; color: #f48fb1;}
        }
        
        /* Standard syntax */
        @keyframes outline {
        from {border: 2px solid #9c27b0; color: #9c27b0;}
        to {border: 2px solid #f48fb1; color: #f48fb1;}
        }
        
        .pills-orange-anm .nav-item .nav-link.active {
        background-color: #ffa000 ;
        -webkit-animation-name: orange; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
        animation-name: orange;
        animation-duration: 4s;
        }
        /* Safari 4.0 - 8.0 */
        @-webkit-keyframes orange {
        from {background-color: #ffa000 ;}
        to {background-color: #f44336;}
        }
        
        /* Standard syntax */
        @keyframes orange {
        from {background-color: #ffa000 ;}
        to {background-color: #f44336;}
        }
      `;
    let firstScriptTag = document.querySelector("script");
    firstScriptTag.parentNode.insertBefore(style, firstScriptTag);
  };
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Pills"
          href="https://mdbootstrap.com/docs/react/components/pills/"
        />
        <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol md="12">
              <h2 className="mt-5">Pills</h2>
              <MDBNav pills color="secondary">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["default"] === "1"}
                    onClick={this.togglePills("default", "1")}
                  >
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["default"] === "2"}
                    onClick={this.togglePills("default", "2")}
                  >
                    Link
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["default"] === "3"}
                    onClick={this.togglePills("default", "3")}
                  >
                    Link
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["default"] === "4"}
                    onClick={this.togglePills("default", "4")}
                  >
                    Help
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.items["default"]}>
                <MDBTabPane tabId="1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
              </MDBTabContent>

              <h2 className="mt-5">Pills justified</h2>
              <MDBNav pills color="pink" className="nav-justified">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["justified"] === "1"}
                    onClick={this.togglePills("justified", "1")}
                  >
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["justified"] === "2"}
                    onClick={this.togglePills("justified", "2")}
                  >
                    Link
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["justified"] === "3"}
                    onClick={this.togglePills("justified", "3")}
                  >
                    Link
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["justified"] === "4"}
                    onClick={this.togglePills("justified", "4")}
                  >
                    Help
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>

              <h2 className="mt-5">Pills with dropdown</h2>
              <MDBNav pills color="success" className="nav-justified ">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["dropdown"] === "1"}
                    onClick={this.togglePills("dropdown", "1")}
                  >
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret color="success">
                      Dropdown
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="success">
                      <MDBDropdownItem>Action</MDBDropdownItem>
                      <MDBDropdownItem>Another Action</MDBDropdownItem>
                      <MDBDropdownItem>Something else here</MDBDropdownItem>
                      <MDBDropdownItem divider />
                      <MDBDropdownItem>Separated link</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["dropdown"] === "2"}
                    onClick={this.togglePills("dropdown", "2")}
                  >
                    Link 1
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["dropdown"] === "3"}
                    onClick={this.togglePills("dropdown", "3")}
                  >
                    Link 2
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>

              <h2 className="mt-5">Vertical Pills</h2>
              <MDBRow>
                <MDBCol md="3">
                  <MDBNav pills color="primary" className="flex-column">
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["vertical"] === "1"}
                        onClick={this.togglePills("vertical", "1")}
                      >
                        Downloads <MDBIcon icon="download" className="ml-2" />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["vertical"] === "2"}
                        onClick={this.togglePills("vertical", "2")}
                      >
                        Orders & invoices
                        <MDBIcon icon="file-alt" className="ml-2" />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["vertical"] === "3"}
                        onClick={this.togglePills("vertical", "3")}
                      >
                        Billing Details
                        <MDBIcon icon="address-card" className="ml-2" />
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                </MDBCol>
                <MDBCol md="9">
                  <MDBTabContent activeItem={this.state.items["vertical"]}>
                    <MDBTabPane tabId="1">
                      <MDBCardBody>
                        <MDBCardTitle>Downloads</MDBCardTitle>
                        <MDBCardText>Completely legal</MDBCardText>
                      </MDBCardBody>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <MDBCardBody>
                        <MDBCardTitle>Orders & Invoices</MDBCardTitle>
                        <MDBCardText>
                          "Hello? Is it me you're looking for?"
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <MDBCardBody>
                        <MDBCardTitle>Billing Details</MDBCardTitle>
                        <MDBCardText>
                          Time to pay{" "}
                          <MDBBtn className="ml-3" color="primary">
                            pay
                          </MDBBtn>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
              </MDBRow>

              <h2 className="mt-5">Pills with gradient</h2>
              <MDBNav pills className="nav-justified pills-peach-gradient">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["gradient"] === "1"}
                    onClick={this.togglePills("gradient", "1")}
                  >
                    Blogger
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["gradient"] === "2"}
                    onClick={this.togglePills("gradient", "2")}
                  >
                    Designer
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["gradient"] === "3"}
                    onClick={this.togglePills("gradient", "3")}
                  >
                    Photographer
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["gradient"] === "4"}
                    onClick={this.togglePills("gradient", "4")}
                  >
                    Model
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>

              <h2 className="mt-5">Rounded pills</h2>
              <MDBRow>
                <MDBNav
                  pills
                  color="deep-purple"
                  className="nav-justified col-md-6 pills-rounded"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["rounded"] === "1"}
                      onClick={this.togglePills("rounded", "1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["rounded"] === "2"}
                      onClick={this.togglePills("rounded", "2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["rounded"] === "3"}
                      onClick={this.togglePills("rounded", "3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["rounded"] === "4"}
                      onClick={this.togglePills("rounded", "4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>

                <MDBNav
                  pills
                  color="light-purple"
                  className="nav-justified col-md-6 pills-rounded"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["rounded2"] === "1"}
                      onClick={this.togglePills("rounded2", "1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["rounded2"] === "2"}
                      onClick={this.togglePills("rounded2", "2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["rounded2"] === "3"}
                      onClick={this.togglePills("rounded2", "3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["rounded2"] === "4"}
                      onClick={this.togglePills("rounded2", "4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>

                <MDBNav
                  pills
                  className="nav-justified col-md-6 pills-peach-gradient pills-rounded"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedGradient"] === "1"}
                      onClick={this.togglePills("roundedGradient", "1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedGradient"] === "2"}
                      onClick={this.togglePills("roundedGradient", "2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedGradient"] === "3"}
                      onClick={this.togglePills("roundedGradient", "3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedGradient"] === "4"}
                      onClick={this.togglePills("roundedGradient", "4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>

                <MDBNav
                  pills
                  className="nav-justified col-md-6 pills-rounded pills-green-gradient"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedGradient2"] === "1"}
                      onClick={this.togglePills("roundedGradient2", "1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedGradient2"] === "2"}
                      onClick={this.togglePills("roundedGradient2", "2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedGradient2"] === "3"}
                      onClick={this.togglePills("roundedGradient2", "3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedGradient2"] === "4"}
                      onClick={this.togglePills("roundedGradient2", "4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>

                <MDBNav
                  pills
                  className="nav-justified col-md-6 pills-rounded pills-outline-red"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedOutline"] === "1"}
                      onClick={this.togglePills("roundedOutline", "1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedOutline"] === "2"}
                      onClick={this.togglePills("roundedOutline", "2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedOutline"] === "3"}
                      onClick={this.togglePills("roundedOutline", "3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedOutline"] === "4"}
                      onClick={this.togglePills("roundedOutline", "4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>

                <MDBNav
                  pills
                  className="nav-justified col-md-6 pills-rounded pills-outline-green"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedOutline2"] === "1"}
                      onClick={this.togglePills("roundedOutline2", "1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedOutline2"] === "2"}
                      onClick={this.togglePills("roundedOutline2", "2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedOutline2"] === "3"}
                      onClick={this.togglePills("roundedOutline2", "3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.items["roundedOutline2"] === "4"}
                      onClick={this.togglePills("roundedOutline2", "4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </MDBRow>

              <h2 className="mt-5">Pills with icons</h2>
              <MDBNav pills color="info" className="nav-justified ">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["icons"] === "1"}
                    onClick={this.togglePills("icons", "1")}
                  >
                    <MDBIcon fab icon="android" /> USA
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["icons"] === "2"}
                    onClick={this.togglePills("icons", "2")}
                  >
                    <MDBIcon icon="leaf" /> Mexico
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["icons"] === "3"}
                    onClick={this.togglePills("icons", "3")}
                  >
                    <MDBIcon icon="heart" /> Poland
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["icons"] === "4"}
                    onClick={this.togglePills("icons", "4")}
                  >
                    <MDBIcon icon="futbol" /> Brazil
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBNav
                pills
                className="nav-justified pills-rounded pills-outline-red"
              >
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["iconsRight"] === "1"}
                    onClick={this.togglePills("iconsRight", "1")}
                  >
                    San Francisco <MDBIcon far icon="grin" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["iconsRight"] === "2"}
                    onClick={this.togglePills("iconsRight", "2")}
                  >
                    Tijuana <MDBIcon icon="users" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["iconsRight"] === "3"}
                    onClick={this.togglePills("iconsRight", "3")}
                  >
                    Cracow <MDBIcon icon="thumbs-up" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["iconsRight"] === "4"}
                    onClick={this.togglePills("iconsRight", "4")}
                  >
                    Rio de Janeiro <MDBIcon icon="coffee" />
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>

              <h2 className="mt-5">Pills with content </h2>
              <MDBRow>
                <MDBCol md="6">
                  <MDBNav
                    pills
                    className="nav-justified pills-rounded pills-purple-gradient"
                  >
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["content"] === "1"}
                        onClick={this.togglePills("content", "1")}
                      >
                        Fashion
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["content"] === "2"}
                        onClick={this.togglePills("content", "2")}
                      >
                        Lifestyle
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["content"] === "3"}
                        onClick={this.togglePills("content", "3")}
                      >
                        Beauty
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["content"] === "4"}
                        onClick={this.togglePills("content", "4")}
                      >
                        Shop
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBTabContent activeItem={this.state.items["content"]}>
                    <MDBTabPane tabId="1">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
                <MDBCol md="6">
                  <MDBNav pills color="warning" className="nav-justified mb-4">
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["contentCard"] === "1"}
                        onClick={this.togglePills("contentCard", "1")}
                      >
                        Fashion
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["contentCard"] === "2"}
                        onClick={this.togglePills("contentCard", "2")}
                      >
                        Lifestyle
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["contentCard"] === "3"}
                        onClick={this.togglePills("contentCard", "3")}
                      >
                        Beauty
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBTabContent
                    className={"card"}
                    activeItem={this.state.items["contentCard"]}
                  >
                    <MDBTabPane tabId="1">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
              </MDBRow>

              <h2 className="mt-5">Colors animations</h2>
              <MDBRow>
                <MDBCol xl="8" md="10">
                  <MDBNav pills color="blue-teal" className="nav-justified">
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animation"] === "1"}
                        onClick={this.togglePills("animation", "1")}
                      >
                        Fashion
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animation"] === "2"}
                        onClick={this.togglePills("animation", "2")}
                      >
                        Lifestyle
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animation"] === "3"}
                        onClick={this.togglePills("animation", "3")}
                      >
                        Beauty
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animation"] === "4"}
                        onClick={this.togglePills("animation", "4")}
                      >
                        Shop
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBNav
                    pills
                    className="nav-justified pills-rounded pills-outline-purple-anm"
                  >
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animationRO"] === "1"}
                        onClick={this.togglePills("animationRO", "1")}
                      >
                        Madrid
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animationRO"] === "2"}
                        onClick={this.togglePills("animationRO", "2")}
                      >
                        Bari
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animationRO"] === "3"}
                        onClick={this.togglePills("animationRO", "3")}
                      >
                        Warsaw
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animationRO"] === "4"}
                        onClick={this.togglePills("animationRO", "4")}
                      >
                        Paris
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBNav
                    pills
                    className="nav-justified pills-rounded pills-orange-anm"
                  >
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animationR"] === "1"}
                        onClick={this.togglePills("animationR", "1")}
                      >
                        Features
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animationR"] === "2"}
                        onClick={this.togglePills("animationR", "2")}
                      >
                        Pricing
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animationR"] === "3"}
                        onClick={this.togglePills("animationR", "3")}
                      >
                        Gadgets
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["animationR"] === "4"}
                        onClick={this.togglePills("animationR", "4")}
                      >
                        Technology
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBTabContent activeItem={this.state.items["animationR"]}>
                    <MDBTabPane tabId="1">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
              </MDBRow>

              <h2 className="mt-5">Pills within modal</h2>
              <MDBBtn rounded onClick={this.toggle(1)}>
                Launch Modal LogIn/Register
                <MDBIcon icon="eye" className="ml-1" />
              </MDBBtn>
              <MDBModal
                isOpen={this.state.modal1}
                toggle={this.toggle(1)}
                centered
              >
                <MDBModalBody>
                  <MDBNav pills color="primary" className="nav-justified pt-2">
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["modal"] === "1"}
                        onClick={this.togglePills("modal", "1")}
                      >
                        <MDBIcon icon="user" className="mr-1" /> Login
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        active={this.state.items["modal"] === "2"}
                        onClick={this.togglePills("modal", "2")}
                      >
                        <MDBIcon icon="user-plus" className="mr-1" /> Register
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBTabContent activeItem={this.state.items["modal"]}>
                    <MDBTabPane tabId="1">
                      <form className=" mx-3 grey-text">
                        <MDBInput
                          label="Your email"
                          icon="envelope"
                          group
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          label="Your password"
                          icon="lock"
                          group
                          type="password"
                          validate
                        />
                        <MDBCol size="12" className="text-center">
                          <MDBBtn color="primary">
                            LOG IN
                            <MDBIcon icon="sign-in-alt" className="ml-1" />
                          </MDBBtn>
                        </MDBCol>
                      </form>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <form className="mx-3 grey-text">
                        <MDBInput
                          label="Your name"
                          icon="user"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          label="Your email"
                          icon="envelope"
                          group
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          label="Your password"
                          icon="lock"
                          group
                          type="password"
                          validate
                        />
                        <MDBCol size="12" className="text-center">
                          <MDBBtn color="primary">
                            SIGN IN
                            <MDBIcon icon="sign-in-alt" className="ml-1" />
                          </MDBBtn>
                        </MDBCol>
                      </form>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBModalBody>
                <MDBModalFooter className="justify-content-center">
                  <MDBRow className="w-100 justify-content-start">
                    <MDBCol size="8">
                      <div id="options" className="text-right float-left">
                        <MDBTabContent
                          className="pt-1 px-0 pb-0"
                          activeItem={this.state.items["modal"]}
                        >
                          <MDBTabPane tabId="1">
                            <p className="font-small">
                              Not a member?
                              <a
                                href="https://mdbootstrap.com"
                                className="blue-text ml-1"
                                onClick={this.togglePills("modal", "2")}
                              >
                                Sign Up
                              </a>
                            </p>
                            <p className="font-small">
                              Forgot{" "}
                              <a
                                href="https://mdbootstrap.com"
                                className="blue-text ml-1"
                              >
                                password?
                              </a>
                            </p>
                          </MDBTabPane>
                          <MDBTabPane tabId="2">
                            <p className="font-small">
                              Already have an account?
                              <a
                                href="https://mdbootstrap.com"
                                className="blue-text ml-1"
                                onClick={this.togglePills("modal", "2")}
                              >
                                LogIn
                              </a>
                            </p>
                            <p className="font-small">
                              Forgot{" "}
                              <a
                                href="https://mdbootstrap.com"
                                className="blue-text ml-1"
                              >
                                password?
                              </a>
                            </p>
                          </MDBTabPane>
                        </MDBTabContent>
                      </div>
                    </MDBCol>
                    <MDBCol size="4" className="float-right">
                      <MDBBtn outline color="primary" onClick={this.toggle(1)}>
                        CLOSE
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBModalFooter>
              </MDBModal>

              <h2 className="mt-5">Pills within the tabs</h2>
              <MDBNav tabs className="nav-justified" color="indigo">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    role="tab"
                    active={this.state.items["outer"] === "1"}
                    onClick={this.togglePills("outer", "1")}
                  >
                    <MDBIcon icon="user" /> Profile
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    role="tab"
                    active={this.state.items["outer"] === "2"}
                    onClick={this.togglePills("outer", "2")}
                  >
                    <MDBIcon icon="heart" /> Follow
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent
                className="card mb-5"
                activeItem={this.state.items["outer"]}
              >
                <MDBTabPane tabId="1" role="tabpanel">
                  <MDBRow>
                    <MDBCol md="3">
                      <MDBNav pills color="primary" className="flex-column">
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            active={this.state.items["inner"] === "1"}
                            onClick={this.togglePills("inner", "1")}
                          >
                            Downloads{" "}
                            <MDBIcon icon="download" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            active={this.state.items["inner"] === "2"}
                            onClick={this.togglePills("inner", "2")}
                          >
                            Orders & invoices
                            <MDBIcon icon="file-alt" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            active={this.state.items["inner"] === "3"}
                            onClick={this.togglePills("inner", "3")}
                          >
                            Billing Details
                            <MDBIcon icon="address-card" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                      </MDBNav>
                    </MDBCol>
                    <MDBCol md="9">
                      <MDBTabContent activeItem={this.state.items["inner"]}>
                        <MDBTabPane tabId="1">
                          <MDBCardBody>
                            <MDBCardTitle>Downloads</MDBCardTitle>
                            <MDBCardText>Completely legal</MDBCardText>
                          </MDBCardBody>
                        </MDBTabPane>
                        <MDBTabPane tabId="2">
                          <MDBCardBody>
                            <MDBCardTitle>Orders & Invoices</MDBCardTitle>
                            <MDBCardText>
                              "Hello? Is it me you're looking for?"
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBTabPane>
                        <MDBTabPane tabId="3">
                          <MDBCardBody>
                            <MDBCardTitle>Billing Details</MDBCardTitle>
                            <MDBCardText>
                              Time to pay{" "}
                              <MDBBtn className="ml-3" color="secondary">
                                pay
                              </MDBBtn>
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBTabPane>
                      </MDBTabContent>
                    </MDBCol>
                  </MDBRow>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBCardBody>
                        <MDBCardTitle>Special Title Treatment</MDBCardTitle>
                        <MDBCardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </MDBCardText>
                        <MDBBtn>Go somewhere</MDBBtn>
                      </MDBCardBody>
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBCardBody>
                        <MDBCardTitle>Special Title Treatment</MDBCardTitle>
                        <MDBCardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </MDBCardText>
                        <MDBBtn>Go somewhere</MDBBtn>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBTabPane>
              </MDBTabContent>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default PillsPage;