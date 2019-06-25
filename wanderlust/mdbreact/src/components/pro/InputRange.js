import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InputRange.css';

class InputRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      leftPosition: false,
      thumbActive: false,
      thumbHeight: 0,
      thumbWidth: 0,
      thumbTop: '10px',
      thumbMarginLeft: '-6px',
      input: 'input',
      oneStep: ''
    };

    this.inputRef = React.createRef();
  }

  componentDidMount = () => {
    let input = this.inputRef.current;
    let inputWidth = input.offsetWidth;
    const oneStep = inputWidth / (this.props.max - this.props.min);
    this.setState({
      value: this.props.value,
      leftPosition: oneStep * this.props.value - oneStep * this.props.min,
      oneStep
    });
  };

  rangeChange = e => {
    let newValue = e.target.value;
    this.setState({
      value: newValue,
      leftPosition:
        this.state.oneStep * newValue - this.state.oneStep * this.props.min
    });
    this.props.getValue && this.props.getValue(e.target.value);
  };

  rangeFocus = () => {
    this.setState({
      thumbActive: true,
      thumbHeight: '30px',
      thumbWidth: '30px',
      thumbTop: '-20px',
      thumbMarginLeft: '-15px'
    });
  };

  rangeMouseLeave = () => {
    let input = this.inputRef.current;
    input.blur();
    this.setState({
      thumbActive: false,
      thumbHeight: 0,
      thumbWidth: 0,
      thumbTop: '10px',
      thumbMarginLeft: '-6px'
    });
  };

  render() {
    const { className, formClassName, min, max } = this.props;

    const inputClass = classNames(className);

    const formClass = classNames('range-field', formClassName);

    const thumbClass = classNames(
      'thumb',
      this.state.thumbActive ? 'active' : false
    );

    return (
      <form className={formClass}>
        <input
          ref={this.inputRef}
          className={inputClass}
          min={min}
          max={max}
          value={this.state.value}
          type="range"
          onChange={this.rangeChange}
          onFocus={this.rangeFocus}
          onMouseLeave={this.rangeMouseLeave}
        />
        <span
          className={thumbClass}
          style={{
            left: this.state.leftPosition,
            height: this.state.thumbHeight,
            width: this.state.thumbWidth,
            top: this.state.thumbTop,
            marginLeft: this.state.thumbMarginLeft
          }}
        >
          <span className="value">{this.state.value}</span>
        </span>
      </form>
    );
  }
}

InputRange.propTypes = {
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
};

InputRange.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
  getValue: false
};

export default InputRange;
export { InputRange as MDBRangeInput };
