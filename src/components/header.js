import PropTypes from "prop-types"
import React from "react"
import { Navbar} from "react-bootstrap"
// import { FaEnvelope } from "@react-icons/all-files/fa/faEnvelope"
// import { IconContext } from "@react-icons/all-files"
import { cmsImageEncoder } from "../helpers/helpers"

const Header = ({ data }) => {
  const logo = cmsImageEncoder(data.relationships.field_logo.localFile.publicURL)
  return (
    <Navbar bg={"light"} expand={"lg"} className={data.field_class}>
      <Navbar.Brand href={"/"}>
        <img src={logo} alt={`${data.brandClass}-logo`} className={"brand-logo"}/>
      </Navbar.Brand>
      {/*<Nav className={"ml-auto"}>*/}
      {/*  <Nav.Link>*/}
      {/*    <IconContext.Provider value={{ className: "notification-icon", size:"2em" }}>*/}
      {/*      <FaEnvelope/>*/}
      {/*    </IconContext.Provider>*/}
      {/*  </Nav.Link>*/}
      {/*</Nav>*/}
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
