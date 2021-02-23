import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"

import ContactBlock from "../components/ContactBlock"
import { graphql } from "gatsby"
import SubscribeBlock from "../components/SubscribeBlock"
import PromotionBlock from "../components/PromotionBlock"
import ScheduleBlock from "../components/ScheduleBlock"
import RetailerBlock from "../components/RetailerBlock"

export const query = graphql`
    query (
        $slug: String!
    ){
        nodeMarket(drupal_id: {eq: $slug}) {
            id
            drupal_id
            field_first_name
            field_last_name
            field_email
            field_phone
            field_job_title
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
      {/*<Row className={"d-flex justify-content-center"}>*/}
      {/*  <Col md={12} lg={5} className={"subscribe-block"}>*/}
      {/*    <SubscribeBlock/>*/}
      {/*  </Col>*/}
      {/*  <Col md={12} lg={7} className={"schedule-block"}>*/}
      {/*    <ScheduleBlock/>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
      {/*<Row className={"d-flex justify-content-center"}>*/}
      {/*  <Col className={"retailers-block"} style={{ paddingTop: "30px", paddingBottom: "30px" }}>*/}
      {/*    <RetailerBlock/>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
      {/*<Row className={"d-flex justify-content-center"}>*/}
      {/*  <Col md={12} lg={8} className={"product-spotlight-block"}>*/}
      {/*    <div>*/}
      {/*      <h2 className={"mb-3 mb-lg-5 text-lg-center"}>Product Spotlight</h2>*/}
      {/*      {promotions.map((product) => {*/}
      {/*        return (*/}
      {/*          <Row className={"mb-3"} style={{ maxHeight: "90px", overflow: "hidden" }}>*/}
      {/*            <Col>*/}
      {/*              <img src={product.relationships.field_image.localFile.childrenImageSharp[0].fluid.src}*/}
      {/*                   alt={"alt-text"}*/}
      {/*                   className={"img-fluid w-100"}/>*/}
      {/*            </Col>*/}
      {/*            <Col xs={6}>*/}
      {/*              <h5>Product name</h5>*/}
      {/*              <p>Product description</p>*/}
      {/*            </Col>*/}
      {/*          </Row>*/}
      {/*        )*/}
      {/*      })}*/}
      {/*    </div>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
    </Layout>
  )
}

export default IndexPage
