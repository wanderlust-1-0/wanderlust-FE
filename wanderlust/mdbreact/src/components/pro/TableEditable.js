import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./DataTable.css";
import Fa from '../Fa';

class TableEditable extends React.Component {
  state = {
    data: []
  };

  componentDidMount = () => {
    this.props.data &&
      this.setState({
        ...this.state,
        data: this.props.data
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.data !== this.props.data && this.props.data !== this.state.data) {
      this.setState({ data: this.props.data });
    }
  }
  
  addRow = () => {
    let newData = [...this.state.data];
    let newRow = [];
    this.props.columns.forEach(() => {
      newRow.push("");
    });
    newData.push(newRow);

    this.setState({
      ...this.state.data,
      data: newData
    });
  };

  removeRow = index => {
    let newData = [...this.state.data];
    newData = [...newData.slice(0, index), ...newData.slice(index + 1)];
    this.setState({
      ...this.state,
      data: newData
    });
  };

  decreaseIndex = index => {
    if (index === 0) return;
    let newData = this.changeArrayOrder(index, index - 1);
    this.setState({
      ...this.state,
      data: newData
    });
  };

  increaseIndex = index => {
    if (index === this.state.data.length - 1) return;
    let newData = this.changeArrayOrder(index, index + 1);
    this.setState({
      ...this.state,
      data: newData
    });
  };

  changeArrayOrder = (oldIndex, newIndex, array = [...this.state.data]) => {
    let newArray = array;
    const oldIndexValue = [...newArray[oldIndex]];
    const newIndexValue = [...newArray[newIndex]];
    newArray.splice(oldIndex, 1, newIndexValue);
    newArray.splice(newIndex, 1, oldIndexValue);
    return newArray;
  };

  onBlurHandler = (trIndex, tdIndex, e) => {
    let value = e.target.innerText;
    let newData = [...this.state.data];

    newData = newData.map((item, index) => {
      if (index !== trIndex) {
        return item;
      }

      return item.map((tdItem, index) => {
        if (index !== tdIndex) {
          return tdItem;
        }

        return (tdItem = value);
      });
    });

    this.setState({
      ...this.state,
      data: newData
    });
  };

  render() {
    const {
      className,
      small,
      bordered,
      striped,
      hover,
      data,
      columns,
      responsive,
      responsiveSm,
      responsiveMd,
      responsiveLg,
      responsiveXl,
      ...attributes
    } = this.props;

    const classes = classNames(
      "table",
      small && "table-sm",
      bordered && "table-bordered",
      striped && "table-striped",
      hover && "table-hover",
      className
    );

    const wrapperClasses = classNames(
      "table-editable text-center",
      responsive && "table-responsive",
      responsiveSm && "table-responsive-sm",
      responsiveMd && "table-responsive-md",
      responsiveLg && "table-responsive-lg",
      responsiveXl && "table-responsive-xl"
    );

    return (
      <div className={wrapperClasses}>
        <span onClick={this.addRow} className="table-add float-right mb-3 mr-2">
          <a href="#!" className="text-success">
            <Fa icon="plus" size="2x" />
          </a>
        </span>
        <table {...attributes} className={classes}>
          <thead>
            <tr>
              {this.props.columns &&
                this.props.columns.map((th, i) => {
                  return <th key={i}>{th}</th>;
                })}
              <th>Sort </th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((tr, trIndex) => {
              return (
                <tr key={trIndex}>
                  {tr.map((td, tdIndex) => {
                    return (
                      <td
                        key={tdIndex}
                        contentEditable
                        suppressContentEditableWarning="true"
                        onBlur={e => this.onBlurHandler(trIndex, tdIndex, e)}
                      >
                        {td}
                      </td>
                    );
                  })}
                  <td>
                    <span
                      onClick={() => this.decreaseIndex(trIndex)}
                      className="table-up"
                    >
                      <a href="#!" className="indigo-text">
                        <Fa icon="long-arrow-alt-up" />
                      </a>
                    </span>
                    <span
                      onClick={() => this.increaseIndex(trIndex)}
                      className="table-down"
                    >
                      <a href="#!" className="indigo-text">
                        <Fa icon="long-arrow-alt-down" />
                      </a>
                    </span>
                  </td>
                  <td>
                    <span
                      onClick={() => this.removeRow(trIndex)}
                      className="table-remove"
                    >
                      <button
                        type="button"
                        className="btn btn-danger btn-rounded btn-sm my-0"
                      >
                        Remove
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

TableEditable.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  data: PropTypes.array,
  columns: PropTypes.array,
  children: PropTypes.node,
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool
};

export default TableEditable;
export { TableEditable as MDBTableEditable };
