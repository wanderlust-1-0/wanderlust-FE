import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip, MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import DocsLink from "../../../components/docsLink";

const EcommercePage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="eCommerce Sections"
        href="https://mdbootstrap.com/docs/react/sections/e-commerce/"
      />
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our bestsellers
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard cascade narrow ecommerce>
              <MDBCardImage
                cascade
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="grey-text">
                  <h5>Denim</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">Denim trousers</a>
                  </strong>
                </MDBCardTitle>
                <ul className="rating">
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                </ul>
                <MDBCardText>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <span className="float-left font-weight-bold">
                    <strong>49$</strong>
                  </span>
                  <span className="float-right">
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-shopping-cart grey-text ml-3"></i>
                      <span>Add to cart</span>
                    </MDBTooltip>
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-share-alt grey-text ml-3"></i>
                      <span>Share</span>
                    </MDBTooltip>
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-heart ml-3"></i>
                      <span>Added to watchlist</span>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard cascade narrow ecommerce>
              <MDBCardImage
                cascade
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg"
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="grey-text">
                  <h5>Shoes</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">High heels</a>
                  </strong>
                </MDBCardTitle>
                <ul className="rating">
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                </ul>
                <MDBCardText>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <span className="float-left font-weight-bold">
                    <strong>89$</strong>
                  </span>
                  <span className="float-right">
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-shopping-cart grey-text ml-3"></i>
                      <span>Add to cart</span>
                    </MDBTooltip>
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-share-alt grey-text ml-3"></i>
                      <span>Share</span>
                    </MDBTooltip>
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-heart ml-3"></i>
                      <span>Add to watchlist</span>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard cascade narrow ecommerce>
              <MDBCardImage
                cascade
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg"
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="grey-text">
                  <h5>Outwear</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">Brown coat</a>
                  </strong>
                </MDBCardTitle>
                <ul className="rating">
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star-half" />
                  </li>
                </ul>
                <MDBCardText>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <span className="float-left font-weight-bold">
                    <strong>59$</strong>
                  </span>
                  <span className="float-right">
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-shopping-cart grey-text ml-3"></i>
                      <span>Add to cart</span>
                    </MDBTooltip>
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-share-alt grey-text ml-3"></i>
                      <span>Share</span>
                    </MDBTooltip>
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-heart ml-3"></i>
                      <span>Add to watchlist</span>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard cascade narrow ecommerce>
              <MDBCardImage
                cascade
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg"
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="grey-text">
                  <h5>Blouses</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">Shirt</a>
                  </strong>
                </MDBCardTitle>
                <ul className="rating">
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                </ul>
                <MDBCardText>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <span className="float-left font-weight-bold">
                    <strong>119$</strong>
                  </span>
                  <span className="float-right">
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-shopping-cart grey-text ml-3"></i>
                      <span>Add to cart</span>
                    </MDBTooltip>
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-share-alt grey-text ml-3"></i>
                      <span>Share</span>
                    </MDBTooltip>
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-heart ml-3"></i>
                      <span>Add to watchlist</span>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our bestsellers
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce>
              <MDBCardImage
                cascade
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
                top
                alt="sample photo"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="text-muted">
                  <h5>Camera</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">GoPro</a>
                  </strong>
                </MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing minima
                  veniam elit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <span className="float-left font-weight-bold">
                    <strong>1439$</strong>
                  </span>
                  <span className="float-right">
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-eye grey-text ml-3"></i>
                      <span>Quick look</span>
                    </MDBTooltip>
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-heart grey-text ml-3"></i>
                      <span>Add to watchlist</span>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce>
              <MDBCardImage
                cascade
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg"
                top
                alt="sample photo"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="text-muted">
                  <h5>Photography</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">Camera</a>
                  </strong>
                </MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing minima
                  veniam elit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <span className="float-left font-weight-bold">
                    <strong>1160$</strong>
                  </span>
                  <span className="float-right">
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-eye grey-text ml-3"></i>
                      <span>Quick look</span>
                    </MDBTooltip>
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-heart grey-text ml-3"></i>
                      <span>Add to watchlist</span>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce>
              <MDBCardImage
                cascade
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
                top
                alt="sample photo"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="text-muted">
                  <h5>Smartphone</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">iPhone 6S</a>
                  </strong>
                </MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing minima
                  veniam elit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <span className="float-left font-weight-bold">
                    <strong>2160$</strong>
                  </span>
                  <span className="float-right">
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-eye grey-text ml-3"></i>
                      <span>Quick look</span>
                    </MDBTooltip>
                    <MDBTooltip
                      domElement
                      placement="top"
                    >
                      <i className="fa fa-heart grey-text ml-3"></i>
                      <span>Add to watchlist</span>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our bestsellers
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard className="align-items-center">
              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody className="text-center">
                <a href="#!" className="grey-text">
                  <h5>Shirt</h5>
                </a>
                <h5>
                  <strong>
                    <a href="#!" className="dark-grey-text">
                      Denim shirt{" "}
                      <MDBBadge pill color="danger">
                        NEW
                      </MDBBadge>
                    </a>
                  </strong>
                </h5>
                <h4 className="font-weight-bold blue-text">
                  <strong>120$</strong>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard className="align-items-center">
              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody className="text-center">
                <a href="#!" className="grey-text">
                  <h5>Sport wear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="#!" className="dark-grey-text">
                      Sweatshirt
                    </a>
                  </strong>
                </h5>
                <h4 className="font-weight-bold blue-text">
                  <strong>139$</strong>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard className="align-items-center">
              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody className="text-center">
                <a href="#!" className="grey-text">
                  <h5>Sport wear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="#!" className="dark-grey-text">
                      Grey blouse{" "}
                      <MDBBadge pill color="primary">
                        BEST
                      </MDBBadge>
                    </a>
                  </strong>
                </h5>
                <h4 className="font-weight-bold blue-text">
                  <strong>99$</strong>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard className="align-items-center">
              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody className="text-center">
                <a href="#!" className="grey-text">
                  <h5>Outwear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="#!" className="dark-grey-text">
                      Black jacket
                    </a>
                  </strong>
                </h5>
                <h4 className="font-weight-bold blue-text">
                  <strong>219$</strong>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our bestsellers
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard collection className="z-depth-1-half">
              <div className="view zoom">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="stripe dark">
                  <a href="#!">
                    <p>
                      Red trousers <MDBIcon icon="angle-right" />
                    </p>
                  </a>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard collection className="z-depth-1-half">
              <div className="view zoom">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="stripe dark">
                  <a href="#!">
                    <p>
                      Sweatshirt <MDBIcon icon="angle-right" />
                    </p>
                  </a>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard collection className="z-depth-1-half">
              <div className="view zoom">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="stripe dark">
                  <a href="#!">
                    <p>
                      Accessories <MDBIcon icon="angle-right" />
                    </p>
                  </a>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard collection className="z-depth-1-half">
              <div className="view zoom">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="stripe dark">
                  <a href="#!">
                    <p>
                      Sweatshirt <MDBIcon icon="angle-right" />
                    </p>
                  </a>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our bestsellers
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBCarousel
          activeItem={1}
          length={3}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem
        >
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem itemId="1">
                <MDBCol md="4">
                  <MDBCard narrow ecommerce className="mb-2">
                    <MDBCardImage
                      cascade
                      top
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg"
                      alt="sample photo"
                    />
                    <MDBCardBody cascade>
                      <a href="#!" className="text-muted">
                        <h5>Shoes</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Leather boots</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci.
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left">69$</span>
                        <span className="float-right">
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-eye grey-text ml-3"></i>
                            <span>Quick look</span>
                          </MDBTooltip>
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-heart grey-text ml-3"></i>
                            <span>Add to watchlist</span>
                          </MDBTooltip>
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBCard narrow ecommerce className="mb-2">
                    <MDBCardImage
                      cascade
                      top
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg"
                      alt="sample photo"
                    />
                    <MDBCardBody cascade>
                      <a href="#!" className="text-muted">
                        <h5>Jeans</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Slim jeans</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci.
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left">99$</span>
                        <span className="float-right">
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-eye grey-text ml-3"></i>
                            <span>Quick look</span>
                          </MDBTooltip>
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-heart grey-text ml-3"></i>
                            <span>Add to watchlist</span>
                          </MDBTooltip>
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBCard narrow ecommerce className="mb-2">
                    <MDBCardImage
                      cascade
                      top
                      src="https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg"
                      alt="sample photo"
                    />
                    <MDBCardBody cascade>
                      <a href="#!" className="text-muted">
                        <h5>Shorts</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Denim shorts</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci.
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left">49$</span>
                        <span className="float-right">
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-eye grey-text ml-3"></i>
                            <span>Quick look</span>
                          </MDBTooltip>
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-heart grey-text ml-3"></i>
                            <span>Add to watchlist</span>
                          </MDBTooltip>
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBCol md="4">
                  <MDBCard narrow ecommerce className="mb-2">
                    <MDBCardImage
                      cascade
                      top
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg"
                      alt="sample photo"
                    />
                    <MDBCardBody cascade>
                      <a href="#!" className="text-muted">
                        <h5>Shoes</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Leather boots</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci.
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left">69$</span>
                        <span className="float-right">
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-eye grey-text ml-3"></i>
                            <span>Quick look</span>
                          </MDBTooltip>
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-heart grey-text ml-3"></i>
                            <span>Add to watchlist</span>
                          </MDBTooltip>
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBCard narrow ecommerce className="mb-2">
                    <MDBCardImage
                      cascade
                      top
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg"
                      alt="sample photo"
                    />
                    <MDBCardBody cascade>
                      <a href="#!" className="text-muted">
                        <h5>Jeans</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Slim jeans</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci.
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left">99$</span>
                        <span className="float-right">
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-eye grey-text ml-3"></i>
                            <span>Quick look</span>
                          </MDBTooltip>
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-heart grey-text ml-3"></i>
                            <span>Add to watchlist</span>
                          </MDBTooltip>
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBCard narrow ecommerce className="mb-2">
                    <MDBCardImage
                      cascade
                      top
                      src="https://mdbootstrap.com/img/Photos/Others/img%20(35).jpg"
                      alt="sample photo"
                    />
                    <MDBCardBody cascade>
                      <a href="#!" className="text-muted">
                        <h5>Shorts</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Denim shorts</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci.
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left">49$</span>
                        <span className="float-right">
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-eye grey-text ml-3"></i>
                            <span>Quick look</span>
                          </MDBTooltip>
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-heart grey-text ml-3"></i>
                            <span>Add to watchlist</span>
                          </MDBTooltip>
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBCol md="4">
                  <MDBCard narrow ecommerce className="mb-2">
                    <MDBCardImage
                      cascade
                      top
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(32).jpg"
                      alt="sample photo"
                    />
                    <MDBCardBody cascade>
                      <a href="#!" className="text-muted">
                        <h5>Shoes</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Leather boots</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci.
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left">69$</span>
                        <span className="float-right">
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-eye grey-text ml-3"></i>
                            <span>Quick look</span>
                          </MDBTooltip>
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-heart grey-text ml-3"></i>
                            <span>Add to watchlist</span>
                          </MDBTooltip>
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBCard narrow ecommerce className="mb-2">
                    <MDBCardImage
                      cascade
                      top
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(33).jpg"
                      alt="sample photo"
                    />
                    <MDBCardBody cascade>
                      <a href="#!" className="text-muted">
                        <h5>Jeans</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Slim jeans</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci.
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left">99$</span>
                        <span className="float-right">
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-eye grey-text ml-3"></i>
                            <span>Quick look</span>
                          </MDBTooltip>
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-heart grey-text ml-3"></i>
                            <span>Add to watchlist</span>
                          </MDBTooltip>
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBCard narrow ecommerce className="mb-2">
                    <MDBCardImage
                      cascade
                      top
                      src="https://mdbootstrap.com/img/Photos/Others/img%20(38).jpg"
                      alt="sample photo"
                    />
                    <MDBCardBody cascade>
                      <a href="#!" className="text-muted">
                        <h5>Shorts</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Denim shorts</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci.
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left">49$</span>
                        <span className="float-right">
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-eye grey-text ml-3"></i>
                            <span>Quick look</span>
                          </MDBTooltip>
                          <MDBTooltip
                            domElement
                            placement="top"
                          >
                            <i className="fa fa-heart grey-text ml-3"></i>
                            <span>Add to watchlist</span>
                          </MDBTooltip>
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our pricing plans
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard pricing>
              <div className="price header white-text blue rounded-top">
                <h2 className="number">10</h2>
                <div className="version">
                  <h5 className="mb-0">Basic</h5>
                </div>
              </div>
              <MDBCardBody className="striped mb-1">
                <ul>
                  <li>
                    <p className="mt-2">
                      <MDBIcon icon="check" className="green-text pr-2" />
                      20 GB Of Storage
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />2 Email
                      Accounts
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="times" className="red-text pr-2" />
                      24h Tech Support
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="times" className="red-text pr-2" />
                      300 GB Bandwidth
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="times" className="red-text pr-2" />
                      User Management{" "}
                    </p>
                  </li>
                </ul>
                <MDBBtn color="blue">Buy now</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard pricing>
              <div className="price header white-text indigo rounded-top">
                <h2 className="number">20</h2>
                <div className="version">
                  <h5 className="mb-0">Pro</h5>
                </div>
              </div>
              <MDBCardBody className="striped mb-1">
                <ul>
                  <li>
                    <p className="mt-2">
                      <MDBIcon icon="check" className="green-text pr-2" />
                      20 GB Of Storage
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />4 Email
                      Accounts
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      24h Tech Support
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="times" className="red-text pr-2" />
                      300 GB Bandwidth
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="times" className="red-text pr-2" />
                      User Management{" "}
                    </p>
                  </li>
                </ul>
                <MDBBtn color="indigo">Buy now</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard pricing>
              <div className="price header white-text deep-purple rounded-top">
                <h2 className="number">30</h2>
                <div className="version">
                  <h5 className="mb-0">Enterprise</h5>
                </div>
              </div>
              <MDBCardBody className="striped mb-1">
                <ul>
                  <li>
                    <p className="mt-2">
                      <MDBIcon icon="check" className="green-text pr-2" />
                      20 GB Of Storage
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />5 Email
                      Accounts
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      24h Tech Support
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      300 GB Bandwidth
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      User Management{" "}
                    </p>
                  </li>
                </ul>
                <MDBBtn color="deep-purple">Buy now</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our pricing plans
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'
              }}
            >
              <div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                <MDBCardBody>
                  <h5>Basic</h5>
                  <div className="price pt-0">
                    <h2 className="number mb-0">10</h2>
                  </div>
                  <ul className="striped mb-0">
                    <li>
                      <p>
                        <strong>1</strong> project
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>100</strong> components
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>150</strong> features
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>200</strong> members
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>250</strong> messages
                      </p>
                    </li>
                  </ul>
                  <MDBBtn outline color="white">
                    Buy now
                  </MDBBtn>
                </MDBCardBody>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'
              }}
            >
              <div className="text-white text-center pricing-card d-flex align-items-center rgba-teal-strong py-3 px-3 rounded">
                <MDBCardBody>
                  <h5>Pro</h5>
                  <div className="price pt-0">
                    <h2 className="number mb-0">20</h2>
                  </div>
                  <ul className="striped mb-0">
                    <li>
                      <p>
                        <strong>3</strong> projects
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>200</strong> components
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>250</strong> features
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>300</strong> members
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>350</strong> messages
                      </p>
                    </li>
                  </ul>
                  <MDBBtn outline color="white">
                    Buy now
                  </MDBBtn>
                </MDBCardBody>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'
              }}
            >
              <div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                <MDBCardBody>
                  <h5>Enterprise</h5>
                  <div className="price pt-0">
                    <h2 className="number mb-0">30</h2>
                  </div>
                  <ul className="striped mb-0">
                    <li>
                      <p>
                        <strong>5</strong> projects
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>300</strong> components
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>350</strong> features
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>400</strong> members
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>450</strong> messages
                      </p>
                    </li>
                  </ul>
                  <MDBBtn outline color="white">
                    Buy now
                  </MDBBtn>
                </MDBCardBody>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our pricing plans
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <h5 className="mb-4">Basic plan</h5>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="home" className="light-blue-text" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">59$</h2>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa pariatur id nobis accusamus deleniti cumque hic
                  laborum.
                </p>
                <MDBBtn rounded color="light-blue">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard className="purple-gradient">
              <MDBCardBody className="white-text">
                <h5 className="mb-4">Premium plan</h5>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="users" className="white-text" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">79$</h2>
                <p>
                  Esse corporis saepe laudantium velit adipisci cumque iste
                  ratione facere non distinctio cupiditate sequi atque.
                </p>
                <MDBBtn outline rounded color="white">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <h5 className="mb-4">Advanced plan</h5>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="chart-bar" className="light-blue-text" />
                  </div>
                </div>

                <h2 className="font-weight-bold my-4">99$</h2>
                <p className="grey-text">
                  At ab ea a molestiae corrupti numquam quo beatae minima
                  ratione magni accusantium repellat eveniet quia vitae.
                </p>
                <MDBBtn rounded color="light-blue">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our pricing plans
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <h5 className="mb-4">Basic plan</h5>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="home" className="indigo-text" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">59$</h2>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa pariatur id nobis accusamus deleniti cumque hic
                  laborum.
                </p>
                <MDBBtn rounded color="indigo">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard className="indigo">
              <MDBCardBody className="white-text">
                <h5 className="mb-4">Premium plan</h5>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="users" className="light-blue-text" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">79$</h2>
                <p>
                  Esse corporis saepe laudantium velit adipisci cumque iste
                  ratione facere non distinctio cupiditate sequi atque.
                </p>
                <MDBBtn outline rounded color="white">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <h5 className="mb-4">Advanced plan</h5>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon="chart-bar" className="indigo-text" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">99$</h2>
                <p className="grey-text">
                  At ab ea a molestiae corrupti numquam quo beatae minima
                  ratione magni accusantium repellat eveniet quia vitae.
                </p>
                <MDBBtn rounded color="indigo">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our pricing plans
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard pricing>
              <MDBCardBody>
                <h5 className="font-weight-bold mt-3">Basic</h5>
                <div className="price pt-0">
                  <h2 className="number red-text mb-0">10</h2>
                </div>
                <ul className="striped mb-1">
                  <li>
                    <p>
                      <strong>1</strong> project
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>100</strong> components
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>150</strong> features
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>200</strong> members
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>250</strong> messages
                    </p>
                  </li>
                </ul>
                <MDBBtn rounded color="danger" className="mb-4">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'
              }}
            >
              <div className="text-white text-center pricing-card d-flex align-items-center rgba-indigo-strong py-3 px-3 rounded">
                <MDBCardBody>
                  <h5 className="font-weight-bold mt-2">Pro</h5>
                  <div className="price pt-0">
                    <h2 className="number mb-0">20</h2>
                  </div>
                  <ul className="striped mb-0">
                    <li>
                      <p>
                        <strong>3</strong> projects
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>200</strong> components
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>250</strong> features
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>300</strong> members
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>350</strong> messages
                      </p>
                    </li>
                  </ul>
                  <MDBBtn outline color="white">
                    Buy now
                  </MDBBtn>
                </MDBCardBody>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard pricing>
              <MDBCardBody>
                <h5 className="font-weight-bold mt-3">Enterprise</h5>
                <div className="price pt-0">
                  <h2 className="number mb-0">30</h2>
                </div>
                <ul className="striped mb-1">
                  <li>
                    <p>
                      <strong>5</strong> projects
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>300</strong> components
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>350</strong> features
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>400</strong> members
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>450</strong> messages
                    </p>
                  </li>
                </ul>
                <MDBBtn rounded color="danger" className="mb-4">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our pricing plans
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard pricing className="white-text">
              <div className="aqua-gradient rounded-top">
                <h4
                  className="option"
                  style={{
                    padding: "2.5rem",
                    marginBottom: 0,
                    fontWeight: 500
                  }}
                >
                  BASIC
                </h4>
              </div>
              <MDBCardBody className="striped green-striped card-background px-5">
                <h2 className="my-4 pb-3 h1">20$</h2>
                <ul>
                  <li>
                    <p>
                      <strong>1</strong> project
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>100</strong> components
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>150</strong> features
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>200</strong> members
                    </p>
                  </li>
                </ul>
                <MDBBtn rounded gradient="aqua" className="mb-3 mt-3">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard pricing className="white-text">
              <div className="peach-gradient rounded-top">
                <h4
                  className="option"
                  style={{
                    padding: "2.5rem",
                    marginBottom: 0,
                    fontWeight: 500
                  }}
                >
                  PRO
                </h4>
              </div>
              <MDBCardBody className="striped orange-striped card-background px-5">
                <h2 className="my-4 pb-3 h1">80$</h2>
                <ul>
                  <li>
                    <p>
                      <strong>3</strong> projects
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>200</strong> components
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>250</strong> features
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>300</strong> members
                    </p>
                  </li>
                </ul>
                <MDBBtn rounded gradient="peach" className="mb-3 mt-3">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard pricing className="white-text">
              <div className="purple-gradient rounded-top">
                <h4
                  className="option"
                  style={{
                    padding: "2.5rem",
                    marginBottom: 0,
                    fontWeight: 500
                  }}
                >
                  ENTERPRISE
                </h4>
              </div>
              <MDBCardBody className="striped purple-striped card-background px-5">
                <h2 className="my-4 pb-3 h1">$100</h2>
                <ul>
                  <li>
                    <p>
                      <strong>5</strong> projects
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>300</strong> components
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>350</strong> features
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>400</strong> members
                    </p>
                  </li>
                </ul>
                <MDBBtn rounded gradient="purple" className="mb-3 mt-3">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default EcommercePage;
