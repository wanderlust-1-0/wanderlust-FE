import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
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
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from "mdbreact";
import DocsLink from "../../components/docsLink";

class TabsPage extends Component {
  state = {
    activeItem: "1",
    activeItem2: "1",
    activeItemJustified: "1",
    activeItemClassicTabs1: "1",
    activeItemClassicTabs2: "1",
    activeItemClassicTabs3: "1",
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1"
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  toggle2 = tab => e => {
    if (this.state.activeItem2 !== tab) {
      this.setState({
        activeItem2: tab
      });
    }
  };

  toggleJustified = tab => e => {
    if (this.state.activeItemJustified !== tab) {
      this.setState({
        activeItemJustified: tab
      });
    }
  };

  toggleClassicTabs1 = tab => e => {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  };

  toggleClassicTabs2 = tab => e => {
    if (this.state.activeItemClassicTabs2 !== tab) {
      this.setState({
        activeItemClassicTabs2: tab
      });
    }
  };

  toggleClassicTabs3 = tab => e => {
    if (this.state.activeItemClassicTabs3 !== tab) {
      this.setState({
        activeItemClassicTabs3: tab
      });
    }
  };

  toggleOuterTabs = tab => e => {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  };

  toggleInnerPills = tab => e => {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Tabs"
          href="https://mdbootstrap.com/docs/react/components/tabs/"
        />
        <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol md="12">
              <h2>Basic</h2>
              <MDBNav tabs>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.activeItem === "1"}
                    onClick={this.toggle("1")}
                    role="tab"
                  >
                    <MDBIcon icon="user" /> Profile
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.activeItem === "2"}
                    onClick={this.toggle("2")}
                    role="tab"
                  >
                    <MDBIcon icon="heart" /> Follow
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.activeItem === "3"}
                    onClick={this.toggle("3")}
                    role="tab"
                  >
                    <MDBIcon icon="envelope" /> Contact
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent
                className="card"
                activeItem={this.state.activeItem}
              >
                <MDBTabPane tabId="1" role="tabpanel">
                  <p className="mt-2">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth. Cosby sweater eu banh mi, qui irure terry richardson
                    ex squid. Aliquip placeat salvia cillum iphone. Seitan
                    aliquip quis cardigan american apparel, butcher voluptate
                    nisi qui.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <p className="mt-2">
                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                    single-origin coffee squid. Exercitation +1 labore velit,
                    blog sartorial PBR leggings next level wes anderson artisan
                    four loko farm-to-table craft beer twee. Qui photo booth
                    letterpress, commodo enim craft beer mlkshk aliquip jean
                    shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
                    assumenda labore aesthetic magna delectus mollit. Keytar
                    helvetica VHS salvia yr, vero magna velit sapiente labore
                    stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                    sustainable jean shorts beard ut DIY ethical culpa terry
                    richardson biodiesel. Art party scenester stumptown, tumblr
                    butcher vero sint qui sapiente accusamus tattooed echo park.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                  <p className="mt-2">
                    Etsy mixtape wayfarers, ethical wes anderson tofu before
                    they sold out mcsweeney's organic lomo retro fanny pack
                    lo-fi farm-to-table readymade. Messenger bag gentrify
                    pitchfork tattooed craft beer, iphone skateboard locavore
                    carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                    banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
                    Williamsburg banh mi whatever gluten-free, carles pitchfork
                    biodiesel fixie etsy retro mlkshk vice blog. Scenester cred
                    you probably haven't heard of them, vinyl craft beer blog
                    stumptown. Pitchfork sustainable tofu synth chambray yr.
                  </p>
                </MDBTabPane>
              </MDBTabContent>

              <h2 className="mt-5">With dropdown</h2>

              <MDBNav tabs>
                <MDBNavItem>
                  <MDBNavLink active to="#!">
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret color="default">
                      Dropdown
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="default">
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
                <MDBNavItem className="disabled">
                  <MDBNavLink to="#!">Disabled</MDBNavLink>
                </MDBNavItem>
              </MDBNav>

              <h2 className="mt-5">Tabs justified</h2>
              <MDBNav tabs className="nav-justified" color="indigo">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.activeItemJustified === "1"}
                    onClick={this.toggleJustified("1")}
                    role="tab"
                  >
                    <MDBIcon icon="user" /> Profile
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.activeItemJustified === "2"}
                    onClick={this.toggleJustified("2")}
                    role="tab"
                  >
                    <MDBIcon icon="heart" /> Follow
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.activeItemJustified === "3"}
                    onClick={this.toggleJustified("3")}
                    role="tab"
                  >
                    <MDBIcon icon="envelope" /> Contact
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent
                className="card"
                activeItem={this.state.activeItemJustified}
              >
                <MDBTabPane tabId="1" role="tabpanel">
                  <p className="mt-2">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth. Cosby sweater eu banh mi, qui irure terry richardson
                    ex squid. Aliquip placeat salvia cillum iphone. Seitan
                    aliquip quis cardigan american apparel, butcher voluptate
                    nisi qui.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <p className="mt-2">
                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                    single-origin coffee squid. Exercitation +1 labore velit,
                    blog sartorial PBR leggings next level wes anderson artisan
                    four loko farm-to-table craft beer twee. Qui photo booth
                    letterpress, commodo enim craft beer mlkshk aliquip jean
                    shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
                    assumenda labore aesthetic magna delectus mollit. Keytar
                    helvetica VHS salvia yr, vero magna velit sapiente labore
                    stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                    sustainable jean shorts beard ut DIY ethical culpa terry
                    richardson biodiesel. Art party scenester stumptown, tumblr
                    butcher vero sint qui sapiente accusamus tattooed echo park.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                  <p className="mt-2">
                    Etsy mixtape wayfarers, ethical wes anderson tofu before
                    they sold out mcsweeney's organic lomo retro fanny pack
                    lo-fi farm-to-table readymade. Messenger bag gentrify
                    pitchfork tattooed craft beer, iphone skateboard locavore
                    carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                    banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
                    Williamsburg banh mi whatever gluten-free, carles pitchfork
                    biodiesel fixie etsy retro mlkshk vice blog. Scenester cred
                    you probably haven't heard of them, vinyl craft beer blog
                    stumptown. Pitchfork sustainable tofu synth chambray yr.
                  </p>
                </MDBTabPane>
              </MDBTabContent>

              <h2 className="mt-5">Classic tabs with shadow</h2>
              <div className="classic-tabs">
                <MDBNav classicTabs color="cyan">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs1 === "1"}
                      onClick={this.toggleClassicTabs1("1")}
                    >
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs1 === "2"}
                      onClick={this.toggleClassicTabs1("2")}
                    >
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs1 === "3"}
                      onClick={this.toggleClassicTabs1("3")}
                    >
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs1 === "4"}
                      onClick={this.toggleClassicTabs1("4")}
                    >
                      Be Awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent
                  className="card"
                  activeItem={this.state.activeItemClassicTabs1}
                >
                  <MDBTabPane tabId="1">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                      consequatur, vel illum qui dolorem eum fugiat quo voluptas
                      nulla pariatur?
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
              </div>

              <h2 className="mt-5">Classic tabs with border</h2>
              <div className="classic-tabs">
                <MDBNav classicTabs color="secondary">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs2 === "1"}
                      onClick={this.toggleClassicTabs2("1")}
                    >
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs2 === "2"}
                      onClick={this.toggleClassicTabs2("2")}
                    >
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs2 === "3"}
                      onClick={this.toggleClassicTabs2("3")}
                    >
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs2 === "4"}
                      onClick={this.toggleClassicTabs2("4")}
                    >
                      Be Awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent
                  className="border-right border-bottom border-left rounded-bottom bg-white"
                  activeItem={this.state.activeItemClassicTabs2}
                >
                  <MDBTabPane tabId="1">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                      consequatur, vel illum qui dolorem eum fugiat quo voluptas
                      nulla pariatur?
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
              </div>

              <h2 className="mt-5">Classic tabs with icons</h2>
              <div className="classic-tabs">
                <MDBNav classicTabs color="orange">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs3 === "1"}
                      onClick={this.toggleClassicTabs3("1")}
                    >
                      <MDBIcon icon="user" size="2x" />
                      <br />
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs3 === "2"}
                      onClick={this.toggleClassicTabs3("2")}
                    >
                      <MDBIcon icon="heart" size="2x" />
                      <br />
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs3 === "3"}
                      onClick={this.toggleClassicTabs3("3")}
                    >
                      <MDBIcon icon="envelope" size="2x" />
                      <br />
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItemClassicTabs3 === "4"}
                      onClick={this.toggleClassicTabs3("4")}
                    >
                      <MDBIcon icon="star" size="2x" />
                      <br />
                      Be Awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent
                  className="card mb-5"
                  activeItem={this.state.activeItemClassicTabs3}
                >
                  <MDBTabPane tabId="1">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                      consequatur, vel illum qui dolorem eum fugiat quo voluptas
                      nulla pariatur?
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
              </div>

              <h2 className="mt-5">Pills within the tabs</h2>
              <MDBNav tabs className="nav-justified" color="primary">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.activeItemOuterTabs === "1"}
                    onClick={this.toggleOuterTabs("1")}
                    role="tab"
                  >
                    <MDBIcon icon="user" /> Profile
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.activeItemOuterTabs === "2"}
                    onClick={this.toggleOuterTabs("2")}
                    role="tab"
                  >
                    <MDBIcon icon="heart" /> Follow
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent
                className="card mb-5"
                activeItem={this.state.activeItemOuterTabs}
              >
                <MDBTabPane tabId="1" role="tabpanel">
                  <MDBRow>
                    <MDBCol md="3">
                      <MDBNav pills color="primary" className="flex-column">
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            active={this.state.activeItemInnerPills === "1"}
                            onClick={this.toggleInnerPills("1")}
                          >
                            Downloads{" "}
                            <MDBIcon icon="download" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            active={this.state.activeItemInnerPills === "2"}
                            onClick={this.toggleInnerPills("2")}
                          >
                            Orders & invoices
                            <MDBIcon icon="file-alt" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            active={this.state.activeItemInnerPills === "3"}
                            onClick={this.toggleInnerPills("3")}
                          >
                            Billing Details
                            <MDBIcon icon="address-card" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                      </MDBNav>
                    </MDBCol>
                    <MDBCol md="9">
                      <MDBTabContent
                        activeItem={this.state.activeItemInnerPills}
                      >
                        <MDBTabPane tabId="1">
                          <h5>Panel 1</h5>
                        </MDBTabPane>
                        <MDBTabPane tabId="2">
                          <h5>Panel 2</h5>
                        </MDBTabPane>
                        <MDBTabPane tabId="3">
                          <h5>Panel 3</h5>
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

export default TabsPage;
