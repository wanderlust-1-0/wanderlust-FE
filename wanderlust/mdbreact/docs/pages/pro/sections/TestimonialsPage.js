import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardUp, MDBAvatar, MDBCardBody, MDBIcon, MDBCarousel, MDBCarouselInner, MDBCarouselItem,   MDBTestimonial } from "mdbreact";
import DocsLink from "../../../components/docsLink";

const  TestimonialsPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Testimonials"
        href="https://mdbootstrap.com/docs/react/sections/testimonials/"
      />
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Testimonials v.1
        </h2>
        <p className="dark-grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>

        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              <MDBCardUp color="info" />
              <MDBAvatar className="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">John Doe</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon icon="quote-left" className="pr-2" />
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              <MDBCardUp gradient="blue" />
              <MDBAvatar className="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">Anna Aston</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon icon="quote-left" className="pr-2" />
                  Neque cupiditate assumenda in maiores repudiandae mollitia
                  architecto.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              <MDBCardUp className="indigo" />
              <MDBAvatar className="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">Maria Kate</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon icon="quote-left" className="pr-2" />
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Testimonials v.2
        </h2>

        <MDBCarousel
          activeItem={1}
          length={3}
          testimonial
          interval={false}
          showIndicators={false}
          className="no-flex"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBTestimonial>
                <MDBAvatar className="mx-auto mb-4">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                    className="rounded-circle img-fluid"
                    alt=""
                  />
                </MDBAvatar>
                <p>
                  <MDBIcon icon="quote-left" /> Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quod eos id officiis hic
                  tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Dolore cum accusamus
                  eveniet molestias voluptatum inventore laboriosam labore
                  sit, aspernatur praesentium iste impedit quidem dolor
                  veniam.
                </p>
                <h4 className="font-weight-bold">Anna Deynah</h4>
                <h6 className="font-weight-bold my-3">
                  Founder at ET Company
                </h6>
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star-half" className="blue-text" />
              </MDBTestimonial>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBTestimonial>
                <MDBAvatar className="mx-auto mb-4">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                    className="rounded-circle img-fluid"
                    alt=""
                  />
                </MDBAvatar>
                <p>
                  <MDBIcon icon="quote-left" /> Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore.
                </p>
                <h4 className="font-weight-bold">Maria Kate</h4>
                <h6 className="font-weight-bold my-3">
                  Photographer at Studio LA
                </h6>
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
              </MDBTestimonial>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBTestimonial>
                <MDBAvatar className="mx-auto mb-4">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                    className="rounded-circle img-fluid"
                    alt=""
                  />
                </MDBAvatar>
                <p>
                  <MDBIcon icon="quote-left" /> Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium.
                </p>
                <h4 className="font-weight-bold">John Doe</h4>
                <h6 className="font-weight-bold my-3">
                  Front-end Developer in NY
                </h6>
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
              </MDBTestimonial>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>

      <section className="team-section text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Testimonials v.3
        </h2>
        <p className="dark-grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>

        <MDBRow className="text-center">
          <MDBCol md="4" className="mb-md-0 mb-5">
            <MDBTestimonial>
              <MDBAvatar className="mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                  alt=""
                  className="rounded-circle z-depth-1 img-fluid"
                />
              </MDBAvatar>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                Anna Deynah
              </h4>
              <h6 className="font-weight-bold blue-text my-3">
                Web Designer
              </h6>
              <p className="font-weight-normal dark-grey-text">
                <MDBIcon icon="quote-left" className="pr-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <div className="orange-text">
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star-half" />
              </div>
            </MDBTestimonial>
          </MDBCol>
          <MDBCol md="4" className="mb-md-0 mb-5">
            <MDBTestimonial>
              <MDBAvatar className="mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                  alt=""
                  className="rounded-circle z-depth-1 img-fluid"
                />
              </MDBAvatar>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                John Doe
              </h4>
              <h6 className="font-weight-bold blue-text my-3">
                Web Developer
              </h6>
              <p className="font-weight-normal dark-grey-text">
                <MDBIcon icon="quote-left" className="pr-2" />
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <div className="orange-text">
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
              </div>
            </MDBTestimonial>
          </MDBCol>
          <MDBCol md="4">
            <MDBTestimonial>
              <MDBAvatar className="mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  alt=""
                  className="rounded-circle z-depth-1 img-fluid"
                />
              </MDBAvatar>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                Maria Kate
              </h4>
              <h6 className="font-weight-bold blue-text my-3">
                Photographer
              </h6>
              <p className="font-weight-normal dark-grey-text">
                <MDBIcon icon="quote-left" className="pr-2" />
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <div className="orange-text">
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
              </div>
            </MDBTestimonial>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default TestimonialsPage;
