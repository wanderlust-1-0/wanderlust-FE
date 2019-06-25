import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import selectContextHOC from "./SelectContext";

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiple: this.props.context.multiple || false,
      checked: this.props.checked || this.props.selected || false
    };
    this.optionRef = React.createRef();
  }

  componentDidMount() {
    if (!this.state.multiple) {
      this.state.checked && this.optionRef.current.click();
    } else {
      if (!this.props.disabled) {
        !this.state.checked && this.optionRef.current.classList.add("active");
        this.selectOption();
      }
    }
  }

  selectOption = () => {
    if (!this.props.disabled) {
      let selectedOption = this.optionRef.current;
      let value = [];
      let text;
      let options = selectedOption.parentNode.children;

      if (this.state.multiple) {
        text = [];
        if (selectedOption.classList.contains("active")) {
          selectedOption.classList.remove("active");
          this.setState({ checked: false });
        } else {
          selectedOption.classList.add("active");
          this.setState({ checked: true });
        }

        // iterate throught child nodes options and add checked to arr
        Array.from(options).forEach(option => {
          if (option.classList.contains("active")) {
            text.push(option.textContent);
            option.getElementsByTagName("input")[0].value
              ? value.push(option.getElementsByTagName("input")[0].value)
              : value.push(option.textContent);
          }
        });
      } else {
        Array.from(selectedOption.children).forEach(child => {
          if (child.nodeName === "SPAN") {
            text = child.textContent;
            this.props.value ? value.push(this.props.value) : value.push(text);
          }
        });
        Array.from(options).forEach(option =>
          option.classList.remove("active")
        );
        selectedOption.classList.add("active");
      }
      this.props.context.triggerOptionChange(value, text);
    }
  };

  render() {
    const {
      className,
      children,
      disabled,
      separator,
      icon,
      triggerOptionClick,
      value,
      ...attributes
    } = this.props;

    const classes = classNames(
      (disabled || separator) ? "disabled" : "",
      separator ? "optgroup" : "",
      className,
      "justify-content-between align-items-center"
    );

    let input = null;
    let label = null;
    if (this.state.multiple) {
      if (!disabled) {
        input = (
          <input
            type="checkbox"
            value={value}
            onChange={() => false}
            className="form-check-input"
            checked={this.state.checked}
          />
        );
        label = (
          <label
            style={{ height: "10px" }}
            data-multiple={this.state.multiple}
          />
        );
      } else {
        input = <input type="checkbox" className="form-check-input" disabled />;
        label = (
          <label
            style={{ height: "10px" }}
            data-multiple={this.state.multiple}
          />
        );
      }
    }

    return (
      <li
        ref={this.optionRef}
        {...attributes}
        data-multiple={this.state.multiple}
        className={classes}
        onClick={this.selectOption}
        style={{ display: "flex" }}
      >
        <span data-multiple={this.state.multiple} className="filtrable" style={{ flex: "1" }}>
          {!separator ? input : null}
          {label}
          {children}
        </span>
        {icon && (
          <img src={this.props.icon} alt="icon" className="rounded-circle" />
        )}
      </li>
    );
  }
}

Option.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  triggerOptionClick: PropTypes.func,
  value: PropTypes.any,
  separator: PropTypes.bool
};

Option.defaultProps = {
  children: "span",
  checked: false,
  className: "",
  disabled: false,
  separator: false,
  icon: "",
  triggerOptionClick: () => {},
  value: ""
};

export default (Option = selectContextHOC(Option));
export { Option as MDBSelectOption };