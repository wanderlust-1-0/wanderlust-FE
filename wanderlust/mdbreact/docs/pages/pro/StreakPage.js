import React from 'react';
import { MDBStreak, MDBContainer } from 'mdbreact';
import DocsLink from "./../../components/docsLink";

const StreakPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Streak"
        href="https://mdbootstrap.com/plugins/react/streak/"
      />
      <MDBStreak
        size="md"
        by="Steve Jobs"
        overlayClass="white-text rgba-black-light pattern-1"
        photo="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img(115).jpg"
      >
        The people who are crazy enough to think they can change the world are the ones who do
      </MDBStreak>
      <MDBStreak by="Steve Jobs"  >
        The people who are
        crazy enough to think they can change the world are the ones who do.
      </MDBStreak>

      <MDBStreak
        by="Garry Winogrand"
        size="lg"
        byClass="grey-text font-weight-bold"
        wrapperClass="blue lighten-4"
        quoteClass="font-weight-bold">
         I photograph to see what the world looks like in photographs.
        </MDBStreak>

    </MDBContainer>
  )
}

export default StreakPage;


