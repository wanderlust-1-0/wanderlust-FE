import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "../Waves";
import "./Chip.css";
import Fa from '../Fa';

class Chip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleClick(e) {
    // Get Cursor Position
    e.stopPropagation();
    e.preventDefault();
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
  }

  handleCloseClick(e) {
    if (this.props.handleClose) {
      this.props.handleClose(e);
    }
  }

  render() {
    const {
      className,
      tag: Tag,
      size,
      bgColor,
      text,
      gradient,
      src,
      alt,
      close,
      waves,
      handleClose,
      ...attributes
    } = this.props;

    const classes = classNames(
      "chip",
      size && "chip-" + size,
      bgColor && bgColor,
      text && text + "-text",
      gradient && gradient + "-gradient",
      waves && "Ripple-parent",
      className
    );

    return (
      <Tag
        {...attributes}
        className={classes}
        onMouseDown={this.handleClick.bind(this)}
        onTouchStart={this.handleClick.bind(this)}
      >
        {src && <img src={src} alt={alt} />}
        {this.props.children}
        {waves && <Waves cursorPos={this.state.cursorPos} />}
        {close && (
          <Fa icon="times" className="close" onClick={this.handleCloseClick} />
        )}
      </Tag>
    );
  }
}

Chip.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  gradient: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  close: PropTypes.bool,
  handleClose: PropTypes.func
};

Chip.defaultProps = {
  tag: "div"
};

export default Chip;
export { Chip as MDBChip };
