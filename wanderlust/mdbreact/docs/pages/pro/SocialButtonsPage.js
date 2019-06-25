import React from "react";
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import DocsLink from "../../components/docsLink";

const SocialButtonsPage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title="Social Buttons"
        href="https://mdbootstrap.com/docs/react/components/buttons/"
      />
      <MDBContainer>
        <h4 className="mt-4">Full name social button</h4>
        <MDBBtn social="fb">
          <MDBIcon brand icon="facebook" className="pr-1" /> Facebook
        </MDBBtn>
        <MDBBtn social="tw">
          <MDBIcon brand icon="twitter" className="pr-1" /> Twitter
        </MDBBtn>
        <MDBBtn social="gplus">
          <MDBIcon brand icon="google-plus" className="pr-1" /> Google +
        </MDBBtn>
        <MDBBtn social="li">
          <MDBIcon brand icon="linkedin" className="pr-1" /> Linkedin
        </MDBBtn>
        <MDBBtn social="ins">
          <MDBIcon brand icon="instagram" className="pr-1" /> Instagram
        </MDBBtn>
        <MDBBtn social="pin">
          <MDBIcon brand icon="pinterest" className="pr-1" /> Pinterest
        </MDBBtn>
        <MDBBtn social="yt">
          <MDBIcon brand icon="youtube" className="pr-1" /> Youtube
        </MDBBtn>
        <MDBBtn social="vk">
          <MDBIcon brand icon="vk" className="pr-1" /> Vkontakte
        </MDBBtn>
        <MDBBtn social="so">
          <MDBIcon brand icon="stack-overflow" className="pr-1" /> Stack Overflow
        </MDBBtn>
        <MDBBtn social="slack">
          <MDBIcon brand icon="slack" className="pr-1" /> Slack
        </MDBBtn>
        <MDBBtn social="git">
          <MDBIcon brand icon="github" className="pr-1" /> Github
        </MDBBtn>
        <MDBBtn social="comm">
          <MDBIcon icon="comments" className="pr-1" /> Comments
        </MDBBtn>
        <MDBBtn social="email">
          <MDBIcon icon="envelope" className="pr-1" /> Email
        </MDBBtn>
        <MDBBtn social="dribbble">
          <MDBIcon brand icon="dribbble" className="pr-1" /> Dribbble
        </MDBBtn>
        <h4 className="mt-4">Large button</h4>
        <MDBBtn social="fb" size="lg">
          <MDBIcon brand icon="facebook" className="pr-1" /> Facebook
        </MDBBtn>
        <h4 className="mt-4">Simple social button</h4>
        <MDBBtn social="fb">
          <MDBIcon brand icon="facebook" />
        </MDBBtn>
        <MDBBtn social="tw">
          <MDBIcon brand icon="twitter" />
        </MDBBtn>
        <MDBBtn social="gplus">
          <MDBIcon brand icon="google-plus" />
        </MDBBtn>
        <MDBBtn social="li">
          <MDBIcon brand icon="linkedin" />
        </MDBBtn>
        <MDBBtn social="ins">
          <MDBIcon brand icon="instagram" />
        </MDBBtn>
        <MDBBtn social="pin">
          <MDBIcon brand icon="pinterest" />
        </MDBBtn>
        <MDBBtn social="yt">
          <MDBIcon brand icon="youtube" />
        </MDBBtn>
        <MDBBtn social="vk">
          <MDBIcon brand icon="vk" />
        </MDBBtn>
        <MDBBtn social="so">
          <MDBIcon brand icon="stack-overflow" />
        </MDBBtn>
        <MDBBtn social="slack">
          <MDBIcon brand icon="slack" />
        </MDBBtn>
        <MDBBtn social="git">
          <MDBIcon brand icon="github" />
        </MDBBtn>
        <MDBBtn social="comm">
          <MDBIcon icon="comments" />
        </MDBBtn>
        <MDBBtn social="email">
          <MDBIcon icon="envelope" />
        </MDBBtn>
        <MDBBtn social="dribbble">
          <MDBIcon brand icon="dribbble" />
        </MDBBtn>
        <h4 className="mt-4">Large button</h4>
        <MDBBtn social="fb" size="lg">
          <MDBIcon brand icon="facebook" />
        </MDBBtn>
        <h4 className="mt-4">Floating social buttons</h4>
        <MDBBtn size="lg" tag="a" floating social="fb">
          <MDBIcon brand icon="facebook" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="tw">
          <MDBIcon brand icon="twitter" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="gplus">
          <MDBIcon brand icon="google-plus" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="li">
          <MDBIcon brand icon="linkedin" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="ins">
          <MDBIcon brand icon="instagram" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="pin">
          <MDBIcon brand icon="pinterest" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="yt">
          <MDBIcon brand icon="youtube" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="vk">
          <MDBIcon brand icon="vk" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="so">
          <MDBIcon brand icon="stack-overflow" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="slack">
          <MDBIcon brand icon="slack" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="git">
          <MDBIcon brand icon="github" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="comm">
          <MDBIcon icon="comments" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="email">
          <MDBIcon icon="envelope" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="dribbble">
          <MDBIcon brand icon="dribbble" />
        </MDBBtn>
        <h4 className="mt-4">Sizes</h4>
        <MDBBtn size="lg" tag="a" floating social="fb">
          <MDBIcon brand icon="facebook" />
        </MDBBtn>
        <MDBBtn tag="a" floating social="fb">
          <MDBIcon brand icon="facebook" />
        </MDBBtn>
        <MDBBtn size="sm" tag="a" floating social="fb">
          <MDBIcon brand icon="facebook" />
        </MDBBtn>
        <h4 className="mt-4">Full name social counters</h4>
        <MDBBtn social="fb">
          <MDBIcon brand icon="facebook" className="pr-1" /> Facebook
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="tw">
          <MDBIcon brand icon="twitter" className="pr-1" /> Twitter
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="gplus">
          <MDBIcon brand icon="google-plus" className="pr-1" /> Google +
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="li">
          <MDBIcon brand icon="linkedin" className="pr-1" /> Linkedin
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="ins">
          <MDBIcon brand icon="instagram" className="pr-1" /> Instagram
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="pin">
          <MDBIcon brand icon="pinterest" className="pr-1" /> Pinterest
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="yt">
          <MDBIcon brand icon="youtube" className="pr-1" /> Youtube
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="vk">
          <MDBIcon brand icon="vk" className="pr-1" /> Vkontakte
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="so">
          <MDBIcon brand icon="stack-overflow" className="pr-1" /> Stack Overflow
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="slack">
          <MDBIcon brand icon="slack" className="pr-1" /> Slack
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="git">
          <MDBIcon brand icon="github" className="pr-1" /> Github
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="comm">
          <MDBIcon icon="comments" className="pr-1" /> Comments
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="email">
          <MDBIcon icon="envelope" className="pr-1" /> Email
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn social="dribbble">
          <MDBIcon brand icon="dribbble" className="pr-1" /> Dribbble
        </MDBBtn>
        <span className="counter">22</span>
        <h4 className="mt-4">Simple social counters </h4>
        <MDBBtn size="lg" social="fb">
          <MDBIcon brand icon="facebook" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="tw">
          <MDBIcon brand icon="twitter" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="gplus">
          <MDBIcon brand icon="google-plus" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="li">
          <MDBIcon brand icon="linkedin" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="ins">
          <MDBIcon brand icon="instagram" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="pin">
          <MDBIcon brand icon="pinterest" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="yt">
          <MDBIcon brand icon="youtube" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="vk">
          <MDBIcon brand icon="vk" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="so">
          <MDBIcon brand icon="stack-overflow" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="slack">
          <MDBIcon brand icon="slack" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="git">
          <MDBIcon brand icon="github" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="comm">
          <MDBIcon icon="comments" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="email">
          <MDBIcon icon="envelope" />
        </MDBBtn>
        <span className="counter">22</span>
        <MDBBtn size="lg" social="dribbble">
          <MDBIcon brand icon="dribbble" />
        </MDBBtn>
        <span className="counter">22</span>
        <h4 className="mt-4">Social brand icons</h4>
        <a href="#!" className="fb-ic mr-3">
          <MDBIcon brand icon="facebook" />
        </a>
        <a href="#!" className="tw-ic mr-3">
          <MDBIcon brand icon="twitter" />
        </a>
        <a href="#!" className="gplus-ic mr-3">
          <MDBIcon brand icon="google-plus" />
        </a>
        <a href="#!" className="li-ic mr-3">
          <MDBIcon brand icon="linkedin" />
        </a>
        <a href="#!" className="ins-ic mr-3">
          <MDBIcon brand icon="instagram" />
        </a>
        <a href="#!" className="pin-ic mr-3">
          <MDBIcon brand icon="pinterest" />
        </a>
        <a href="#!" className="yt-ic mr-3">
          <MDBIcon brand icon="youtube" />
        </a>
        <a href="#!" className="vk-ic mr-3">
          <MDBIcon brand icon="vk" />
        </a>
        <a href="#!" className="so-ic mr-3">
          <MDBIcon brand icon="stack-overflow" />
        </a>
        <a href="#!" className="slack-ic mr-3">
          <MDBIcon brand icon="slack" />
        </a>
        <a href="#!" className="git-ic mr-3">
          <MDBIcon brand icon="github" />
        </a>
        <a href="#!" className="comm-ic mr-3">
          <MDBIcon icon="comments" />
        </a>
        <a href="#!" className="email-ic mr-3">
          <MDBIcon icon="envelope" />
        </a>
        <a href="#!" className="dribbble-ic mr-3">
          <MDBIcon brand icon="dribbble" />
        </a>
      </MDBContainer>
    </MDBContainer>
  );
};

export default SocialButtonsPage;
