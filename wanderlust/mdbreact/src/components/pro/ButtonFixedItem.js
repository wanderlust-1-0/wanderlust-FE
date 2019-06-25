import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Fa from "../Fa";
import Waves from "../Waves";

class ButtonFixed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {},
      buttonStyle: {
        transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
        opacity: "0"
      }
    };
  }

  handleClick(e) {
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
  }

  onClick = e => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    this.props.onClick && this.props.onClick()
  }

  render() {
    let {
      active,
      block,
      className,
      color,
      outline,
      size,
      rounded,
      gradient,
      floating,
      flat,
      role,
      type,
      icon,
      iconBrand,
      iconClass,
      iconLight,
      iconRegular,
      iconSize,
      innerRef,
      buttonStyle,
      ...attributes
    } = this.props;

    const classes = classNames(
      size && `btn-${size}`,
      "btn-floating",
      color ? color : false,
      "Ripple-parent",
      className
    );

    return (
      <li>
        <a
          {...attributes}
          style={this.props.buttonStyle}
          onClick={this.onClick}
          onMouseDown={this.handleClick.bind(this)}
          onTouchStart={this.handleClick.bind(this)}
          className={classes}
        >
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
          {this.props.disabled ? (
            false
          ) : (
              <Waves
                cursorPos={this.state.cursorPos}
                outline={outline}
                flat={flat}
              />
            )}
        </a>
      </li>
    );
  }
}

ButtonFixed.defaultProps = {
  color: "default"
};

ButtonFixed.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  gradient: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['lg', 'sm']),
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  buttonStyle: PropTypes.object
};

export default ButtonFixed;
export { ButtonFixed as MDBBtnFixedItem };
