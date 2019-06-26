import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./../Button";

class ExportToCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: this.props.columns,
      data: this.props.data,
      href: ""
    };
  }

  componentDidMount() {
    this.computeDataToLink();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.data !== this.props.data ||
      prevState.columns !== this.props.columns
    ) {
      this.setState(
        {
          columns: this.props.columns,
          data: this.props.data
        },
        this.computeDataToLink()
      );
    }
  }

  computeDataToLink = () => {
    this.setState(prevState => ({
      href: encodeURI(
        "data:text/csv;charset=utf-8," +
          [
            prevState.columns.map(col => col.field).join(","),
            [].concat
              .apply([], prevState.data)
              .map(row => Object.values(row).join(","))
              .join("\n")
          ].join("\n")
      )
    }));
  };

  render() {
    let {
      active,
      block,
      circle,
      className,
      color,
      children,
      outline,
      size,
      rounded,
      gradient,
      floating,
      flat,
      ...attributes
    } = this.props;

    return (
      <Button
        active={active}
        block={block}
        circle={circle}
        className={className}
        color={color}
        outline={outline}
        size={size}
        rounded={rounded}
        gradient={gradient}
        floating={floating}
        flat={flat}
        role="button"
        type="link"
        {...attributes}
        href={this.state.href}
        download="export.csv"
      >
        {children}
      </Button>
    );
  }
}

ExportToCSV.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.array.isRequired,
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  gradient: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default ExportToCSV;
export { ExportToCSV as MDBExportToCSV };
