import React  from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBTestimonial, MDBAvatar, MDBIcon } from "mdbreact";
import DocsLink from "../../../components/docsLink";

const TestimonialsMultiPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Testimonials"
        href="https://mdbootstrap.com/docs/react/sections/testimonials/#v-4"
      />
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Testimonials v.4
        </h2>
        <MDBCarousel
          activeItem={1}
          length={3}
          slide={true}
          showControls={true}
          multiItem
          testimonial
        >
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem itemId="1">
                <MDBCol md="4">
                  <MDBTestimonial>
                    <MDBAvatar className="mx-auto">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </MDBAvatar>
                    <h4 className="font-weight-bold mt-4">Anna Deynah</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Web Designer
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Quod eos id officiis hic tenetur.
                    </p>
                    <div className="grey-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star-half" />
                    </div>
                  </MDBTestimonial>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBTestimonial>
                    <MDBAvatar className="mx-auto">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </MDBAvatar>
                    <h4 className="font-weight-bold mt-4">John Doe</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Web Developer
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis laboriosam.
                    </p>
                    <div className="grey-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </MDBTestimonial>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBTestimonial>
                    <MDBAvatar className="mx-auto">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </MDBAvatar>
                    <h4 className="font-weight-bold mt-4">Abbey Clark</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Photographer
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Quis autem vel eum iure reprehenderit qui in ea
                      voluptate velit esse quam nihil molestiae.
                    </p>
                    <div className="grey-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </MDBTestimonial>
                </MDBCol>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBCol md="4">
                  <MDBTestimonial>
                    <MDBAvatar className="mx-auto">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </MDBAvatar>
                    <h4 className="font-weight-bold mt-4">Blake Dabney</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Web Designer
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis laboriosam.
                    </p>
                    <div className="grey-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star-half" />
                    </div>
                  </MDBTestimonial>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBTestimonial>
                    <MDBAvatar className="mx-auto">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </MDBAvatar>
                    <h4 className="font-weight-bold mt-4">Andrea Clay</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Front-end developer
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Quod eos id officiis hic tenetur quae.
                    </p>
                    <div className="grey-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </MDBTestimonial>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBTestimonial>
                    <MDBAvatar className="mx-auto">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </MDBAvatar>
                    <h4 className="font-weight-bold mt-4">Cami Gosse</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Phtographer
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium.
                    </p>
                    <div className="grey-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </MDBTestimonial>
                </MDBCol>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBCol md="4">
                  <MDBTestimonial>
                    <MDBAvatar className="mx-auto">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </MDBAvatar>
                    <h4 className="font-weight-bold mt-4">Bobby Haley</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Web Developer
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Quod eos id officiis hic tenetur quae.
                    </p>
                    <div className="grey-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </MDBTestimonial>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBTestimonial>
                    <MDBAvatar className="mx-auto">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </MDBAvatar>
                    <h4 className="font-weight-bold mt-4">Elisa Janson</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Marketer
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium.
                    </p>
                    <div className="grey-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star-half" />
                    </div>
                  </MDBTestimonial>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <MDBTestimonial>
                    <MDBAvatar className="mx-auto">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </MDBAvatar>
                    <h4 className="font-weight-bold mt-4">Rob Jacobs</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Front-end developer
                    </h6>
                    <p className="font-weight-normal">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis laboriosam.
                    </p>
                    <div className="grey-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </MDBTestimonial>
                </MDBCol>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  );
}

export default TestimonialsMultiPage;
