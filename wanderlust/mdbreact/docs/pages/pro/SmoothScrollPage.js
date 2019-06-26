import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBSmoothScroll, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBRow, MDBIcon
} from "mdbreact";
import DocsLink from "./../../components/docsLink";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const outerContainerStyle = { height: "800px" };
    return (
      <MDBContainer>
        <DocsLink title="SmoothScroll" href="https://mdbootstrap.com/docs/react/advanced/scroll" />

        <MDBSmoothScroll size="lg" fixed floating gradient="blue" to="top-navbar" smooth><MDBIcon icon="angle-up"></MDBIcon></MDBSmoothScroll>        
     
        <MDBNavbar color="indigo" dark expand="md" id="top-navbar">
          <MDBNavbarBrand>
            <strong className="white-text">Navbar</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBSmoothScroll to="section1" smooth>Section 1</MDBSmoothScroll>
              </MDBNavItem>
              <MDBNavItem>
                <MDBSmoothScroll to="section2" smooth>Section 2</MDBSmoothScroll>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <MDBRow id="section1" style={outerContainerStyle} className="my-5">
          <h2>Section 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci erat, suscipit nec risus nec, ultrices pretium tortor. In imperdiet sem a lacus eleifend tempus. Donec est dui, finibus ac mattis eu, interdum eu nulla. Nulla pellentesque mi at mattis hendrerit. Etiam tempus, purus nec placerat ullamcorper, risus urna vestibulum erat, ut vestibulum libero ligula eu lorem. Cras nec mauris vel velit volutpat semper id quis nisl. Nunc ac interdum nisi. Fusce pharetra interdum urna vel ultricies. Nunc porttitor nisl eu odio vehicula, quis aliquam urna accumsan.
        </p>
          <p>
            Quisque aliquet risus eget consequat euismod. Nulla elementum nunc volutpat tellus mattis gravida. In hac habitasse platea dictumst. Pellentesque cursus ullamcorper nisl nec gravida. Curabitur vitae tortor pretium, rhoncus nulla viverra, molestie nulla. Nullam ullamcorper orci eget ante varius, ut cursus ipsum aliquet. Suspendisse quis nisl quis nunc auctor fermentum ac at lorem. Ut eu vestibulum ipsum. Nam tristique feugiat ex, vitae commodo odio aliquam quis. Nullam mollis maximus tellus ultricies interdum. Donec fermentum quis ligula a auctor. In sit amet ultrices massa, et sagittis dui.
        </p>
          <p>
            Duis tempus tellus felis, et maximus metus pulvinar sit amet. Pellentesque risus sem, aliquam molestie diam quis, congue maximus elit. Curabitur tristique auctor augue ultrices blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sed ornare augue. Donec pulvinar non enim nec commodo. Aliquam viverra nisi quis nisi cursus tempus.
        </p>
          <p>
            Fusce pellentesque tellus id enim sagittis, nec euismod sem malesuada. Nunc in rutrum nisi. Sed vehicula eros nisl, ac accumsan tortor dictum nec. Praesent sed vestibulum est, eget rhoncus nisi. Suspendisse id tincidunt nisi, sed finibus risus. Aliquam aliquam condimentum sem, et scelerisque leo porttitor sed. Nam ut est vel sapien dignissim bibendum vitae vel justo. Quisque consequat porta tempor. Phasellus nec justo sit amet felis placerat aliquam sit amet ac mauris. Sed rutrum tellus nec nunc mollis, id mattis velit lobortis.
        </p>
          <p>
            Etiam dictum eu diam malesuada semper. Curabitur sed facilisis eros. Sed ac eros leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sit amet ipsum odio. Donec maximus nunc id nulla iaculis, quis fermentum ligula sagittis. Aenean faucibus finibus diam, sit amet ultrices elit suscipit id. Vestibulum bibendum eu erat quis facilisis. Nunc finibus vehicula augue, eu fringilla lectus laoreet sit amet. Morbi massa diam, elementum non vulputate nec, ultrices et ex.
        </p>
        </MDBRow>

        <MDBRow id="section2" style={outerContainerStyle} className="my-5">
          <h2>Section 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci erat, suscipit nec risus nec, ultrices pretium tortor. In imperdiet sem a lacus eleifend tempus. Donec est dui, finibus ac mattis eu, interdum eu nulla. Nulla pellentesque mi at mattis hendrerit. Etiam tempus, purus nec placerat ullamcorper, risus urna vestibulum erat, ut vestibulum libero ligula eu lorem. Cras nec mauris vel velit volutpat semper id quis nisl. Nunc ac interdum nisi. Fusce pharetra interdum urna vel ultricies. Nunc porttitor nisl eu odio vehicula, quis aliquam urna accumsan.
        </p>
          <p>
            Quisque aliquet risus eget consequat euismod. Nulla elementum nunc volutpat tellus mattis gravida. In hac habitasse platea dictumst. Pellentesque cursus ullamcorper nisl nec gravida. Curabitur vitae tortor pretium, rhoncus nulla viverra, molestie nulla. Nullam ullamcorper orci eget ante varius, ut cursus ipsum aliquet. Suspendisse quis nisl quis nunc auctor fermentum ac at lorem. Ut eu vestibulum ipsum. Nam tristique feugiat ex, vitae commodo odio aliquam quis. Nullam mollis maximus tellus ultricies interdum. Donec fermentum quis ligula a auctor. In sit amet ultrices massa, et sagittis dui.
        </p>
          <p>
            Duis tempus tellus felis, et maximus metus pulvinar sit amet. Pellentesque risus sem, aliquam molestie diam quis, congue maximus elit. Curabitur tristique auctor augue ultrices blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sed ornare augue. Donec pulvinar non enim nec commodo. Aliquam viverra nisi quis nisi cursus tempus.
        </p>
          <p>
            Fusce pellentesque tellus id enim sagittis, nec euismod sem malesuada. Nunc in rutrum nisi. Sed vehicula eros nisl, ac accumsan tortor dictum nec. Praesent sed vestibulum est, eget rhoncus nisi. Suspendisse id tincidunt nisi, sed finibus risus. Aliquam aliquam condimentum sem, et scelerisque leo porttitor sed. Nam ut est vel sapien dignissim bibendum vitae vel justo. Quisque consequat porta tempor. Phasellus nec justo sit amet felis placerat aliquam sit amet ac mauris. Sed rutrum tellus nec nunc mollis, id mattis velit lobortis.
        </p>
          <p>
            Etiam dictum eu diam malesuada semper. Curabitur sed facilisis eros. Sed ac eros leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sit amet ipsum odio. Donec maximus nunc id nulla iaculis, quis fermentum ligula sagittis. Aenean faucibus finibus diam, sit amet ultrices elit suscipit id. Vestibulum bibendum eu erat quis facilisis. Nunc finibus vehicula augue, eu fringilla lectus laoreet sit amet. Morbi massa diam, elementum non vulputate nec, ultrices et ex.
        </p>
        </MDBRow>
    
      </MDBContainer>
    );
  }
}

export default NavbarPage;