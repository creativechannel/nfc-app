import React from "react"

import DemoHeader from "../components/DemoHeader"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)
  return (
    <>
    <DemoHeader siteTitle={data.site.siteMetadata?.title || `Title`} />
    </>
  )
}

export default IndexPage
