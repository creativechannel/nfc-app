import { Col, Row } from "react-bootstrap"
import React from "react"

const RetailerBlock = () => {
  return (<div className={"d-flex flex-column"}>
    <h2 className={"text-center mb-5"}>Retailer Promotions</h2>
    <Row>
      <Col xs={6} lg={3}>
        <div className={"d-flex justify-content-center align-items-center"} style={{
          height: "100px", borderRadius: 5,
          border: "1px solid #b2b2b2",
          padding: 10,
          marginBottom: 30,
          backgroundColor: "#fff",
          boxShadow: "0px 3px 4px 0px #0000004d"
        }}>
          <img src={"/retailer_logos/best_buy.png"} alt={"Lowes"} className={"img-fluid"} style={{maxHeight:90}}/>
        </div>
      </Col>
      <Col xs={6} lg={3}>
        <div className={"d-flex justify-content-center align-items-center"} style={{
          height: "100px", borderRadius: 5,
          border: "1px solid #b2b2b2",
          padding: 10,
          marginBottom: 30,
          backgroundColor: "#fff",
          boxShadow: "0px 3px 4px 0px #0000004d"
        }}>
          <img src={"/retailer_logos/costco.png"} alt={"Lowes"} className={"img-fluid"} style={{maxHeight:90}}/>
        </div>
      </Col>
      <Col xs={6} lg={3}>
        <div className={"d-flex justify-content-center align-items-center"} style={{
          height: "100px", borderRadius: 5,
          border: "1px solid #b2b2b2",
          padding: 10,
          marginBottom: 30,
          backgroundColor: "#fff",
          boxShadow: "0px 3px 4px 0px #0000004d"
        }}>
          <img src={"/retailer_logos/lowes.png"} alt={"Lowes"} className={"img-fluid"} style={{maxHeight:90}}/>
        </div>
      </Col>
      <Col xs={6} lg={3}>
        <div className={"d-flex justify-content-center align-items-center"} style={{
          height: "100px", borderRadius: 5,
          border: "1px solid #b2b2b2",
          padding: 10,
          marginBottom: 30,
          backgroundColor: "#fff",
          boxShadow: "0px 3px 4px 0px #0000004d"
        }}>
          <img src={"/retailer_logos/bed_bath_beyond.png"} alt={"Lowes"} className={"img-fluid"} style={{maxHeight:90}}/>
        </div>
      </Col>
    </Row>
  </div>)
}

export default RetailerBlock
