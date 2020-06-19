import React from "react";
import { Redirect } from "react-router";

class Logout extends React.Component {
  componentDidMount() {
    localStorage.removeItem("firebase_jwt");
  }

  render() {
    return <Redirect to='/' />;
  }
}

export default Logout;
