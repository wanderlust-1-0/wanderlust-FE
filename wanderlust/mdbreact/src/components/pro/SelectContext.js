import React from "react";
import { SelectContext } from "./Select";

const selectContextHOC = Component =>
  class HOC extends React.Component {
    render() {
      return (
        <SelectContext.Consumer>
          {context => <Component {...this.props} context={context} />}
        </SelectContext.Consumer>
      );
    }
  };

export default selectContextHOC;
