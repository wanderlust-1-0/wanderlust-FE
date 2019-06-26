import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from '../Waves';
import { NavLink as Link } from 'react-router-dom';
import SideNavContext from './SideNavContext'


class SideNavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!this.props.disabled) {
      // Waves - Get Cursor Position
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({ cursorPos: cursorPos });
      // do the passed in callback:
      if (this.props.onClick) {
        this.props.onClick(e);
      }
      e.stopPropagation();
    }
  }

  render() {
    const {
      tag: Tag,
      children,
      to,
      className,
      innerRef,
      topLevel,
      shortcut,
      ...attributes
    } = this.props;

    const classes = classNames(
      'Ripple-parent',
      topLevel && 'collapsible-header',
      className
    );


    const sideNavLink = (
      <SideNavContext.Consumer >
        {({ slim }) => {
          let shortcut;

          function calculateShortcut() {
            if (typeof children === 'string') {
              const wordsArray = children.toString().split(' ');

              if (wordsArray.length === 1) {
                return wordsArray[0].substr(0, 2).toUpperCase();
              }

              if (wordsArray.length >= 2) {
                const firstLetter = wordsArray[0].substr(0, 1);
                const secondLetter = wordsArray[1].substr(0, 1);
                return firstLetter.concat(secondLetter).toUpperCase();
              }
            }
            return children
          }

          if (slim) {
            shortcut = this.props.shortcut || calculateShortcut();
          }


          return (
            <Link
              className={classes}
              ref={innerRef}
              onClick={this.handleClick}
              to={to}
              {...attributes}
            >

              {slim ? (
                (
                  (<><span className="sv-slim">{shortcut}</span>
                    <span className="sv-normal">{children}</span></>)
                )
              )
                : <span className="sv-normal">{children}</span>
              }
              <Waves cursorPos={this.state.cursorPos} />
            </Link>
          )
        }
        }
      </SideNavContext.Consumer >

    );

    return topLevel ? <li> {sideNavLink}</li> : sideNavLink;
  }
}

SideNavLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tag: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  topLevel: PropTypes.bool,
  shortcut: PropTypes.string
};

SideNavLink.defaultProps = {
  to: '#',
  topLevel: false
};

export default SideNavLink;
export { SideNavLink as MDBSideNavLink };
