import React, { Component } from "react";
import { MDBContainer, MDBScrollspyBox, MDBScrollspyList, MDBScrollspyListItem, MDBScrollspyText,  MDBTabContent } from "mdbreact";
import DocsLink from "./../../components/docsLink";

class ScrollSpyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      sections: []
    };

    this.scrollSpyText = React.createRef();
    this.scrollSpyTextBasic = React.createRef();
  }

  componentDidMount() {
    let sections = this.scrollSpyText.current.getElementsByTagName("h4");
    this.setState({ sections });
  }

  handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const sections = this.state.sections;
    const lastIndex = sections.length - 1;

    for (let i = 0; i < lastIndex; i++) {
      if ((scrollTop > sections[i].offsetTop - 20) && (scrollTop < sections[i + 1].offsetTop - 20)) {
        this.setState({ active: i });
      }
    };

    if (scrollTop > sections[lastIndex].offsetTop - 20) this.setState({ active: lastIndex });
  }

  render() {
    return (
      <MDBContainer className="mt-5">
        <DocsLink
          title="ScrollSpy"
          href="https://mdbootstrap.com/docs/react/navigation/scrollspy/"
        />

        <MDBScrollspyBox>
          <MDBScrollspyList color="grey" className="d-flex justify-content-end">
            <MDBScrollspyListItem
              href="#section1"
              active={this.state.active === 0}
            >
              section1
              </MDBScrollspyListItem>
            <MDBScrollspyListItem
              href="#section2"
              active={this.state.active === 1}
            >
              section2
              </MDBScrollspyListItem>
            <MDBScrollspyListItem
              href="#section3"
              active={this.state.active === 2}
            >
              section3
              </MDBScrollspyListItem>
          </MDBScrollspyList>

          <MDBTabContent>
            <MDBScrollspyText onScroll={this.handleScroll} scrollSpyRef={this.scrollSpyText} >
              <h4 id="section1">section1</h4>
              <p>
                Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
                enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
                rights whatever. Anim keffiyeh carles cardigan. Velit seitan
                mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
                shorts, williamsburg hoodie minim qui you probably haven't heard
                of them et cardigan trust fund culpa biodiesel wes anderson
                aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
                artisan ullamco consequat.
            </p>
              <p>
                Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
                enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
                rights whatever. Anim keffiyeh carles cardigan. Velit seitan
                mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
                shorts, williamsburg hoodie minim qui you probably haven't heard
                of them et cardigan trust fund culpa biodiesel wes anderson
                aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
                artisan ullamco consequat.
            </p>
              <h4 id="section2">section2</h4>
              <p>
                Veniam marfa mustache skateboard, adipisicing fugiat velit
                pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero.
                Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed
                cosby sweater food truck, mcsweeney's quis non freegan vinyl.
                Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
                quis gentrify. Brooklyn adipisicing craft beer vice keytar
                deserunt.
            </p>
              <p>
                Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
                enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
                rights whatever. Anim keffiyeh carles cardigan. Velit seitan
                mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
                shorts, williamsburg hoodie minim qui you probably haven't heard
                of them et cardigan trust fund culpa biodiesel wes anderson
                aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
                artisan ullamco consequat.
            </p>
              <h4 id="section3">section3</h4>
              <p>
                Occaecat commodo aliqua delectus. Fap craft beer deserunt
                skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea
                sunt next level locavore single-origin coffee in magna veniam.
                High life id vinyl, echo park consequat quis aliquip banh mi
                pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim
                messenger bag. Cred ex in, sustainable delectus consectetur fanny
                pack iphone.
            </p>
              <p>
                Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
                enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
                rights whatever. Anim keffiyeh carles cardigan. Velit seitan
                mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
                shorts, williamsburg hoodie minim qui you probably haven't heard
                of them et cardigan trust fund culpa biodiesel wes anderson
                aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
                artisan ullamco consequat.
            </p>
            </MDBScrollspyText>
          </MDBTabContent>

        </MDBScrollspyBox>
      </MDBContainer>
    );
  }
}

export default ScrollSpyPage;
