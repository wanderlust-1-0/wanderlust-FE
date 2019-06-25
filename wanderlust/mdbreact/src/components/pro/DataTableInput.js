import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const DataTableInput = ({ value, onChange, label, barReverse }) => (
  <div className={classNames(
    "dataTables_filter",
    "md-form",
    "flex-row",
    barReverse && "text-left"
  )}>
    <input
      value={value}
      onChange={onChange}
      type="search"
      className="form-control form-control-sm"
      placeholder={label || "Search"}
    />
  </div>
);

DataTableInput.propTypes = {
  barReverse: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default DataTableInput;
export { DataTableInput as MDBDataTableInput };
