import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function RotatingCard(props) {
  const {
    className,
    tag: Tag,
    innerTag: InnerTag,
    flipped,
    ...attributes
  } = props;

  const classes = classNames(
    "card-rotating effect__click",
    props.flipped && "flipped",
    className
  );

  return (
    <Tag {...attributes} className="card-wrapper">
      <InnerTag className={classes}>{props.children}</InnerTag>
    </Tag>
  );
}

RotatingCard.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  flipped: PropTypes.bool
};

RotatingCard.defaultProps = {
  tag: "div",
  innerTag: "div",
  flipped: false
};

export default RotatingCard;
export { RotatingCard as MDBRotatingCard };
