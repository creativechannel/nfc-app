/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Container } from "react-bootstrap"

import Header from "./header"
import "./main.scss"

const Layout = ({ children, nodeData }) => {
  return (
    <>
      <Header data={nodeData.relationships.field_brand}/>
      <Container fluid={true} className={nodeData.relationships.field_brand.field_class}>{children}</Container>
    </>
  )
}


export default Layout
