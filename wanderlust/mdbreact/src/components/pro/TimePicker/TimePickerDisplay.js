import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  dayTime: PropTypes.string.isRequired,
  unitsMode: PropTypes.string.isRequired,
  handleModeChange: PropTypes.func.isRequired,
  hoursFormat: PropTypes.number.isRequired
};

const TimePickerDisplay = ({ color, hours, minutes, dayTime, unitsMode, handleModeChange, hoursFormat }) => {
  const displayClasses = classNames(
    'picker__date-display',
    `btn-${color}`
  );
  
  const hourClasses = classNames(
    'clockpicker-span-hours',
    unitsMode === 'h' && 'text-primary'
  );
  
  const minuteClasses = classNames(
    'clockpicker-span-minutes',
    unitsMode === 'm' && 'text-primary'
  );

  return (
    <div className={displayClasses}>
      <div className="clockpicker-display">
        <div className="clockpicker-display-column">
          <span 
            className={hourClasses}
            onClick={() => handleModeChange('h')}
          >{hours !== '' ? hours : "--"}</span>:<span 
            className={minuteClasses}
            onClick={() => handleModeChange('m')}  
          >{minutes !== '' ? minutes : "--"}</span>
        </div>
        {
          hoursFormat === 12 &&
          <div className="clockpicker-display-column clockpicker-display-am-pm">
            <div className="clockpicker-span-am-pm">{dayTime.toUpperCase()}</div>
          </div>
        }
      </div>
    </div>
  );
}

TimePickerDisplay.propTypes = propTypes;

export default TimePickerDisplay;