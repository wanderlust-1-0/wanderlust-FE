import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ControlledSelectInput from "./ControlledSelect/ControlledSelectInput";
import ControlledSelectOptions from "./ControlledSelect/ControlledSelectOptions";

export const SelectContext = React.createContext();

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: [],
      selectTextContent: "",
      options: this.props.options || [],
      allChecked: false,
      focused: null,
      filteredOptions: this.props.options || []
    };
    this.inputRef = React.createRef();

    if (this.props.options && this.props.options.length) {
      Object.assign(this.state, this.computeValuesAndText(this.props.options));
    }
  }

  componentDidMount() {
    document.addEventListener("click", this.onDocumentClick);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectValue !== this.state.selectValue) {
      if (typeof this.props.getValue === "function") {
        this.props.getValue(this.state.selectValue);
      }

      if (typeof this.props.getTextContent === "function") {
        this.props.getTextContent(this.state.selectTextContent);
      }
    }

    if (this.props.options !== prevProps.options) {
      const {
        selectValue,
        selectTextContent,
        allChecked
      } = this.computeValuesAndText(this.props.options);

      this.setState({
        options: this.props.options,
        filteredOptions: this.props.options,
        selectValue,
        selectTextContent,
        allChecked
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onDocumentClick);
  }

  // close all select dropdown (unless it has multiple property or search input)
  // open nieghbour ul of clicked input
  onDocumentClick = e => {
    if (
      e.target.dataset.multiple === "true" ||
      e.target.dataset.search === "true" ||
      e.target.classList.contains('dropdown-content') ||
      e.target.getAttribute("for") === "selectSearchInput"
    ) {
      return;
    }

    this.closeDropdowns();
    e.target.nextElementSibling &&
      e.target.nextElementSibling.classList.add("fadeIn");
  };

  closeDropdowns = () => {
    this.changeFocus(null);

    let dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(
      dropdown =>
        dropdown.classList.contains("fadeIn") &&
        dropdown.classList.remove("fadeIn")
    );
  };

  computeValuesAndText = options => {
    let checkedOptions = options
      .filter(option => option.checked)
      .map(option => ({
        value: option.value,
        text: option.text ? option.text : option.value
      }));

    let checkedValues = checkedOptions.map(opt => opt.value);
    let checkedTexts = checkedOptions.map(opt =>
      opt.text && typeof opt.text !== "object" ? opt.text : opt.value
    );

    return {
      selectValue: checkedValues,
      selectTextContent: checkedTexts.length
        ? checkedTexts.join(", ")
        : this.props.selected,
      allChecked: checkedOptions.length === this.state.options.filter(option => option.disabled !== true).length
    };
  };

  setFilteredOptions = filteredOptions => {
    this.setState({ filteredOptions });
  };

  setOptionStatus = (option, status) => {
    if (!option.disabled){
      option.checked = status;
    }
    return option;
  };

  applyFilteredOptionsChanges = (options, filteredOptions) => {
    filteredOptions.forEach(filteredOption => {
      const index = options.findIndex(
        option => option.value === filteredOption.value
      );
      filteredOption.checked !== options[index].checked &&
        this.setOptionStatus(options[index], filteredOption.checked);
    });
    return options;
  };

  changeFocus = value => {
    switch (value) {
      case null:
        this.setState(prevState =>
          prevState.focused !== value ? { focused: null } : null
        );
        break;
      case 0:
        this.setState({ focused: 0 });
        break;
      default:
        this.setState(prevState => ({ focused: prevState.focused + value }));
        break;
    }
  };

  selectOneOption = value => {
    this.setState(prevState => {
      let options = [...prevState.options];
      const optionIndex = options.findIndex(option => option.value === value);
      this.setOptionStatus(
        options[optionIndex],
        !prevState.options[optionIndex].checked
      );

      options.forEach((option, index) =>
        index !== optionIndex ? (option.checked = false) : false
      );

      return this.computeValuesAndText(options);
    });
  };

  selectMultipleOption = value => {
    this.setState(prevState => {
      let options = [...prevState.options];
      const optionIndex = options.findIndex(option => option.value === value);
      this.setOptionStatus(
        options[optionIndex],
        !prevState.options[optionIndex].checked
      );

      return this.computeValuesAndText(options);
    });
  };

  selectAllOptions = () => {
    this.setState((prevState) => {
      let options = [...prevState.options];
      let filteredOptions = [...prevState.filteredOptions].filter(option => option.disabled !== true);

      let areSomeUnchecked = filteredOptions.some((option) => option.checked === false);

      areSomeUnchecked
        ? filteredOptions.map((option) => (option.checked === false && !option.disabled ? this.setOptionStatus(option, true) : null))
        : filteredOptions.map((option) => this.setOptionStatus(option, false));

      if (filteredOptions.length !== options.length) {
        options = this.applyFilteredOptionsChanges(options, filteredOptions);
      }

      return this.computeValuesAndText(options);
    });
  };

  selectOption = value => {
    if (this.props.multiple) {
      value === this.props.selectAllValue
        ? this.selectAllOptions()
        : this.selectMultipleOption(value);
    } else {
      this.selectOneOption(value);
    }
  };

  triggerOptionChange = (value, text) => {
    Array.isArray(text) && (text = text.join(", "));
    this.setState({
      selectValue: value,
      selectTextContent: text
    });
  };

  returnComponentContent = () => {
    const {
      className,
      color,
      children,
      getTextContent,
      getValue,
      label,
      labelClass,
      multiple,
      outline,
      required,
      search,
      searchLabel,
      searchId,
      selected,
      selectAll,
      selectAllClassName,
      selectAllLabel,
      selectAllValue,
      focusShadow,
      focusBackgroundColor,
      ...attributes
    } = this.props;

    const classes = classNames(
      "select-wrapper mdb-select md-form",
      this.props.color ? "colorful-select dropdown-" + this.props.color : "",
      outline ? "md-outline" : className
    );

    const labelClasses = classNames(
      !outline && "mdb-main-label",
      this.state.selectTextContent && "active",
      labelClass
    );

    const labelStyles = {
      color: this.state.selectTextContent && '#4285f4',
      zIndex: 4,
    }

    if (!this.props.children) {
      return (
        <>
          <div
            {...attributes}
            data-color={color}
            data-multiple={multiple}
            className={classes}
          >
            <span className="caret">▼</span>
            <ControlledSelectInput
              value={this.state.selectTextContent}
              ref={this.inputRef}
              required={required}
            />
            <ControlledSelectOptions
              multiple={multiple}
              options={this.state.options}
              search={search}
              searchLabel={searchLabel}
              selected={selected}
              selectOption={this.selectOption}
              selectAll={selectAll}
              selectAllClassName={selectAllClassName}
              selectAllLabel={selectAllLabel}
              selectAllValue={selectAllValue}
              allChecked={this.state.allChecked}
              inputRef={this.inputRef}
              setFilteredOptions={this.setFilteredOptions}
              focused={this.state.focused}
              changeFocus={this.changeFocus}
              focusShadow={focusShadow}
              focusBackgroundColor={focusBackgroundColor}
            />
          {
            label &&
            <label className={labelClasses} style={labelStyles}>{label}</label>
          }
          </div>
        </>
      );
    } else {
      return (
        <SelectContext.Provider
          value={{
            state: this.state,
            multiple: this.props.multiple,
            triggerOptionChange: this.triggerOptionChange
          }}
        >
          <div
            {...attributes}
            data-color={color}
            data-multiple={multiple}
            className={classes}
          >
            <span className="caret">▼</span>
            {children}
          </div>
          {label && (
            <label className={labelClasses} style={labelStyles}>
              {label}
            </label>
          )}
        </SelectContext.Provider>
      );
    }
  };

  render() {
    return this.returnComponentContent();
  }
}

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  focusShadow: PropTypes.string,
  focusBackgroundColor: PropTypes.string,
  getTextContent: PropTypes.func,
  getValue: PropTypes.func,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
      icon: PropTypes.string,
      text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      value: PropTypes.string
    })
  ),
  outline: PropTypes.bool,
  required: PropTypes.bool,
  search: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchId: PropTypes.string,
  selected: PropTypes.string,
  selectAllClassName: PropTypes.string,
  selectAllLabel: PropTypes.string,
  selectAllValue: PropTypes.string
};

Select.defaultProps = {
  label: "",
  labelClass: "",
  outline: false,
  required: false,
  selected: "",
  selectAllValue: "0"
};

export default Select;
export { Select as MDBSelect };
