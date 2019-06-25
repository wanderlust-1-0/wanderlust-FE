import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import TimpiePickerClockHand from './TimpiePickerClockHand';

const propTypes = {
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  rotate: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  startFromInner: PropTypes.bool.isRequired,
  allowedValues: PropTypes.arrayOf(PropTypes.number),
  autoSwitch: PropTypes.bool,
  color: PropTypes.string,
  double: PropTypes.bool,
  handleModeChange: PropTypes.func,
  size: PropTypes.number,
  value: PropTypes.number
};

const defaultProps = {
  allowedValues: [],
  autoSwitch: false,
  color: 'priamry',
  double: false,
  handleModeChange: () => {},
  size: 270,
  value: 0
};

class TimePickerClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clockRadius: 135,
      degrees: 30,
      digitsInRound: 12,
      degreesPerUnit: 30,
      handAngle: 0,
      handScale: 1,
      isDragging: false,
      innerRadius: 120,
      outerRadius: 266,
      value: 0
    };

    this.clockRef = React.createRef();
  }

  componentDidMount() {
    this.buildComponentState();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.max !== this.props.max || prevProps.min !== this.props.min || this.state.value !== this.props.value) {
      this.buildComponentState();
    }
   }
  
  buildComponentState = () => {
    const { size, max, min, double, rotate, value } = this.props;
    const clockRadius = size / 2;
    const digitsAmount = max - min + 1;
    const digitsInRound = double ? (digitsAmount / 2) : digitsAmount;
    const degreesPerUnit = 360 / digitsInRound;
    const outerRadius = clockRadius - 4;
    const innerRadius = clockRadius - Math.max(clockRadius * 0.2, 40); // cant be lower than 40
    const degrees = degreesPerUnit * Math.PI / 180;
    const handAngle = rotate + (degreesPerUnit * (value - min));

    this.setState({
      clockRadius,
      degrees,
      degreesPerUnit,
      digitsInRound,
      handAngle,
      innerRadius,
      outerRadius,
      value
    }, () => this.setState({ handScale: this.getScale(value) }));
  }
  
  getScale = (value) => {
    if(this.props.startFromInner && this.props.double) {
      return (value - this.props.min >= this.state.digitsInRound) 
      ? (this.state.outerRadius / this.state.clockRadius)
      : (this.state.innerRadius / this.state.clockRadius); 
    }

    return (value - this.props.min >= this.state.digitsInRound) 
    ? (this.state.innerRadius / this.state.clockRadius) 
    : (this.state.outerRadius / this.state.clockRadius);
  };
  
  getAngle = (center, p1) => {
    const value = 2 * Math.atan2(p1.y - center.y - this.euclidean(center, p1), p1.x - center.x);
    return Math.abs(value * 180 / Math.PI);
  };

  getCoords = (e) => {
    const { width, top, left } = this.clockRef.current.getBoundingClientRect();
    const { clientX, clientY } = 'touches' in e ? e.touches[0] : e;
    const center = { x: width / 2, y: -width / 2 };
    const coords = { x: clientX - left, y: top - clientY };
    
    return {center, coords};
  }

  setPosition = (value) => {
    const radius = (this.state.clockRadius - 24) * this.getScale(value);
    const rotateRadians = this.props.rotate * Math.PI / 180;
    return {
      x: Math.round(Math.sin(((value - this.props.min) * this.state.degrees) + rotateRadians) * radius),
      y: Math.round(-Math.cos(((value - this.props.min) * this.state.degrees) + rotateRadians) * radius)
    };
  };
  
  isValueAllowed = (value) => this.props.allowedValues.length 
    ? this.props.allowedValues.find(item => item === value) 
    : (value >= this.props.min && value <= this.props.max);
  
  isOnInner = (center, coords) => {
    const centerDistance = this.euclidean(center, coords);
    const betweenRadiusDistance = ((this.state.outerRadius + this.state.innerRadius) / 2) - 16;

    if(this.props.double) {
      return this.props.startFromInner 
      ? (centerDistance > betweenRadiusDistance) 
      : (centerDistance < betweenRadiusDistance);
    }

    return false;
  }

  computeTimeNumber = (number) => number < 10 ? `0${number.toString()}` : `${number.toString()}`;
  
  computeHandAngle = (exactAngle) => {
    if (360 % this.props.max !== 0) {
      return exactAngle >= (360 - this.state.degreesPerUnit / 2) ? 0 : exactAngle;
    }

    return exactAngle <= (this.state.degreesPerUnit / 2) ? 360 : exactAngle;
  }

  euclidean = (p0, p1) => {
    const dx = p1.x - p0.x;
    const dy = p1.y - p0.y;

    return Math.sqrt((dx * dx) + (dy * dy));
  };

  transformPosition = (value) => {
    const { x, y } = this.setPosition(value);
    return { transform: `translate(${x}px, ${y}px)` };
  };

  genClockDigits = () => {
    const children = [];

    for (let value = this.props.min; value <= this.props.max; value += this.props.step) {
      const classes = classNames(
        'clockpicker-tick',
        value === this.state.value && 'active',
        !this.isValueAllowed(value) && 'disabled'
      );

      children.push(
        <span
          className={classes}
          style={Object.assign(this.transformPosition(value), { 
            fontSize: (
              !this.props.double 
              ? '140%' 
              : this.props.startFromInner ? value <= 12 ? '120%' : '100%' : value > 12 ? '120%' : '100%')
          })}
          key={value}
          onMouseDown={(e) => this.onMouseDown(e, value)}
          onTouchStart={(e) => this.onMouseDown(e, value)}
        >
          {this.props.max > 24 ? this.computeTimeNumber(value) : value === 24 ? '00' : value}
        </span>
      );
    }

    return children;
  };

  onMouseDown = (e, value) => {
    e.preventDefault();
    this.setState({ isDragging: true });

    const handAngle = this.props.rotate + (this.state.degreesPerUnit * (value - this.props.min));
    const handScale = this.getScale(value);

    if(this.state.value !== value && this.isValueAllowed(value)) {
      this.updateValue(value, handAngle, handScale);     
    }
  };

  onMouseUp = (e) => {
    e.preventDefault();
    if(this.state.isDragging) {
      this.setState({ isDragging: false });

      if(this.props.autoSwitch) this.props.handleModeChange('m');
    }
  };

  onMouseLeave = (e) => {
    e.preventDefault();
    if(this.state.isDragging) this.setState({ isDragging: false });
  };

  onDragMove = (e) => {
    e.preventDefault();
    if (!this.state.isDragging && e.type !== 'click') return;
    const {center, coords} = this.getCoords(e);
    const isOnInner = this.isOnInner(center, coords);
    const exactHandAngle = this.getAngle(center, coords);
    const computedHandAngle = this.computeHandAngle(exactHandAngle);
    
    const value = Math.round((computedHandAngle - this.props.rotate) / this.state.degreesPerUnit) + this.props.min + (isOnInner ? this.state.digitsInRound : 0);
    const handAngle = this.props.rotate + (this.state.degreesPerUnit * (value - this.props.min));
    const handScale = this.getScale(value);

    if(this.state.value !== value && this.isValueAllowed(value)) {
      this.updateValue(value, handAngle, handScale);
    }
  };

  updateValue = (value, handAngle, handScale) => {
    this.props.handleChange(value);
    this.setState({ value, handAngle, handScale });
  };

  render() {
    const classes = classNames(
      'time-picker-clock',
      'clockpicker-dial',
      this.props.className,
      this.state.value === null && 'time-picker-clock--indeterminate'
    );
    
    return (
      <div
        className={classes}
        style={{ height: `${this.props.size}px`, width: `${this.props.size}px`, visibility: 'visible' }}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseLeave={this.onMouseLeave}
        onTouchStart={this.onMouseDown}
        onTouchEnd={this.onMouseUp}
        onMouseMove={this.onDragMove}
        onTouchMove={this.onDragMove}
        ref={this.clockRef}
      >
        <TimpiePickerClockHand 
          between={this.state.value % this.props.step !== 0} 
          color={this.props.color} 
          angle={this.state.handAngle} 
          scale={this.state.handScale} 
        />
        {
          this.genClockDigits()
        }
      </div>
    );
  }
}

TimePickerClock.propTypes = propTypes;
TimePickerClock.defaultProps = defaultProps;

export default TimePickerClock;
