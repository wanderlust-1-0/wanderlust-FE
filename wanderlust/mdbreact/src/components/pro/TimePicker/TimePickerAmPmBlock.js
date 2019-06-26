import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string.isRequired,
  dayTime: PropTypes.string.isRequired,
  handleDayTimeChange: PropTypes.func.isRequired
}

const TimePickerAmPmBlock = ({ color, dayTime, handleDayTimeChange }) => {
  const classesAM = classNames(
    'btn-floating', 'btn-flat', 'clockpicker-button', 'am-button',
    dayTime === 'am' && 'active',
    `btn-${color}`    
  );

  const classesPM = classNames(
    'btn-floating', 'btn-flat', 'clockpicker-button', 'pm-button', 
    dayTime === 'pm' && 'active',
    `btn-${color}`
  );

  return (
    <div className="clockpicker-am-pm-block d-flex justify-content-between">
      <button type="button" className={classesAM} onClick={() => handleDayTimeChange('am')}>AM</button>
      <button type="button" className={classesPM} onClick={() => handleDayTimeChange('pm')}>PM</button>
    </div>
  );
}

TimePickerAmPmBlock.propTypes = propTypes;

export default TimePickerAmPmBlock;