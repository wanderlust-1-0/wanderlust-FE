import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBFormInline, MDBBtn, MDBView, MDBContainer } from "mdbreact";

class MinimalisticIntro extends React.Component {
	state = {
		collapsed: false
	};

	handleTogglerClick = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		const navStyle = { marginTop: "4rem" };
		const overlay = (
			<div
				id="sidenav-overlay"
				style={{ backgroundColor: "transparent" }}
				onClick={this.handleTogglerClick}
			/>
		);
		return (
			<>
				<Router>
					<div>
						<MDBNavbar
							color="primary-color"
							style={navStyle}
							dark
							expand="md"
							fixed="top"
							scrolling
							transparent
						>
							<MDBContainer>
								<MDBNavbarBrand>
									<strong className="white-text">MDB</strong>
								</MDBNavbarBrand>
								<MDBNavbarToggler onClick={this.handleTogglerClick} />
								<MDBCollapse isOpen={this.state.collapsed} navbar>
									<MDBNavbarNav left>
										<MDBNavItem active>
											<MDBNavLink to="#!">Home</MDBNavLink>
										</MDBNavItem>
										<MDBNavItem>
											<MDBNavLink to="#!">Link</MDBNavLink>
										</MDBNavItem>
										<MDBNavItem>
											<MDBNavLink to="#!">Profile</MDBNavLink>
										</MDBNavItem>
									</MDBNavbarNav>
									<MDBNavbarNav right>
										<MDBNavItem>
											<MDBFormInline waves>
												<div className="md-form my-0">
													<input
														className="form-control mr-sm-2"
														type="text"
														placeholder="Search"
														aria-label="Search"
													/>
												</div>
											</MDBFormInline>
										</MDBNavItem>
									</MDBNavbarNav>
								</MDBCollapse>
							</MDBContainer>
						</MDBNavbar>
						{this.state.collapsed && overlay}
					</div>
				</Router>
				<MDBView src={`https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg`}>
					<MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
						<MDBContainer>
							<MDBRow>
								<MDBCol md="12" className="mb-4 white-text text-center">
									<h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">Minimalist intro</h1>
									<hr className="hr-light my-4" />
									<h5 className="text-uppercase mb-4 white-text "><strong>Photography & design</strong></h5>
									<MDBBtn outline color="white">portfolio</MDBBtn>
									<MDBBtn outline color="white">About me</MDBBtn>
								</MDBCol>
							</MDBRow>
						</MDBContainer>
					</MDBMask>
				</MDBView>
			</>
		);
	}
}

export default MinimalisticIntro;