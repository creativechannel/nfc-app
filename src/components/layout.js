/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Header from "./header"
import "./main.scss"
import DemoHeader from "./DemoHeader"

const Layout = ({ children, wpData }) => {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)
  return (
    <>
      <DemoHeader siteTitle={data.site.siteMetadata?.title || `Title`}/>
      <Header data={wpData.brands}/>
      <Container fluid={true} className={wpData.brands.nodes[0].name}>{children}</Container>
    </>
  )
}


export default Layout
