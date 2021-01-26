import PropTypes from "prop-types"
import React from "react"
import { Navbar } from "react-bootstrap"

const DemoHeader = ({ siteTitle }) => {
  return (
    <Navbar bg={"light"} expand={"lg"}>
      <Navbar.Brand href={"/"}>{siteTitle}</Navbar.Brand>
    </Navbar>
  )
}

DemoHeader.propTypes = {
  siteTitle: PropTypes.string
}

DemoHeader.defaultProps = {
  siteTitle: ``
}

export default DemoHeader
