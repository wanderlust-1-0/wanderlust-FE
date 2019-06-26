import React from "react";
import classNames from "classnames";
import Tooltip from "../Popper";
import Button from "../Button";

class Step extends React.Component {
  render() {
    const { tag: Tag, form, icon, stepName, vertical } = this.props;

    const iconClass = classNames("fa fa-" + icon, "Ripple-parent");

    const stepClass = classNames(
      form
        ? "steps-step"
        : icon && vertical
          ? "steps-step-3"
          : icon && !vertical
            ? "steps-step-2"
            : null,
      this.props.className
    );

    let step;
    if (form) {
      step = <Tag className={stepClass}>{this.props.children}</Tag>;
    } else if (icon && !vertical) {
      step = (
        <Tag className={stepClass} onClick={this.props.onClick}>
          <Tooltip
            placement="top"
          >
            <Button
              className="btn-circle-2 btn-blue-grey"
            >
              <i className={iconClass} />
            </Button>
            <div>{stepName}</div>
          </Tooltip>
        </Tag >
      );
    } else if (icon && vertical) {
      step = (
        <Tag className={stepClass} onClick={this.props.onClick}>
          <Tooltip
            placement="top"
          >
            <Button
              className="btn-circle-3 btn-blue-grey"
            >
              <i className={iconClass} />
            </Button>
            <div>{stepName}</div>
          </Tooltip>
        </Tag>
      );
    } else {
      step = <li className={stepClass}>{this.props.children}</li>;
    }

    return step;
  }
}

Step.defaultProps = {
  tag: "div",
  form: false,
  vertical: false
};

export default Step;
export { Step as MDBStep };
