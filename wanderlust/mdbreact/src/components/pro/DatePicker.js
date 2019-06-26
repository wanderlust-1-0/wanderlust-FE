import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/* eslint-disable */
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker as UIDatePicker } from 'material-ui-pickers';
import moment from 'moment';

import './DatePicker.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: props.value || props.valueDefault,
      muiTheme: createMuiTheme({...props.theme, typography: {
        useNextVariants: true,
      }})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.getValue && prevState.selectedDate !== this.state.selectedDate) {
      this.props.getValue(this.state.selectedDate);
    }
    
    if(this.props.value !== prevProps.value) {
      this.setState({ selectedDate: this.props.value });
    }
    
    if(prevProps.theme !== this.props.theme) {
      this.setState({ muiTheme: createMuiTheme(this.props.theme) });
    }
  }
  
  handleDateChange = (date) => {
    this.setState({ selectedDate: date ? date._d : this.props.value });
  }
  
  render() {
    const {
      theme,
      adornmentPosition,
      allowKeyboardControl,
      animateYearScrolling,
      autoOk,
      cancelLabel,
      clearable,
      clearLabel,
      disableFuture,
      disableOpenOnEnter,
      disablePast,
      emptyLabel,
      initialFocusedDate,
      InputAdornmentProps,
      invalidDateMessage,
      invalidLabel,
      keyboard,
      keyboardIcon,
      leftArrowIcon,
      mask,
      maxDate,
      maxDateMessage,
      minDate,
      minDateMessage,
      okLabel,
      onInputChange,
      openToYearSelection,
      rightArrowIcon,
      showTodayButton,
      TextFieldComponent,
      todayLabel,
      locale,
      format,
      className,
      getValue,
      value,
      valueDefault,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'md-form',
      className
    );

    return (
      <Tag className={classes}>
        <MuiThemeProvider theme={this.state.muiTheme}>
          <MuiPickersUtilsProvider locale={locale} moment={moment} utils={MomentUtils}>
            <UIDatePicker
              {...attributes}
              adornmentPosition={adornmentPosition}
              allowKeyboardControl={allowKeyboardControl}
              animateYearScrolling={animateYearScrolling}
              autoOk={autoOk}
              cancelLabel={cancelLabel}
              clearable={clearable}
              clearLabel={clearLabel}
              disableFuture={disableFuture}
              disableOpenOnEnter={disableOpenOnEnter}
              disablePast={disablePast}
              emptyLabel={emptyLabel}
              initialFocusedDate={initialFocusedDate}
              InputAdornmentProps={InputAdornmentProps}
              invalidDateMessage={invalidDateMessage}
              invalidLabel={invalidLabel}
              keyboard={keyboard}
              keyboardIcon={keyboardIcon}
              leftArrowIcon={leftArrowIcon}
              mask={mask}
              maxDate={maxDate}
              maxDateMessage={maxDateMessage}
              minDate={minDate}
              minDateMessage={minDateMessage}
              okLabel={okLabel}
              onInputChange={onInputChange}
              openToYearSelection={openToYearSelection}
              rightArrowIcon={rightArrowIcon}
              showTodayButton={showTodayButton}
              TextFieldComponent={TextFieldComponent}
              todayLabel={todayLabel}
              format={format || "DD MMMM, YYYY"}
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
      </Tag>
    );
  }
}

DatePicker.propTypes = {
  theme: PropTypes.object,
  adornmentPosition: PropTypes.string,
  allowKeyboardControl: PropTypes.bool,
  animateYearScrolling: PropTypes.bool,
  autoOk: PropTypes.bool,
  cancelLabel: PropTypes.node,
  clearable: PropTypes.bool,
  clearLabel: PropTypes.node,
  disableFuture: PropTypes.object,
  disableOpenOnEnter: PropTypes.bool,
  disablePast: PropTypes.bool,
  emptyLabel: PropTypes.string,
  initialFocusedDate: PropTypes.string,
  InputAdornmentProps: PropTypes.object,
  invalidDateMessage: PropTypes.node,
  invalidLabel: PropTypes.string,
  keyboard: PropTypes.bool,
  keyboardIcon: PropTypes.node,
  leftArrowIcon: PropTypes.node,
  mask: PropTypes.any,
  maxDate: PropTypes.string,
  maxDateMessage: PropTypes.node,
  minDate: PropTypes.string,
  minDateMessage: PropTypes.node,
  okLabel: PropTypes.node,
  onInputChange: PropTypes.func,
  openToYearSelection: PropTypes.bool,
  rightArrowIcon: PropTypes.node,
  showTodayButton: PropTypes.bool,
  TextFieldComponent: PropTypes.string,
  todayLabel: PropTypes.string,
  locale: PropTypes.string,
  format: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  getValue: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  valueDefault: PropTypes.instanceOf(Date)
};

DatePicker.defaultProps = {
  theme: {},
  tag: 'div',
  value: null,
  valueDefault: new Date(),
  getValue: () => {}
};

export default DatePicker;
export { DatePicker as MDBDatePicker };
