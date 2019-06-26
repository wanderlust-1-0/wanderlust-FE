import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class InputSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ value: this.props.checked });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.checked !== this.state.value) {
      this.setState({ value: this.props.checked });
    }
  }
  
  handleChange(event) {
    this.setState({ value: !this.state.value });
    this.props.getValue && this.props.getValue(event.target.checked);
    this.props.onChange && this.props.onChange(event);
  }

  render() {
    const {
      className,
      checked,
      disabled,
      getValue,
      labelLeft,
      labelRight,
      ...attributes
    } = this.props;

    const classes = classNames("switch", className);
    return (
      <div {...attributes} className={classes}>
        <label>
          {labelLeft}
          <input
            disabled={this.props.disabled}
            value={this.state.value}
            checked={this.state.value}
            onChange={event => this.handleChange(event)}
            type="checkbox"
          />
          <span className="lever" />
          {labelRight}
        </label>
      </div>
    );
  }
}

InputSwitch.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  labelLeft: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number, 
    PropTypes.object
  ]),
  labelRight: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number, 
    PropTypes.object
  ]),
  onChange: PropTypes.func
};

InputSwitch.defaultProps = {
  checked: false,
  getValue: false,
  labelLeft: "Off",
  labelRight: "On"
};

export default InputSwitch;
export { InputSwitch as MDBSwitch };
