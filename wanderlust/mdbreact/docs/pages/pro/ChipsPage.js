import React, { Component } from "react";
import { MDBContainer, MDBChip, MDBCard, MDBChipsInput } from "mdbreact";
import DocsLink from "../../components/docsLink";

class ChipsPage extends Component {

  state = {
    // No avatars:
    show1: true,
    show2: true,
    show3: true,
    show4: true,
    show5: true,
    show6: true,

    show7: true,
    show8: true,
    show9: true,
    show10: true,
    show11: true,
    show12: true,

    // Named Chips:
    show13: true,
    show14: true,
    show15: true,
    show16: true,
    show17: true,

    // Dates Chips:
    show18: true,
    show19: true,
    show20: true,
    show21: true,

    // Gradient Chips:
    show22: true,
    show23: true,
    show24: true,
    show25: true
  }

  handleCloseHere = param => e => {
    this.setState({
      ["show" + param]: false
    });
  };

  render() {
    const chipsRowStyle1 = { display: "flex", alignItems: "center" };
    const chipsRowStyle2 = {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around"
    };
    const cardStyle = { maxWidth: "65%", padding: "1.25rem" };

    const {
      show1,
      show2,
      show3,
      show4,
      show5,
      show6,
      show7,
      show8,
      show9,
      show10,
      show11,
      show12,
      show13,
      show14,
      show15,
      show16,
      show17,
      show18,
      show19,
      show20,
      show21,
      show22,
      show23,
      show24,
      show25
    } = this.state;

    return (
      <MDBContainer>
        <DocsLink
          title="Chips"
          href="https://mdbootstrap.com/docs/react/components/badges/#chips-avatars"
        />
        <MDBContainer>
          <h2 className="my-3">Chips with avatars</h2>

          <MDBCard style={cardStyle}>
            <div style={chipsRowStyle1}>
              <MDBChip
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
                alt="Contact Person"
                waves
              >

                John Doe
              </MDBChip>
              <MDBChip
                size="md"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg"
                alt="Contact Person"
                waves
              >

                Anna Smith
              </MDBChip>
              <MDBChip
                size="lg"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                alt="Contact Person"
                waves
              >

                Lara Lim
              </MDBChip>
            </div>
            <div style={chipsRowStyle2}>
              <MDBChip
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                alt="Contact Person"
                bgColor="light-blue lighten-4"
                waves
              >

                Tom Dark
              </MDBChip>
              <MDBChip
                size="md"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-12.jpg"
                alt="Contact Person"
                bgColor="light-blue lighten-4"
                waves
              >

                Kate Horwitz
              </MDBChip>
              <MDBChip
                size="lg"
                src="https://mdbootstrap.com/img/Photos/Avatars/img(27).jpg"
                alt="Contact Person"
                bgColor="light-blue lighten-4"
                waves
              >

                Danny Clark
              </MDBChip>
            </div>
          </MDBCard>

          <hr className="my-5" />
          <h2 className="mb-4">Chips without avatars</h2>

          <MDBCard style={cardStyle}>
            <div style={chipsRowStyle1}>
              {show1 && (
                <MDBChip waves close handleClose={this.handleCloseHere(1)}>

                  Tag 1
                </MDBChip>
              )}
              {show2 && (
                <MDBChip waves close handleClose={this.handleCloseHere(2)}>

                  Tag 2
                </MDBChip>
              )}
              {show3 && (
                <MDBChip waves close handleClose={this.handleCloseHere(3)}>

                  Tag 3
                </MDBChip>
              )}
              {show4 && (
                <MDBChip waves close handleClose={this.handleCloseHere(4)}>

                  Tag 4
                </MDBChip>
              )}
              {show5 && (
                <MDBChip waves close handleClose={this.handleCloseHere(5)}>

                  Tag 5
                </MDBChip>
              )}
              {show6 && (
                <MDBChip waves close handleClose={this.handleCloseHere(6)}>

                  Tag 6
                </MDBChip>
              )}
            </div>

            <div style={chipsRowStyle2}>
              {show7 && (
                <MDBChip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(7)}
                >

                  Tag 220
                </MDBChip>
              )}
              {show8 && (
                <MDBChip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(8)}
                >

                  Tag 219
                </MDBChip>
              )}
              {show9 && (
                <MDBChip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(9)}
                >

                  Tag 218
                </MDBChip>
              )}
              {show10 && (
                <MDBChip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(10)}
                >
                  Tag 217
                </MDBChip>
              )}
              {show11 && (
                <MDBChip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(11)}
                >
                  Tag 216
                </MDBChip>
              )}
              {show12 && (
                <MDBChip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(12)}
                >
                  Tag 215
                </MDBChip>
              )}
            </div>
          </MDBCard>

          <hr className="my-5" />
          <h2 className="mb-4">Chips with various colors</h2>

          <MDBCard style={cardStyle}>
            <div className="mb-4">
              <MDBChip
                src="https://mdbootstrap.com/img/Photos/Avatars/img(7).jpg"
                alt="Contact Person"
                bgColor="blue lighten-4"
                waves
              >
                Caroline Smith
              </MDBChip>
              <MDBChip
                src="https://mdbootstrap.com/img/Photos/Avatars/img(3).jpg"
                alt="Contact Person"
                bgColor="purple lighten-4"
                waves
              >
                Adam Grey
              </MDBChip>
              <MDBChip
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                alt="Contact Person"
                bgColor="amber lighten-3"
                waves
              >

                Danny Moor
              </MDBChip>
            </div>
            <div className="mb-4">
              <MDBChip
                size="md"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                alt="Contact Person"
                bgColor="orange darken-2"
                text="white"
                waves
              >

                Daisy Sun
              </MDBChip>
              <MDBChip
                size="md"
                src="https://mdbootstrap.com/img/Photos/Avatars/img(28).jpg"
                alt="Contact Person"
                bgColor="cyan darken-2"
                text="white"
                waves
              >

                Martha Lores
              </MDBChip>
              <MDBChip
                size="md"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-12.jpg"
                alt="Contact Person"
                bgColor="pink darken-2"
                text="white"
                waves
              >

                Alexandra Deyn
              </MDBChip>
            </div>
            <div className="mb-4">
              <MDBChip
                size="lg"
                src="https://mdbootstrap.com/img/Photos/Avatars/img(27).jpg"
                alt="Contact Person"
                bgColor="primary-color"
                text="white"
                waves
              >

                Olaf Horwitz
              </MDBChip>
              <MDBChip
                size="lg"
                src="https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg"
                alt="Contact Person"
                bgColor="danger-color"
                text="white"
                waves
              >

                Mary-Kate Dare
              </MDBChip>
              <MDBChip
                size="lg"
                src="https://mdbootstrap.com/img/Photos/Avatars/img(21).jpg"
                alt="Contact Person"
                bgColor="success-color"
                text="white"
                waves
              >

                The Sylvester
              </MDBChip>
            </div>
            <div className="mb-4">
              {show13 && (
                <MDBChip
                  bgColor="teal lighten-2"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(13)}
                >

                  Martha
                </MDBChip>
              )}
              {show14 && (
                <MDBChip
                  bgColor="pink lighten-2"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(14)}
                >

                  Agnes
                </MDBChip>
              )}
              {show15 && (
                <MDBChip
                  bgColor="light-blue lighten-2"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(15)}
                >

                  Caroline
                </MDBChip>
              )}
              {show16 && (
                <MDBChip
                  bgColor="purple lighten-2"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(16)}
                >

                  Elisa
                </MDBChip>
              )}
              {show17 && (
                <MDBChip
                  bgColor="mdb-color lighten-2"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(17)}
                >

                  Francesca
                </MDBChip>
              )}
            </div>
            <div className="mb-4">
              {show18 && (
                <MDBChip
                  size="md"
                  bgColor="red lighten-4"
                  text="red"
                  close
                  waves
                  handleClose={this.handleCloseHere(18)}
                >

                  25.09.2017
                </MDBChip>
              )}
              {show19 && (
                <MDBChip
                  size="md"
                  bgColor="indigo lighten-4"
                  text="indigo"
                  close
                  waves
                  handleClose={this.handleCloseHere(19)}
                >

                  24.08.2016
                </MDBChip>
              )}
              {show20 && (
                <MDBChip
                  size="md"
                  bgColor="cyan lighten-4"
                  text="cyan"
                  close
                  waves
                  handleClose={this.handleCloseHere(20)}
                >

                  23.07.2015
                </MDBChip>
              )}
              {show21 && (
                <MDBChip
                  size="md"
                  bgColor="deep-purple lighten-4"
                  text="deep-purple"
                  close
                  waves
                  handleClose={this.handleCloseHere(21)}
                >

                  22.06.2014
                </MDBChip>
              )}
            </div>
            <div className="mb-4">
              {show22 && (
                <MDBChip
                  size="lg"
                  gradient="aqua"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(22)}
                >

                  Aqua gradient
                </MDBChip>
              )}
              {show23 && (
                <MDBChip
                  size="lg"
                  gradient="peach"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(23)}
                >

                  Peach gradient
                </MDBChip>
              )}
              {show24 && (
                <MDBChip
                  size="lg"
                  gradient="purple"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(24)}
                >

                  Purple gradient
                </MDBChip>
              )}
              {show25 && (
                <MDBChip
                  size="lg"
                  gradient="blue"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(25)}
                >

                  Blue gradient
                </MDBChip>
              )}
            </div>
          </MDBCard>

          <hr className="my-5" />
          <h2 className="mb-4">Chips input</h2>
          <MDBCard style={cardStyle}>
            <MDBChipsInput placeholder="+Tag" secondaryPlaceholder="Enter a tag" />
            <MDBChipsInput chips={["Tag 1", "Tag 2", "Tag 3"]} />
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default ChipsPage;
