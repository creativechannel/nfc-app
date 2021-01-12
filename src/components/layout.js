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

const Layout = ({ children, mdData }) => {
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
      <Header data={mdData.frontmatter}/>
      <Container fluid={true} className={mdData.frontmatter.brandClass}>{children}</Container>
    </>
  )
}


export default Layout
