import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import "../Transitions.css";
import Waves from "../Waves";
import ScrollBar from './PerfectScrollbar';
import SideNavContext from './SideNavContext';

class SideNav extends React.Component {

  constructor(props) {
    super(props);

    function isOpen() {
      if (props.fixed) {

        if ((window.innerWidth <= props.breakWidth)) {
          return props.responsive ? false : true
        }

        return true;

      } else {
        if (props.triggerOpening) {
          if ((window.innerWidth > props.breakWidth)) {
            return true
          }

          return false;

        }
        return false;
      }
    }

    this.sideNavRef = React.createRef();
    this.initialX = null;
    this.initialY = null;

    this.state = {
      initiallyFixed: props.fixed,
      isFixed: !isOpen() ? false : props.fixed,
      isOpen: isOpen(),
      cursorPos: {},
      slim: this.props.slim,
      slimInitial: this.props.slim
    };
  }



  componentDidMount() {
    if (this.props.triggerOpening && !this.props.responsive) {
      throw new Error('Received "triggerOpening" prop for a  non-responsive Sidebar. If you want to contidionally render Sidenav, set the responsive prop to true');
    }

    this.sideNavRef.current.addEventListener("touchstart", this.startTouch);
    this.sideNavRef.current.addEventListener("touchmove", this.moveTouch);
    window.addEventListener("resize", this.updatePredicate);
  }

  startTouch = e => {
    this.initialX = e.touches[0].clientX;
    this.initialY = e.touches[0].clientY;
  };

  moveTouch = e => {
    if (this.initialX === null) {
      return;
    }

    if (this.initialY === null) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = this.initialX - currentX;
    const diffY = this.initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        !this.props.right && this.handleOverlayClick()
      } else {
        this.props.right && this.handleOverlayClick()
      }
    }

    this.initialX = null;
    this.initialY = null;

    e.preventDefault();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.triggerOpening !== this.props.triggerOpening) {

      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
    this.sideNavRef.current.removeEventListener("touchstart", this.startTouch);
    this.sideNavRef.current.removeEventListener("touchmove", this.moveTouch);
  }

  updatePredicate = () => {
    if (!this.props.hidden && this.props.responsive) {
      this.setState({ isOpen: window.innerWidth > this.props.breakWidth });

      if (window.innerWidth > this.props.breakWidth) {
        this.setState({ isOpen: true, isFixed: this.state.initiallyFixed });
      } else {
        this.setState({
          isOpen: false,
          isFixed: false
        });
      }
    }
  };

  toggleSlim = e => () => {
    this.setState({ slim: !this.state.slim });

    const sidenav = ReactDOM.findDOMNode(this.sideNavRef.current);
    sidenav.classList.toggle('slim');
  }

  handleOverlayClick = () => {
    if (this.state.isFixed) return
    this.setState({
      isOpen: false
    });
    if (this.props.onOverlayClick) {
      this.props.onOverlayClick();
    }
  };

  handleClick = e => {
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
    }
    e.stopPropagation();
  };

  render() {
    const {
      bg,
      breakWidth,
      children,
      className,
      hidden,
      href,
      logo,
      mask,
      onOverlayClick,
      right,
      triggerOpening,
      showOverlay,
      fixed,
      responsive,
      slim,
      tag: Tag,
      ...attributes
    } = this.props;

    const { isOpen, isFixed } = this.state;

    const classes = classNames(
      "side-nav",
      'wide',
      right && "right-aligned",
      this.state.slimInitial && "slim",
      className
    );

    const overlay = (
      <div
        id="sidenav-overlay"
        onClick={this.handleOverlayClick}
      />
    );

    const sidenav = (
      <Tag
        {...attributes}
        ref={this.sideNavRef}
        className={classes}
        data-animate={isFixed ? false : undefined}
        style={bg ? { backgroundImage: `url(${bg}` } : undefined}
      >
        <ScrollBar option={{ suppressScrollX: true }}>
          <ul className="list-unstyled">
            {logo && (
              <li>
                <div className="logo-wrapper">
                  <a
                    href={href}
                    className="Ripple-parent"
                    onClick={this.handleClick}
                  >
                    <img
                      src={logo}
                      alt=""
                      className="img-fluid flex-center d-block"
                    />
                    <Waves cursorPos={this.state.cursorPos} />
                  </a>
                </div>
              </li>
            )}
            {children}
          </ul>
        </ScrollBar >
        {mask && <div className={`sidenav-bg ${mask}`} />}
      </Tag>
    );


    return (
      <SideNavContext.Provider value={{
        slimInitial: this.state.slimInitial,
        slim: this.state.slim,
        toggleSlim: this.toggleSlim,
        right: this.props.right
      }}>
        {
          isFixed ?
            sidenav
            :
            (
              <CSSTransition
                appear={!this.state.isFixed}
                timeout={{ enter: 300, exit: 300 }}
                classNames={right ? "right-side-slide" : "side-slide"}
                in={isOpen}
              >
                {sidenav}
              </CSSTransition>
            )
        }
        {isFixed ? false : (showOverlay && isOpen) && overlay}
      </SideNavContext.Provider>
    )
  }
}

SideNav.propTypes = {
  bg: PropTypes.string,
  breakWidth: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  href: PropTypes.string,
  logo: PropTypes.string,
  mask: PropTypes.string,
  onOverlayClick: PropTypes.func,
  right: PropTypes.bool,
  triggerOpening: PropTypes.bool,
  tag: PropTypes.string,
  fixed: PropTypes.bool,
  showOverlay: PropTypes.bool,
  responsive: PropTypes.bool,
  slim: PropTypes.bool,
};

SideNav.defaultProps = {
  bg: '',
  breakWidth: 1400,
  className: '',
  hidden: false,
  href: "#",
  logo: '',
  mask: '',
  onOverlayClick: () => { },
  right: false,
  triggerOpening: false,
  tag: "div",
  fixed: false,
  responsive: true,
  showOverlay: true,
  slim: false,
};

export default SideNav;
export { SideNav as MDBSideNav };
