import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"

import ContactBlock from "../components/ContactBlock"
import { graphql } from "gatsby"
import SubscribeBlock from "../components/SubscribeBlock"
import PromotionBlock from "../components/PromotionBlock"

export const query = graphql`
    query (
        $slug: String!
    ){
        nodeMarket(drupal_id: {eq: $slug}) {
            id
            field_first_name
            field_last_name
            field_email
            field_phone
            field_job_title
            field_quote
            field_profile_picture {
                imageDerivatives {
                    links {
                        profile_picture {
                            href
                        }
                    }
                }
            }
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
                            field_call_to_action
                            field_external_link{
                                uri
                            }
                            relationships {
                                field_image {
                                    localFile {
                                        childrenImageSharp {
                                            fluid(maxWidth:800) {
                                                src
                                            }
                                        }
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
  if (typeof window !== `undefined`) {
    const id = data.nodeMarket.drupal_id
    localStorage.setItem("url", `/market/${id}`)
  }
  const promotions = data.nodeMarket.relationships.field_brand.relationships.node__promotion ? data.nodeMarket.relationships.field_brand.relationships.node__promotion : []
  const promotion = promotions[Math.floor(Math.random() * promotions.length)]
  return (
    <Layout nodeData={data.nodeMarket}>
      <Row
        className={`xpert-row justify-content-center align-items-center`}>
        <Col md={12} lg={5} className={"user-info-block d-flex align-items-center justify-content-center py-4"}>
          <ContactBlock data={data}/>
        </Col>
        <Col md={12} lg={7}
             className={"p-0 w-100 d-flex align-items-center justify-content-center overflow-hidden promotion-block"}>
          <PromotionBlock promotion={promotion}/>
        </Col>
      </Row>
      <Row className={"d-flex justify-content-center"}>
        <Col md={11} lg={12} className={"subscribe-block"}>
          <SubscribeBlock/>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
