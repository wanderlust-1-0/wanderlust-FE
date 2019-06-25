import React from "react";
import PropTypes from "prop-types";
import Select from "./Select";
import SelectInput from "./SelectInput";
import SelectOptions from "./SelectOptions";
import SelectOption from "./SelectOption";
import classNames from "classnames";

const DataTableSelect = ({ value, onChange, entries, label, barReverse }) => (
  <div className={classNames(
      "dataTables_length",
      "d-flex",
      "flex-row",
      barReverse && "justify-content-end"
    )}
  >
    <label className="mt-4">{label}</label>
    <Select getValue={onChange}>
      <SelectInput selected={value} />
      <SelectOptions>
        {entries.map((entry, index) => (
          <SelectOption checked={index === 0} key={entry} value={entry}>
            {entry}
          </SelectOption>
        ))}
      </SelectOptions>
    </Select>
  </div>
);

DataTableSelect.propTypes = {
  barReverse: PropTypes.bool,
  entries: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default DataTableSelect;
export { DataTableSelect as MDBDataTableSelect };
