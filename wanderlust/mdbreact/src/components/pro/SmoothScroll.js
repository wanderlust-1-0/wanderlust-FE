import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "./../Waves";
import { Link } from "react-scroll";

class SmoothScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
  }

  handleClick = e => {
    if (!this.props.disabled) {
      e.stopPropagation();
      // Waves - Get Cursor Position
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({ cursorPos: cursorPos });
    }
  };

  render() {
    const {
      children,
      className,
      disabled,
      active,
      to,
      spy,
      smooth,
      offset,
      duration,
      block,
      color,
      outline,
      size,
      rounded,
      gradient,
      floating,
      flat,
      social,
      btn,
      fixed,
      bottom,
      right,
      top,
      left,
      ...attributes
    } = this.props;

    const classes = classNames(
      "nav-link",
      disabled ? "disabled" : "Ripple-parent",
      active && "active",
      (btn || floating) && "btn",
      floating && "btn-floating",
      flat
        ? "btn-flat"
        : gradient
          ? `${gradient}-gradient`
          : `btn${outline ? "-outline" : ""}-${color}`,
      size ? `btn-${size}` : false,
      rounded ? "btn-rounded" : false,
      block ? "btn-block" : false,
      social ? "btn-" + social : false,
      "Ripple-parent",
      className
    );

    const fixedStyles = {
      position: "fixed",
      top: top ? `${top}px` : null,
      bottom: bottom ? `${bottom}px` : !top ? '45px' : null,
      left: left ? `${left}px` : null,
      right: right ? `${right}px` : !left ? '24px' : null,
    } 

    return (
      <Link
        className={classes}
        onMouseUp={this.handleClick}
        onTouchStart={this.handleClick}
        to={to}
        spy={spy}
        smooth={smooth}
        offset={offset}
        duration={duration}
        style={ fixed ? fixedStyles : null }
        {...attributes}
      >
        {children}
        {this.props.disabled ? (
          false
        ) : (
            <Waves cursorPos={this.state.cursorPos} />
          )}
      </Link>
    );
  }
}

SmoothScroll.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  spy: PropTypes.bool,
  smooth: PropTypes.bool,
  offset: PropTypes.number,
  duration: PropTypes.number,
  block: PropTypes.bool,
  color: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.string,
  rounded: PropTypes.bool,
  gradient: PropTypes.string,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  social: PropTypes.string,
  action: PropTypes.bool,
  fixed: PropTypes.bool,
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
};

SmoothScroll.defaultProps = {
  active: false,
  className: "",
  disabled: false,
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500
}

export default SmoothScroll;
export { SmoothScroll as MDBSmoothScroll };
