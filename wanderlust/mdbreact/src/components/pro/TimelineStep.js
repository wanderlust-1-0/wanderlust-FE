import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Fa from "../Fa";

const TimelineStep = props => {
  const {
    href,
    color,
    icon,
    iconBrand,
    iconClass,
    iconLight,
    iconRegular,
    iconSize,
    className,
    children,
    inverted,
    colorful,
    hoverable,
    label
  } = props;

  const circleClasses = classNames(
    "circle",
    "z-depth-1-half",
    color ? color : "primary-color",
    className
  );

  const stepContentClasses = classNames(
    "step-content",
    "z-depth-1",
    "ml-xl-0",
    colorful ? "p-0 mt-2" : "p-4",
    hoverable && "hoverable"
  );

  const liClasses = classNames(inverted && "timeline-inverted");

  return (
    <li className={liClasses}>
      <a href={href}>
        <span className={circleClasses}>
          {
            icon &&
            <Fa
              icon={icon}
              size={iconSize}
              brand={iconBrand}
              light={iconLight}
              regular={iconRegular}
              className={iconClass}
            />
          }
          {label}
        </span>
      </a>
      <div className={stepContentClasses}>{children}</div>
    </li>
  );
};

TimelineStep.propTypes = {
  href: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  className: PropTypes.string,
};

TimelineStep.defaultProps = {
  href: "#"
};

export default TimelineStep;
export { TimelineStep as MDBTimelineStep };
