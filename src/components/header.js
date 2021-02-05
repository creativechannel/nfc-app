import PropTypes from "prop-types"
import React from "react"
import { Navbar } from "react-bootstrap"
import { cmsImageEncoder } from "../helpers/helpers"

const Header = ({ data }) => {
  const logo = cmsImageEncoder(data.relationships.field_logo.localFile.publicURL)
  return (
    <Navbar bg={"light"} expand={"lg"} className={data.field_class}>
      <Navbar.Brand href={"/"}>
        <img src={logo} alt={`${data.brandClass}-logo`}/>
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
