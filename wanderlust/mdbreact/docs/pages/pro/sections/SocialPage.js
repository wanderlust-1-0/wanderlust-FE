import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBTooltip, MDBCollapse, MDBInput, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import DocsLink from "../../../components/docsLink";

class SocialPage extends Component {
  state = {
    collapseID: ""
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <MDBContainer style={{ maxWidth: "80%" }}>
        <DocsLink
          title="Social Sections"
          href="https://mdbootstrap.com/docs/react/sections/social/"
        />
        <h2 className="title pt-4 mt-5">
          <strong>Social newsfeed v.1 </strong>
        </h2>
        <MDBCard
          className="my-5 px-5 pt-4"
          style={{ fontWeight: 300, maxWidth: 600 }}
        >
          <MDBCardBody className="py-0">
            <MDBRow>
              <div className="mdb-feed">
                <div className="news">
                  <div className="label">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                      alt=""
                      className="rounded-circle z-depth-1-half"
                    />
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a href="#!" className="name">
                        John Doe
                      </a> added you as a friend
                      <div className="date">1 hour ago</div>
                    </div>
                    <div className="feed-footer">
                      <a href="#!" className="like">
                        <MDBIcon icon="heart" className="mr-2"/>
                        <span>5 likes</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg"
                      alt=""
                      className="rounded-circle z-depth-1-half"
                    />
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a href="#!" className="name">
                        Anna Smith
                      </a> added <a href="#!">2 new illustrations</a>
                      <div className="date">4 hours ago</div>
                    </div>
                    <div className="added-images">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Others/images/71.jpg"
                        alt=""
                        className="z-depth-1 rounded mb-md-0 mb-2"
                      />
                      <img
                        src="https://mdbootstrap.com/img/Photos/Others/images/74.jpg"
                        alt=""
                        className="z-depth-1 rounded"
                      />
                    </div>
                    <div className="feed-footer">
                      <a href="#!" className="like">
                        <MDBIcon className="mr-2" icon="heart" />
                        <span>18 likes</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg"
                      alt=""
                      className="rounded-circle z-depth-1-half"
                    />
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a href="#!" className="name">
                        Danny Moore
                      </a> added you as a friend
                      <div href="#!" className="date">
                        7 hours ago
                      </div>
                    </div>
                    <div className="feed-footer">
                      <a href="#!" className="like">
                        <MDBIcon className="mr-2" icon="heart" />
                        <span>11 likes</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg"
                      alt=""
                      className="rounded-circle z-depth-1-half"
                    />
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a href="#!" className="name">
                        Lili Rose
                      </a> posted on her page
                      <div className="date">2 days ago</div>
                    </div>
                    <div className="added-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vero inventore, iste quas libero eius? Vitae sint neque
                      animi alias sunt dolor, accusantium ducimus, non placeat
                      voluptate.
                    </div>
                    <div className="feed-footer">
                      <a href="#!" className="like">
                        <MDBIcon className="mr-2" icon="heart" />
                        <span>7 likes</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20)-mini.jpg"
                      alt=""
                      className="rounded-circle z-depth-1-half"
                    />
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a href="#!" className="name">
                        Kate Harrison
                      </a> added <a href="#!"> 2 new photos</a> of you
                      <div className="date">3 days ago</div>
                    </div>
                    <div className="added-images">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Others/images/29.jpg"
                        alt=""
                        className="z-depth-1 rounded mb-md-0 mb-2"
                      />
                      <img
                        src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                        alt=""
                        className="z-depth-1 rounded"
                      />
                    </div>
                    <div className="feed-footer">
                      <a href="#!" className="like">
                        <MDBIcon className="mr-2" icon="heart" />
                        <span>53 likes</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <h2 className="title pt-4 mt-5">
          <strong>Social newsfeed v.2 </strong>
        </h2>
        <MDBCard
          className="my-5 px-5 pt-4"
          style={{ fontWeight: 300, maxWidth: 600 }}
        >
          <MDBCardBody className="py-0">
            <MDBRow>
              <div className="mdb-feed">
                <div className="news">
                  <div className="label">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                      alt=""
                      className="rounded-circle z-depth-1-half"
                    />
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a href="#!" className="name">
                        John Doe
                      </a> added you as a friend
                      <div className="date">1 hour ago</div>
                    </div>
                    <div className="feed-footer">
                      <div className="d-flex">
                        <a
                          href="#!"
                          className="comment"
                          aria-expanded="false"
                          aria-controls="collapseExample-1"
                          onClick={this.toggleCollapse("collapseExample-1")}
                        >
                          Comment
                        </a>
                        &middot;
                        <span>
                          <a href="#!"> 7 </a>
                        </span>
                        <MDBTooltip
                          placement="top"
                          domElement
                        >
                          <a href="#!" className="thumbs mx-2">
                            <MDBIcon className="mr-2" icon="thumbs-up" />
                          </a>
                          <span>
                            I like it
                          </span>
                        </MDBTooltip>
                        <MDBTooltip
                          placement="top"
                          domElement
                        >
                          <a href="#!" className="thumbs">
                            <MDBIcon className="mr-2" icon="thumbs-down" />
                          </a>
                          <span>
                            I don't like it
                          </span>
                        </MDBTooltip>
                      </div>
                      <MDBCollapse
                        id="collapseExample-1"
                        isOpen={this.state.collapseID}
                      >
                        <MDBCard className="card-body mt-1">
                          <MDBInput type="textarea" label="Add comment" />
                          <div className="d-flex justify-content-end">
                            <MDBBtn flat onClick={this.click1}>
                              Cancel
                            </MDBBtn>
                            <MDBBtn color="primary" onClick={this.click1}>
                              Reply
                            </MDBBtn>
                          </div>
                        </MDBCard>
                      </MDBCollapse>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg"
                      alt=""
                      className="rounded-circle z-depth-1-half"
                    />
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a href="#!" className="name">
                        Anna Smith
                      </a> added <a href="#!"> 2 new illustrations</a>
                      <div className="date">4 hours ago</div>
                    </div>
                    <div className="added-images">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Others/images/50.jpg"
                        alt=""
                        className="z-depth-1 rounded mb-md-0 mb-2"
                      />
                      <img
                        src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                        alt=""
                        className="z-depth-1 rounded"
                      />
                    </div>
                    <div className="feed-footer">
                      <div className="d-flex">
                        <a
                          href="#!"
                          className="comment"
                          aria-expanded="false"
                          aria-controls="collapseExample-2"
                          onClick={this.toggleCollapse("collapseExample-2")}
                        >
                          Comment
                        </a>
                        &middot;
                        <span>
                          <a href="#!"> 31 </a>
                        </span>
                        <MDBTooltip
                          placement="top"
                          domElement
                        >
                          <a href="#!" className="thumbs mx-2">
                            <MDBIcon className="mr-2" icon="thumbs-up" />
                          </a>
                          <span>
                            I like it
                          </span>
                        </MDBTooltip>
                        <MDBTooltip
                          placement="top"
                          domElement
                        >
                          <a href="#!" className="thumbs">
                            <MDBIcon className="mr-2" icon="thumbs-down" />
                          </a>
                          <span>
                            I don't like it
                          </span>
                        </MDBTooltip>
                      </div>
                      <MDBCollapse
                        id="collapseExample-2"
                        isOpen={this.state.collapseID}
                      >
                        <MDBCard className="card-body mt-1">
                          <MDBInput type="textarea" label="Add comment" />
                          <div className="d-flex justify-content-end">
                            <MDBBtn flat onClick={this.click2}>
                              Cancel
                            </MDBBtn>
                            <MDBBtn color="primary" onClick={this.click2}>
                              Reply
                            </MDBBtn>
                          </div>
                        </MDBCard>
                      </MDBCollapse>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg"
                      alt=""
                      className="rounded-circle z-depth-1-half"
                    />
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a href="#!" className="name">
                        Danny Moore
                      </a> added you as a friend
                      <div className="date">7 hours ago</div>
                    </div>
                    <div className="feed-footer">
                      <div className="d-flex">
                        <a
                          href="#!"
                          className="comment"
                          aria-expanded="false"
                          aria-controls="collapseExample-3"
                          onClick={this.toggleCollapse("collapseExample-3")}
                        >
                          Comment
                        </a>
                        &middot;
                        <span>
                          <a href="#!"> 12 </a>
                        </span>
                        <MDBTooltip
                          placement="top"
                          domElement
                        >
                          <a href="#!" className="thumbs mx-2">
                            <MDBIcon className="mr-2" icon="thumbs-up" />
                          </a>
                          <span>
                            I like it
                          </span>
                        </MDBTooltip>
                        <MDBTooltip
                          placement="top"
                          domElement
                        >
                          <a href="#!" className="thumbs">
                            <MDBIcon className="mr-2" icon="thumbs-down" />
                          </a>
                          <span>
                            I don't like it
                          </span>
                        </MDBTooltip>
                      </div>
                      <MDBCollapse
                        id="collapseExample-3"
                        isOpen={this.state.collapseID}
                      >
                        <MDBCard className="card-body mt-1">
                          <MDBInput type="textarea" label="Add comment" />
                          <div className="d-flex justify-content-end">
                            <MDBBtn flat onClick={this.click3}>
                              Cancel
                            </MDBBtn>
                            <MDBBtn color="primary" onClick={this.click3}>
                              Reply
                            </MDBBtn>
                          </div>
                        </MDBCard>
                      </MDBCollapse>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg"
                      alt=""
                      className="rounded-circle z-depth-1-half"
                    />
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a href="#!" className="name">
                        Lili Rose
                      </a> posted on her page
                      <div className="date">2 days ago</div>
                    </div>
                    <div className="added-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vero inventore, iste quas libero eius? Vitae sint neque
                      animi alias sunt dolor, accusantium ducimus, non placeat
                      voluptate.
                    </div>
                    <div className="feed-footer">
                      <div className="d-flex">
                        <a
                          href="#!"
                          className="comment"
                          aria-expanded="false"
                          aria-controls="collapseExample-4"
                          onClick={this.toggleCollapse("collapseExample-4")}
                        >
                          Comment
                        </a>
                        &middot;
                        <span>
                          <a href="#!"> 25 </a>
                        </span>
                        <MDBTooltip
                          placement="top"
                          domElement
                        >
                          <a href="#!" className="thumbs mx-2">
                            <MDBIcon className="mr-2" icon="thumbs-up" />
                          </a>
                          <span>
                            I like it
                          </span>
                        </MDBTooltip>
                        <MDBTooltip
                          placement="top"
                          domElement
                        >
                          <a href="#!" className="thumbs">
                            <MDBIcon className="mr-2" icon="thumbs-down" />
                          </a>
                          <span>
                            I don't like it
                          </span>
                        </MDBTooltip>
                      </div>
                      <MDBCollapse
                        id="collapseExample-4"
                        isOpen={this.state.collapseID}
                      >
                        <MDBCard className="card-body mt-1">
                          <MDBInput type="textarea" label="Add comment" />
                          <div className="d-flex justify-content-end">
                            <MDBBtn flat onClick={this.click4}>
                              Cancel
                            </MDBBtn>
                            <MDBBtn color="primary" onClick={this.click4}>
                              Reply
                            </MDBBtn>
                          </div>
                        </MDBCard>
                      </MDBCollapse>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20)-mini.jpg"
                      alt=""
                      className="rounded-circle z-depth-1-half"
                    />
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a href="#!" className="name">
                        Kate Harrison
                      </a> added <a href="#!"> 2 new photos</a> of you
                      <div className="date">3 days ago</div>
                    </div>
                    <div className="added-images">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
                        alt=""
                        className="z-depth-1 rounded mb-md-0 mb-2"
                      />
                      <img
                        src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                        alt=""
                        className="z-depth-1 rounded"
                      />
                    </div>
                    <div className="feed-footer">
                      <div className="d-flex">
                        <a
                          href="#!"
                          className="comment"
                          aria-expanded="false"
                          aria-controls="collapseExample-5"
                          onClick={this.toggleCollapse("collapseExample-5")}
                        >
                          Comment
                        </a>
                        &middot;
                        <span>
                          <a href="#!"> 47 </a>
                        </span>
                        <MDBTooltip
                          placement="top"
                          domElement
                        >
                          <a href="#!" className="thumbs mx-2">
                            <MDBIcon className="mr-2" icon="thumbs-up" />
                          </a>
                          <span>
                            I like it
                          </span>
                        </MDBTooltip>
                        <MDBTooltip
                          placement="top"
                          domElement
                        >
                          <a href="#!" className="thumbs">
                            <MDBIcon className="mr-2" icon="thumbs-down" />
                          </a>
                          <span>
                            I don't like it
                          </span>
                        </MDBTooltip>
                      </div>
                      <MDBCollapse
                        id="collapseExample-5"
                        isOpen={this.state.collapseID}
                      >
                        <MDBCard className="card-body mt-1">
                          <MDBInput type="textarea" label="Add comment" />
                          <div className="d-flex justify-content-end">
                            <MDBBtn flat onClick={this.click5}>
                              Cancel
                            </MDBBtn>
                            <MDBBtn color="primary" onClick={this.click5}>
                              Reply
                            </MDBBtn>
                          </div>
                        </MDBCard>
                      </MDBCollapse>
                    </div>
                  </div>
                </div>
              </div>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <h2 className="title pt-4">
          <strong>Personal card </strong>
        </h2>
        <MDBRow>
          <MDBCol md="6" lg="4">
            <MDBCard personal className="my-5">
              <MDBCardImage
                top
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
                alt="MDBCard image cap"
              />
              <MDBCardBody>
                <MDBCardTitle>
                  <a href="#!" className="title-one">
                    Clara
                  </a>
                </MDBCardTitle>
                <p className="card-meta">Joined in 2013</p>
                <MDBCardText>Clara is an photographer living in Madrid.</MDBCardText>
                <hr />
                <a href="#!" className="card-meta">
                  <span>
                    <MDBIcon className="mr-2" icon="user" />
                    22 Friends
                  </span>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <h2 className="title pt-4">
          <strong>Social news card</strong>
        </h2>
        <MDBRow>
          <MDBCol md="6" lg="4">
            <MDBCard news className="my-5">
              <MDBCardBody>
                <div className="content">
                  <div className="right-side-meta">14 h</div>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg"
                    alt=""
                    className="rounded-circle avatar-img z-depth-1-half"
                  />
                  Kate
                </div>
              </MDBCardBody>
              <MDBCardImage
                top
                src="https://mdbootstrap.com/img/Photos/Others/girl1.jpg"
                alt=""
              />
              <MDBCardBody>
                <div className="social-meta">
                  <p>Another great adventure! </p>
                  <span>
                    <MDBIcon className="mr-2" icon="heart" />
                    25 likes
                  </span>
                  <p>
                    <MDBIcon className="mr-2" icon="comment" />
                    13 comments
                  </p>
                </div>
                <hr />
                <MDBInput icon="heart" hint="Add Comment..." />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <h2 className="title pt-4">
          <strong>Social card with video</strong>
        </h2>
        <MDBRow>
          <MDBCol md="6" lg="4">
            <MDBCard news className="my-5">
              <MDBCardBody>
                <div className="content">
                  <div className="right-side-meta">2 h</div>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                    alt=""
                    className="rounded-circle avatar-img z-depth-1-half"
                  />
                  Tony
                </div>
              </MDBCardBody>
              <div className="embed-responsive embed-responsive-1by1">
                <iframe
                  className="embed-responsive-item"
                  title="This is a unique title"
                  src="https://www.youtube.com/embed/37pwbUp8t1I"
                  alt=""
                  allowFullScreen
                />
              </div>
              <MDBCardBody>
                <div className="social-meta">
                  <p className="blue-text">
                    #awesome #bboy #battle #breaking #cool
                  </p>
                  <span>
                    <MDBIcon className="mr-2" icon="heart" />
                    265 likes
                  </span>
                  <p>
                    <MDBIcon className="mr-2" icon="comment" />
                    89 comments
                  </p>
                </div>
                <hr />
                <MDBInput icon="heart" hint="Add Comment..." />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <h2 className="title pt-4">
          <strong>Group of personal cards</strong>
        </h2>
        <MDBRow>
          <MDBCol md="12">
            <div className="card-group my-5">
              <MDBCard personal className="mb-md-0 mb-4">
                <MDBView hover>
                  <MDBCardImage
                    top
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                    alt="MDBCard image cap"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
                <MDBCardBody>
                  <a href="#!">
                    <MDBCardTitle>Anna</MDBCardTitle>
                  </a>
                  <a href="#!" className="card-meta">
                    Friends
                  </a>
                  <MDBCardText>
                    Anna is a web designer living in New York.
                  </MDBCardText>
                  <hr />
                  <a href="#!" className="card-meta">
                    <span>
                      <MDBIcon className="mr-2" icon="user" />
                      83 Friends
                    </span>
                  </a>
                  <p className="card-meta float-right">Joined in 2012</p>
                </MDBCardBody>
              </MDBCard>

              <MDBCard personal className="mb-md-0 mb-4">
                <MDBView hover>
                  <MDBCardImage
                    top
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                    alt="MDBCard image cap"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
                <MDBCardBody>
                  <a href="#!">
                    <MDBCardTitle>John</MDBCardTitle>
                  </a>
                  <a href="#!" className="card-meta">
                    Coworker
                  </a>
                  <MDBCardText>John is a copywriter living in Seattle.</MDBCardText>
                  <hr />
                  <a href="#!" className="card-meta">
                    <span>
                      <MDBIcon className="mr-2" icon="user" />
                      48 Friends
                    </span>
                  </a>
                  <p className="card-meta float-right">Joined in 2015</p>
                </MDBCardBody>
              </MDBCard>

              <MDBCard personal className="mb-md-0 mb-4">
                <MDBView hover>
                  <MDBCardImage
                    top
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(28).jpg"
                    alt="MDBCard image cap"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
                <MDBCardBody>
                  <a href="#!">
                    <MDBCardTitle>Sara</MDBCardTitle>
                  </a>
                  <a href="#!" className="card-meta">
                    Coworker
                  </a>
                  <MDBCardText>Sara is a video maker living in Tokyo.</MDBCardText>
                  <hr />
                  <a href="#!" className="card-meta">
                    <span>
                      <MDBIcon className="mr-2" icon="user" />
                      127 Friends
                    </span>
                  </a>
                  <p className="card-meta float-right">Joined in 2014</p>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default SocialPage;
