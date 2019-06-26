import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import DocsLink from "./../../components/docsLink";
import "./Lightbox.css";

class LightboxPage extends Component {

  state = {
    photoIndex: 0,
    isOpen: false,
     images: [
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg'
    ]
  }

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
      <MDBCol md="4" key={photoIndex}>
        <figure>
          <img
            src={imageSrc}
            alt="Gallery"
            className="img-fluid"
            onClick={() =>
              this.setState({ photoIndex: privateKey, isOpen: true })
            }
          />
        </figure>
      </MDBCol>
      );
    })

  }

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title="Lightbox"
          href="https://mdbootstrap.com/docs/react/advanced/lightbox/"
        />
        <MDBContainer className="mt-5">
          <div className="mdb-lightbox no-margin">
            <MDBRow>
              {this.renderImages()}
            </MDBRow>
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + "/" + images.length}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default LightboxPage;
