import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"

import ContactBlock from "../components/ContactBlock"
import { graphql } from "gatsby"
import { ConditionalWrapper } from "../helpers/helpers"
// import SubscribeBlock from "../components/SubscribeBlock"

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

const IndexPage = ({ data, pageContext }) => {
  if (typeof window !== `undefined`) {
    const id = data.nodeMarket.drupal_id
    localStorage.setItem("url", `/market/${id}`)
  }
  const promotions = data.nodeMarket.relationships.field_brand.relationships.node__promotion ? data.nodeMarket.relationships.field_brand.relationships.node__promotion : []
  const promotion = promotions[Math.floor(Math.random() * promotions.length)]
  const promotionImage = promotion.relationships.field_image.localFile.childrenImageSharp[0].fluid.src
  return (
    <Layout nodeData={data.nodeMarket}>
      <Row
        className={`xpert-row justify-content-center align-items-center`}>
        <Col xs={12} sm={5} className={"user-info-block d-flex align-items-center justify-content-center"}>
          <ContactBlock data={data}/>
        </Col>
        <Col xs={12} sm={7}
             className={"p-0 w-100 d-flex align-items-center justify-content-center overflow-hidden promotion-block"}>
          <ConditionalWrapper
            condition={promotion.field_external_link}
            wrapper={(children) => <a href={promotion.field_external_link.uri} className={"w-100"}>{children}</a>}
          >
            <img
              src={promotionImage}
              alt={promotion.title}
              className={"img-fluid w-100"}
            />
          </ConditionalWrapper>
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
