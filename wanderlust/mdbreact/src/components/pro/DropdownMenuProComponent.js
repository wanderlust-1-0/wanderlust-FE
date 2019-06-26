import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

const DropdownMenuProComponent = ({ isOpen, tag: Tag, tabIndex, role, attributes, aria, d_key, children }) => (
  <CSSTransition
    in={isOpen}
    appear={isOpen}
    classNames="popover"
    unmountOnExit
    timeout={{ enter: 300, exit: 300 }}
  >
    <Tag
      tabIndex={tabIndex}
      role={role}
      {...attributes}
      aria-hidden={aria}
      key={d_key}
    >
      {children}
    </Tag>
  </CSSTransition>
);

DropdownMenuProComponent.propTypes = {
  aria: PropTypes.bool.isRequired,
  attributes: PropTypes.object.isRequired,
  d_key: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  tabIndex: PropTypes.string.isRequired,
  tag: PropTypes.any.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default DropdownMenuProComponent;
export { DropdownMenuProComponent as MDBDropdownMenuProComponent };
