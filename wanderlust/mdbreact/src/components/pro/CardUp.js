import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class CardUp extends Component {
  render() {
    const { className, tag: Tag, color, gradient, ...attributes } = this.props;

    const classes = classNames(
      "card-up",
      color && color + "-color",
      gradient && gradient + "-gradient",
      className
    );

    return <Tag {...attributes} className={classes} />;
  }
}

CardUp.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardUp.defaultProps = {
  tag: "div"
};

export default CardUp;
export { CardUp as MDBCardUp };
