import React from "react";
import "./Timeline.css";

const Timeline = props => {
  const { children } = props;

  return <ul className="stepper stepper-vertical timeline pl-0">{children}</ul>;
};

export default Timeline;
export { Timeline as MDBTimeline };
