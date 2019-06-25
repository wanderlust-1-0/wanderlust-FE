import React from "react";
import PropTypes from "prop-types";

const ControlledSelectInput = React.forwardRef(
  ({ value, required }, inputRef) => {
    return (
      <input
        type="text"
        ref={inputRef}
        required={required ? required : false}
        value={value}
        onChange={() => {}}
        className="select-dropdown"
      />
    );
  }
);

ControlledSelectInput.propTypes = {
  required: PropTypes.bool,
  value: PropTypes.string
};

ControlledSelectInput.defaultProps = {
  required: false
};

export default ControlledSelectInput;
