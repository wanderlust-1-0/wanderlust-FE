import React, { Component } from "react";
import PropTypes from "prop-types";
import { MDBInput } from "../Input";
import classNames from "classnames";

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.valueDefault,
      suggestions: [],
      choosed: false,
      filteredSuggestions: [],
      focusedListItem: 0
    };

    this.suggestionsList = null;
  }

  componentDidMount() {
    this.setState({ suggestions: this.filterRepeated(this.props.data) });
    window.addEventListener('click', this.outsideClickHandler)
  }

  componentDidUpdate(prevProps, prevState) {
    (prevState.value !== this.state.value) && this.props.getValue && this.props.getValue(this.state.value);

    prevProps.value !== this.props.value && this.setState({ value: this.props.value });

    prevProps.data !== this.props.data && this.setState({ suggestions: this.filterRepeated(this.props.data) });
  }
  
  componentWillUnmount() {
    window.removeEventListener('click', this.outsideClickHandler);
  }

  outsideClickHandler = e => {
    this.suggestionsList && e.target !== this.suggestionsList && this.setState({ choosed: true })
  }

  filterRepeated = data => data.filter((el, index) => data.indexOf(el) === index);

  handleInput = e => {
    let { value } = e.target;

    this.setState({
      value,
      choosed: false,
      focusedListItem: 0
    });

    if (value !== '') {
      this.setSuggestions(value);
    }
  }

  setSuggestions = value => {
    let filteredSuggestions = this.state.suggestions.filter(suggest => suggest.toLowerCase().includes(value.toLowerCase().trim()));
    this.setState({ filteredSuggestions });
  }

  handleClear = () => this.setState({ value: '', focusedListItem: 0 })

  handleSelect = () => {
    let value = this.state.filteredSuggestions[this.state.focusedListItem];

    if (value) {
      this.setState({
        value,
        focusedListItem: 0,
        choosed: true,
      });
    }
  }

  keyDownHandler = e => {
    let { filteredSuggestions, focusedListItem } = this.state;

    if (this.suggestionsList && this.state.filteredSuggestions) {
      let suggestionsListNodes = this.suggestionsList.childNodes;

      suggestionsListNodes.length >= 5 && suggestionsListNodes[this.state.focusedListItem].scrollIntoView({ block: "center", behavior: "smooth" });

      if (e.keyCode === 13) {
        this.handleSelect();
        e.target.blur();
      }

      e.keyCode === 40 && focusedListItem < filteredSuggestions.length - 1 && this.setState({ focusedListItem: focusedListItem + 1 })

      e.keyCode === 38 && focusedListItem > 0 && this.setState({ focusedListItem: focusedListItem - 1 })
    }
  }

  updateFocus = index => this.setState({ focusedListItem: index })

  render() {
    const { value, filteredSuggestions, choosed } = this.state;

    const {
      clear,
      clearColor,
      clearSize,
      clearClass,
      disabled,
      id,
      className,
      label,
      icon,
      iconBrand,
      iconClass,
      iconLight,
      iconRegular,
      iconSize,
      size,
      labelClass,
      placeholder,
      valueDefault
    } = this.props;

    const btnStyles = classNames(
      clearClass,
      'mdb-autocomplete-clear'
    )

    return (
      <div style={{ position: "relative" }}>
        <MDBInput
          icon={icon}
          iconSize={iconSize}
          iconBrand={iconBrand}
          iconLight={iconLight}
          iconRegular={iconRegular}
          iconClass={iconClass}
          id={id}
          className={className}
          label={label}
          labelClass={labelClass}
          hint={placeholder}
          disabled={disabled}
          value={value}
          valueDefault={valueDefault}
          onChange={this.handleInput}
          onKeyDown={this.keyDownHandler}
          size={size}
        >
          {
            clear && value &&
            <button
              onClick={this.handleClear}
              className={btnStyles}
              style={{ visibility: "visible" }}
            >
              <svg fill={clearColor} height={clearSize} viewBox="0 0 24 24" width={clearSize} xmlns="https://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
            </button>
          }
        </MDBInput>
        {
          value && !choosed &&
          <ul
            ref={list => this.suggestionsList = list}
            className="mdb-autocomplete-wrap"
            style={{ marginTop: "-15px" }}
            onClick={this.handleSelect}
          >
            {
              filteredSuggestions.map((el, index) =>
                <li
                  key={el + index}
                  className="list-item"
                  style={{ background: `${this.state.focusedListItem === index ? '#eee' : '#fff'}` }}
                  onMouseEnter={() => this.updateFocus(index)}
                >
                  {el}
                </li>
              )
            }
          </ul>
        }
      </div>
    );
  }
}

Autocomplete.propTypes = {
  clear: PropTypes.bool,
  clearColor: PropTypes.string,
  clearSize: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  getValue: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  labelClass: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  iconClassName: PropTypes.string,
  placeholder: PropTypes.string,
  valueDefault: PropTypes.string,
};

Autocomplete.defaultProps = {
  clear: false,
  clearColor: "#a6a6a6",
  clearSize: "24",
  data: [],
  disabled: false,
  id: "",
  label: "",
  className: "",
  clearClass: "",
  labelClass: "",
  icon: "",
  iconBrand: false,
  iconSize: "",
  iconLight: false,
  iconRegular: false,
  iconClassName: "",
  placeholder: "",
  valueDefault: ""
};

export default Autocomplete;
export { Autocomplete as MDBAutocomplete };