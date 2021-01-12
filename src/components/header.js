import PropTypes from "prop-types"
import React from "react"
import { Navbar } from "react-bootstrap"

const Header = ({ data }) => {
  return (
    <Navbar bg={"light"} expand={"lg"} className={data.brandClass}>
      <Navbar.Brand href={"/"}>
        <img src={data.logo.childImageSharp.original.src} alt={`${data.brandClass}-logo`}/>
      </Navbar.Brand>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
