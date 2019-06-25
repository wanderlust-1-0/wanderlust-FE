import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Avatar extends Component {
  render() {
    const { className, tag: Tag, round, circle, ...attributes } = this.props;

    const classes = classNames(
      "avatar",
      round && "rounded",
      circle && "rounded-circle",
      className
    );

    return <Tag {...attributes} className={classes} />;
  }
}

Avatar.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  round: PropTypes.bool,
  circle: PropTypes.bool
};

Avatar.defaultProps = {
  tag: "div",
  round: false,
  circle: false
};

export default Avatar;
export { Avatar as MDBAvatar };
