import React from 'react';
import PropTypes from 'prop-types';
// PRO-START
import DataTableSelect from '../pro/DataTableSelect';
/*
// PRO-END
import DataTableSelect from './DataTableSelect';
// PRO-START
*/
// PRO-END

const DataTableEntries = props => {
  const { handleEntriesChange, displayEntries, entries, entriesArr, paging, label, barReverse } = props;

  return (
    <div className="col-sm-12 col-md-6">
      {paging && displayEntries && (
        <DataTableSelect
          value={entries}
          onChange={handleEntriesChange}
          entries={entriesArr}
          label={label}
          barReverse={barReverse}
        />
      )}
    </div>
  );
};

DataTableEntries.propTypes = {
  barReverse: PropTypes.bool,
  handleEntriesChange: PropTypes.func.isRequired,
  displayEntries: PropTypes.bool.isRequired,
  entries: PropTypes.number.isRequired,
  entriesArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  paging: PropTypes.bool.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number, 
    PropTypes.object
  ]).isRequired
};

export default DataTableEntries;
export { DataTableEntries as MDBDataTableEntries };
