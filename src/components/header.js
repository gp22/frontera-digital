import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Logo from "../images/logo.svg"
import MenuClose from "../images/menu_close.svg"
import MenuOpen from "../images/menu_open.svg"
import tailwindConfig from "../../tailwind.config"

import NavMenu from "./navMenu"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isMobile: null, showMenu: false }
  }

  componentDidMount() {
    this.onResizeScreen()
    window.addEventListener("resize", this.onResizeScreen)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeScreen)
  }

  handleClick = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }))
  }

  onResizeScreen = () => {
    const breakpoint = tailwindConfig.theme.screens.md.match(/\d+/)

    this.setState({
      isMobile: window.innerWidth < breakpoint,
    })
  }

  render() {
    return (
      <header className="wrapper relative py-5">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          {!this.state.isMobile && (
            <nav>
              <NavMenu className="text-sm" />
            </nav>
          )}
          {this.state.isMobile && (
            <button
              className="py-3 px-5 border"
              aria-expanded={`${this.state.showMenu ? true : false}`}
              aria-label={`${
                this.state.showMenu ? "Close" : "Open"
              } Navigation Menu`}
              onClick={this.handleClick}
            >
              {this.state.showMenu ? (
                <MenuClose className="fill-current" />
              ) : (
                <MenuOpen className="fill-current" />
              )}
            </button>
          )}
          {this.state.isMobile && this.state.showMenu && (
            <nav className="absolute right-10 top-full z-10 bg-white text-right border">
              <NavMenu className="flex-col" />
            </nav>
          )}
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
