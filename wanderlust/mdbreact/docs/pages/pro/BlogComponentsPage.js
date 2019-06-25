import React, { Component } from "react";
import { MDBContainer, MDBInput, MDBCardHeader, MDBIcon, MDBMedia, MDBBtn, MDBPageItem, MDBPagination, MDBPageNav } from "mdbreact";
import DocsLink from "./../../components/docsLink";

class eCommercePage extends Component {
  render() {
    return (
      <MDBContainer className="mb-5">
        <DocsLink
          title="Blog components"
          href="https://mdbootstrap.com/plugins/react/blog-components/"
        />
        <MDBContainer>

          {/* Author Box v.1 */}
          <MDBContainer tag="section" className="mt-4">
            <h4 className="mb-4 text-left">Author Box v.1</h4>
            <>
              <MDBCardHeader className="border-0 font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">About the author</p>
                <ul className="list-unstyled list-inline mb-0">
                  <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="envelope"  />Send message</li>
                  <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="user" />See profile</li>
                  <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="rss" />Follow</li>
                </ul>
              </MDBCardHeader>
              <MDBMedia className="p-4 bg-white">
                <MDBMedia >
                  <img className="card-img-100 d-flex z-depth-1 mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="" />
                </MDBMedia>
                <MDBMedia body>
                  <h5 className="font-weight-bold mt-0">
                    Danny Newman
                  </h5>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
                  magnam.
                </MDBMedia>
              </MDBMedia>
            </>
          </MDBContainer>

          {/* Author Box v.2 */}
          <MDBContainer tag="section" className="mt-4" >
            <h4 className="mb-4 text-left">Author Box v.2</h4>
            <>
              <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">About the author</p>
                <ul className="list-unstyled text-default list-inline mb-0">
                  <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="envelope"  />Send message</li>
                  <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="user" />See profile</li>
                  <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="rss" />Follow</li>
                </ul>
              </MDBCardHeader>
              <MDBMedia className="p-4 bg-white">
                <MDBMedia >
                  <img className="card-img-100 rounded-circle d-flex z-depth-1 mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="" />
                </MDBMedia>
                <MDBMedia body>
                  <h5 className="font-weight-bold text-default mt-0">
                    Danny Newman
                  </h5>
                  <ul className="list-unstyled list-inline mb-2 pt-1">
                    <li className="list-inline-item">
                      <MDBIcon fab className="grey-text" size="lg" icon="facebook" />
                    </li>
                    <li className="list-inline-item">
                      <MDBIcon fab className="grey-text" size="lg" icon="twitter" />
                    </li>
                    <li className="list-inline-item">
                      <MDBIcon fab className="grey-text" size="lg" icon="google-plus" />
                    </li>
                    <li className="list-inline-item">
                      <MDBIcon fab className="grey-text" size="lg" icon="linkedin" />
                    </li>
                    <li className="list-inline-item">
                      <MDBIcon fab className="grey-text" size="lg" icon="instagram" />
                    </li>
                  </ul>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
                  magnam.
                </MDBMedia>
              </MDBMedia>
            </>
          </MDBContainer>

          {/* Comments List v.1 */}

          <MDBContainer tag="section" className="mt-4" >
            <h4 className="mb-4 text-left">Comments List v.1</h4>
            <>
              <MDBCardHeader className="border-0 font-weight-bold">
                <p className="mr-4 mb-0">4 comments</p>
              </MDBCardHeader>
              <MDBMedia className="d-block d-md-flex mt-4">
                <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="" />
                <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                  <h5 className="font-weight-bold mt-0">
                    Miley Steward<MDBIcon icon="reply" className="pull-right ml-2" />
                  </h5>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <MDBMedia className="d-block d-md-flex mt-4">
                <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg" alt="" />
                    <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                        <h5 className="font-weight-bold mt-0">
                        Tommy Smith<MDBIcon icon="reply" className="pull-right ml-2" />
                        </h5>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <div className="form-group mt-4">
                          <label htmlFor="quickReplyFormComment">Your comment</label>
                          <textarea className="form-control" id="quickReplyFormComment" rows="5"></textarea>
                          <div className="text-center my-4">
                            <MDBBtn size="sm" color="primary">Post</MDBBtn>
                          </div>
                        </div>
                        <MDBMedia className="d-block d-md-flex mt-4">
                          <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg" alt="" />
                          <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                            <h5 className="font-weight-bold mt-0">
                              Sylvester the Cat<MDBIcon icon="reply" className="pull-right ml-2" />
                            </h5>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </MDBMedia>
                        </MDBMedia>
                    </MDBMedia>
                 </MDBMedia>
                </MDBMedia>
              </MDBMedia>
              <MDBMedia className="d-block d-md-flex mt-4">
                <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" alt="" />
                <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                  <h5 className="font-weight-bold mt-0">
                    Caroline Horwitz<MDBIcon icon="reply" className="pull-right ml-2" />
                  </h5>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </MDBMedia>
              </MDBMedia>
              <MDBPagination className="d-flex justify-content-center mt-5">
                <MDBPageItem disabled>
                  <MDBPageNav>
                    <span>First</span>
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem disabled>
                  <MDBPageNav aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem active>
                  <MDBPageNav>
                    1 <span className="sr-only">(current)</span>
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    2
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    3
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    4
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    5
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    &raquo;
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    Last
                  </MDBPageNav>
                </MDBPageItem>
              </MDBPagination>
            </>
          </MDBContainer>

          {/* Comments List v.2 */}

          <MDBContainer tag="section" className="mt-4" >
            <h4 className="mb-4 text-left">Comments List v.2</h4>
            <>
              <MDBCardHeader className="border-0 font-weight-bold">
                <p className="mr-4 mb-0">4 comments</p>
              </MDBCardHeader>
              <MDBMedia className="d-block d-md-flex mt-4">
                <img className="card-img-64 rounded-circle d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="" />
                <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                  <h5 className="font-weight-bold text-default mt-0">
                    Miley Steward<MDBIcon icon="reply" className="pull-right ml-2" />
                  </h5>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <MDBMedia className="d-block d-md-flex mt-4">
                  <img className="card-img-64 rounded-circle d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg" alt="" />
                    <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                        <h5 className="font-weight-bold text-default mt-0">
                        Tommy Smith<MDBIcon icon="reply" className="pull-right ml-2" />
                        </h5>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <div className="form-group mt-4">
                          <MDBInput type="textarea" label="Your comment" rows="5" />
                          <div className="text-center my-4">
                            <MDBBtn rounded size="sm">Post</MDBBtn>
                          </div>
                        </div>
                        <MDBMedia className="d-block d-md-flex mt-4">
                          <img className="card-img-64 rounded-circle d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg" alt="" />
                          <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                            <h5 className="font-weight-bold text-default mt-0">
                              Sylvester the Cat<MDBIcon icon="reply" className="pull-right ml-2" />
                            </h5>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </MDBMedia>
                        </MDBMedia>
                    </MDBMedia>
                 </MDBMedia>
                </MDBMedia>
              </MDBMedia>
              <MDBMedia className="d-block d-md-flex mt-4">
                <img className="card-img-64 rounded-circle d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" alt="" />
                <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                  <h5 className="font-weight-bold text-default mt-0">
                    Caroline Horwitz<MDBIcon icon="reply" className="pull-right ml-2" />
                  </h5>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </MDBMedia>
              </MDBMedia>
              <MDBPagination circle color="teal" className="d-flex justify-content-center mt-5">
                <MDBPageItem disabled>
                  <MDBPageNav>
                    <span>First</span>
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem disabled>
                  <MDBPageNav aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem active>
                  <MDBPageNav>
                    1 <span className="sr-only">(current)</span>
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    2
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    3
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    4
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    5
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    &raquo;
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>
                    Last
                  </MDBPageNav>
                </MDBPageItem>
              </MDBPagination>
            </>
          </MDBContainer>

          {/* Reply Form v.1 */}

          <MDBContainer tag="section" className="mt-4" >
            <h4 className="mb-4 text-left">Reply Form v.1</h4>
            <>
              <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">Leave a reply</p>
              </MDBCardHeader>
              <form className="px-1 mt-4">

                <div className="form-group">
                  <label htmlFor="replyFormComment">Your comment</label>
                  <textarea className="form-control" id="replyFormComment" rows="5"></textarea>
                </div>

                <label htmlFor="replyFormName">Your name</label>
                <input type="email" id="replyFormName" className="form-control" />

                <label htmlFor="replyFormEmail">Your e-mail</label>
                <input type="email" id="replyFormEmail" className="form-control" />

                <div className="text-center mt-4">
                  <MDBBtn color="primary" >Post</MDBBtn>
                </div>

              </form>
            </>
          </MDBContainer>

          {/* Reply Form v.2 */}

          <MDBContainer tag="section" className="mt-4" >
            <h4 className="mb-4 text-left">Reply Form v.2</h4>
            <>
              <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">Leave a reply</p>
              </MDBCardHeader>
              <form className="p-4 bg-white">

                <div className="form-group">
                  <MDBInput type="textarea" label="Your comment" rows="5" />
                </div>

                <MDBInput label="Your name" />
                <MDBInput type="email" label="Your e-mail" />

                <div className="text-center mt-4">
                  <MDBBtn rounded >Post</MDBBtn>
                </div>

              </form>
            </>
          </MDBContainer>

          {/* Reply Form v.3 */}
          <MDBContainer tag="section" className="mt-4" >
            <h4 className="mb-4 text-left">Reply Form v.3</h4>
            <>
              <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">Leave a reply</p>
              </MDBCardHeader>
              <form className="mt-4">

                <div className="d-md-flex flex-md-fill">
                  <div className="input-group input-group-md px-2 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text white grey-text" id="basic-addon9">1</span>
                    </div>
                    <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Username"
                      aria-describedby="basic-addon9" />
                  </div>
                  <div className="input-group input-group-md px-2 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text white grey-text" id="basic-addon10">2</span>
                    </div>
                    <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Email"
                      aria-describedby="basic-addon10" />
                  </div>
                  <div className="input-group input-group-md px-2 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text white grey-text" id="basic-addon101">3</span>
                    </div>
                    <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Website"
                      aria-describedby="basic-1" />
                  </div>
                </div>

                <div className="form-group px-2">
                  <textarea className="form-control pl-3 pt-3" id="exampleFormControlTextarea1" rows="6" placeholder="Write something here..."></textarea>
                </div>

                <div className="text-center mt-4">
                  <MDBBtn color="primary">Submit</MDBBtn>
                </div>
              </form>
            </>
          </MDBContainer>

          {/* Reply Form v.4 */}
          <MDBContainer tag="section" className="mt-4" >
            <h4 className="mb-4 text-left">Reply Form v.4</h4>
            <>
              <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">Leave a reply</p>
              </MDBCardHeader>
              <form className="mt-4" style={{color: "#495057"}}>
                <div className="d-md-flex flex-md-fill" >
                  <div className="input-group  input-group-md px-2 mb-4">
                    <MDBInput label="Username" icon="user"  />
                  </div>
                  <div className="input-group input-group-md px-2 mb-4">
                    <MDBInput type="email" label="Email" icon="at" />
                  </div>
                  <div className="input-group  input-group-md px-2 mb-4">
                    <MDBInput label="Website" icon="code" />
                  </div>
                </div>

                <div className="form-group px-2">
                  <MDBInput
                    type="textarea"
                    label="Icon Prefix"
                    rows="2"
                    icon="pencil-alt"
                  />
                </div>

                <div className="text-center mt-4">
                  <MDBBtn color="primary">Submit</MDBBtn>
                </div>
              </form>
            </>
          </MDBContainer>

          {/* Reply Form (logged in user) v.1 */}

          <MDBContainer tag="section" className="mt-4">
            <h4 className="mb-4 text-left">Author Box v.1</h4>
            <>
              <MDBCardHeader className="border-0 font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">Leave a reply (logged in user)</p>
              </MDBCardHeader>
              <div className="d-md-flex flex-md-fill mt-4 px-1">
                <div className="d-flex justify-content-center mr-md-5">
                  <img className="card-img-100 z-depth-1 mb-4" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
                    alt="avatar" />
                </div>
                <textarea className="form-control pl-3 pt-3" id="exampleFormControlTextarea1" rows="6" placeholder="Write something here..."></textarea>
              </div>
              <div className="text-center mt-4">
              <MDBBtn color="primary">Submit</MDBBtn>
              </div>
            </>
          </MDBContainer>

          {/* Reply Form (logged in user) v.2 */}

          <MDBContainer tag="section" className="mt-4">
            <h4 className="mb-4 text-left">Author Box v.2</h4>
            <>
              <MDBCardHeader className="border-0 font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">Leave a reply (logged in user)</p>
              </MDBCardHeader>
              <div className="d-md-flex flex-md-fill px-1">
                <div className="d-flex justify-content-center mr-md-5 mt-md-5 mt-4">
                  <img className="card-img-100 rounded-circle z-depth-1 mb-4" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
                    alt="avatar" />
                </div>
                <div className="md-form w-100">
                  <MDBInput type="textarea" label="Your comment" rows="5" />
                </div>
              </div>
              <div className="text-center mt-4">
                <MDBBtn rounded >Post</MDBBtn>
              </div>
            </>
          </MDBContainer>

        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default eCommercePage;
