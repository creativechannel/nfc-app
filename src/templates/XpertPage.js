import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"

import ContactBlock from "../components/ContactBlock"
import { graphql } from "gatsby"
// import SubscribeBlock from "../components/SubscribeBlock"

export const query = graphql`
    query (
        $slug: String!
    ){
        nodeMarket(id: {eq: $slug}) {
            id
            field_first_name
            field_last_name
            field_email
            field_phone
            field_job_title
            relationships {
                field_profile_picture {
                    localFile {
                        publicURL
                    }
                }
                field_brand {
                    id
                    name
                    field_class
                    relationships {
                        field_logo {
                            localFile {
                                publicURL
                            }
                        }
                        node__promotion {
                            title
                            relationships {
                                field_image {
                                    localFile {
                                        publicURL
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const IndexPage = ({ data }) => {
  localStorage.setItem("url", `/market/${data.nodeMarket.id}`)
  const promotions = data.nodeMarket.relationships.field_brand.relationships.node__promotion ? data.nodeMarket.relationships.field_brand.relationships.node__promotion : []
  const promotion = promotions[Math.floor(Math.random() * promotions.length)]
  return (
    <Layout nodeData={data.nodeMarket}>
      <Row
        className={`xpert-row justify-content-center align-items-center`}>
        <Col xs={12} sm={5} className={"user-info-block d-flex align-items-center justify-content-center"}>
          <ContactBlock data={data}/>
        </Col>
        <Col xs={12} sm={7}
             className={"p-0 w-100 d-flex align-items-center justify-content-center overflow-hidden promotion-block"}>
          <a href={"https://lgus.csod.com/client/lgus/default.aspx"} className={"w-100"}>
            <img
              src={promotion.relationships.field_image.localFile.publicURL}
              alt={promotion.title}
              className={"img-fluid w-100"}
            />
          </a>
        </Col>
      </Row>
      {/*<Row className={"d-flex justify-content-center"}>*/}
      {/*  <Col className={"subscribe-block"}>*/}
      {/*    <SubscribeBlock/>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
    </Layout>
  )
}

export default IndexPage
