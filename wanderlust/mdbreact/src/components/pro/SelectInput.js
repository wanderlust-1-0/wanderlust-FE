import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import selectContextHOC from "./SelectContext";

let SelectInput = ({ attributes, className, context, selected }) => {
  const classes = classNames("select-dropdown", className);

  if(context.state.selectTextContent === "" && selected) {
    context.triggerOptionChange([], selected);
  }

  return (
    <input
      type="text"
      readOnly
      value={context.state.selectTextContent}
      {...attributes}
      className={classes}
    />
  );
}

SelectInput.propTypes = {
  context: PropTypes.object.isRequired,
  className: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SelectInput.defaultProps = {
  className: "",
  selected: "Choose your option"
};

export default (SelectInput = selectContextHOC(SelectInput));
export { SelectInput as MDBSelectInput };
