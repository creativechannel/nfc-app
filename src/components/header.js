import PropTypes from "prop-types"
import React from "react"
import { Navbar } from "react-bootstrap"

const Header = ({ data }) => {
  return (
    <Navbar bg={"light"} expand={"lg"} className={data.field_class}>
      <Navbar.Brand href={"/"}>
        <img src={data.relationships.field_logo.localFile.publicURL} alt={`${data.brandClass}-logo`}/>
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
