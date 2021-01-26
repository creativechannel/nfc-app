import React from "react"

import DemoHeader from "../components/DemoHeader"
import { graphql, useStaticQuery, Link } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
          allNodeMarket {
              edges {
                  node {
                      id
                      title
                      field_first_name
                      field_last_name
                      relationships {
                          field_brand {
                              name
                          }
                      }
                  }
              }
          }
      }
  `)
  return (
    <>
      <DemoHeader siteTitle={data.site.siteMetadata?.title || `Title`}/>
      <ul>
        {data.allNodeMarket.edges.map((edge) => {
          const node = edge.node
          return (
            <li>
              <Link to={`/market/${node.id}`}>{`${node.relationships.field_brand.name}: ${node.title} - ${node.field_first_name} ${node.field_last_name}`}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default IndexPage
