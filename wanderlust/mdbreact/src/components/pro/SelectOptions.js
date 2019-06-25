import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Fade.css';
import Input from '../Input';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      searchValue: ""
    }

    this.optionsRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.search) {
      const options = Array.from(this.optionsRef.current.children).filter(child => child.tagName === 'LI');
      this.setState({ options });
    }
  }

  search = value => {
    this.state.options.forEach(option => {
      if(!option.children[0].innerText.toLowerCase().includes(value.toLowerCase())) {
        option.style.display = 'none';
      }
      else {
        option.style.display = 'flex';
      }
    });
  };

  render() {
    const {
      className,
      children,
      search,
      searchLabel,
      searchId,
      ...attributes
    } = this.props;

    const classes = classNames(
      'dropdown-content',
      'select-dropdown',
      'fadeElement',
      className
    );

    return (
      <ul {...attributes} className={classes} ref={this.optionsRef}>
        {search && (
          <div className="mx-2">
            <Input
              label={searchLabel}
              id={searchId}
              getValue={this.search}
              data-search="true"
            />
          </div>
        )}
        {children}
      </ul>
    );
  }
}

Options.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  search: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchId: PropTypes.string
};

Options.defaultProps = {
  className: '',
  search: false,
  searchLabel: 'Search',
  searchId: 'selectSearchInput'
};

export default Options;
export { Options as MDBSelectOptions };