import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { graphql, useStaticQuery, Link } from "gatsby"

const DemoHeader = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark {
              edges {
                  node {
                      frontmatter{
                          brandName
                      }
                      fields {
                          slug
                      }
                  }
              }
          }
      }
  `)
  return (
    <Navbar bg={"light"} expand={"lg"}>
      <Navbar.Brand href={"/"}>{siteTitle}</Navbar.Brand>
      <Nav className={"ml-auto"}>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          const node = edge.node
          return (
            <Nav.Link as={Link} key={index} to={`/market/${node.fields.slug}`}>{node.frontmatter.brandName}</Nav.Link>
          )
        })}
      </Nav>
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
