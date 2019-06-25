import React from 'react';
import PropTypes from 'prop-types';

const SimpleChart = props => {
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    if(!x||!y) console.error('x or y missing to describeArc')

    let start = polarToCartesian(x, y, radius, endAngle),
        end = polarToCartesian(x, y, radius, startAngle),
        arcSweep = endAngle - startAngle <= 180 ? "0" : "1"


    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, arcSweep, 0, end.x, end.y,

    ].join(" ");
  }

    let percent = Math.min(props.percent || 0, 100),
        radius = props.width / 2 - props.strokeWidth / 2 - props.padding,
        center = radius + props.strokeWidth / 2 + props.padding,
        startAngle = 0,
        endAngle = 3.6 * percent,
        label = `${percent}%`,
        labelLeftOffset = label.length === 3 || label.length === 4 ? -0.95 : -0.6,
        arc = describeArc(center, center, radius, startAngle, endAngle -.001)

    return (
      <svg
        className={`react-chart ${props.type}`}
        width={props.width}
        style={{overflow: 'visible', border: props.border, ...props.style}}
        height={props.height}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill={props.fillColor}
          stroke={props.railColor}
          strokeWidth={props.strokeWidth}/>
        <path
          fill={props.fillColor}
          stroke={props.strokeColor}
          strokeWidth={props.strokeWidth}
          d={arc}/>
        <text
          x={center}
          y={center}
          dx={`${labelLeftOffset}em`}
          dy=".35em"
          fill={props.labelColor}
          fontWeight={props.labelFontWeight}
          fontSize={props.labelFontSize}>
          {label}
        </text>
      </svg>
    )

  }

  SimpleChart.defaultProps = {
    width: 150,
    height: 150,
    border: 'none',
    strokeWidth: 10,
    style: {},
    labelColor: '#408AE5',
    labelFontSize: '1.2em',
    labelFontWeight: 'bold',
    strokeColor: '#408AE5',
    railColor: '#f5f5f5',
    fillColor: 'none',
    percent: 70,
    padding: 0,
  }
SimpleChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeColor: PropTypes.string,
  labelFontWeight: PropTypes.string,
  labelFontSize: PropTypes.string,
  fillColor: PropTypes.string,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  radius: PropTypes.number,
  style: PropTypes.object,
}
 export default SimpleChart;
 export {SimpleChart as MDBSimpleChart};
