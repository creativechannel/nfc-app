import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

const ScheduleBlock = () => {
  return (
    <div className={"d-flex flex-column h-100"}>
      <h2 className={"mb-4 text-center"}>Upcoming schedule</h2>
      <Form>
        <Row>
          <Col md={8}>
            <Form.Group controlId={"formGroupLocation"}>
              <Form.Control type={"text"} placeholder={"Enter city and state or ZIP code"} size={"lg"}/>
              <p className={"mt-2 text-right pr-1"} style={{ color: "#707070" }}>Use current location</p>
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit" block size={"lg"}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Container className={"location-results"}>
        <div className={"location mb-3"}>
          <Row>
            <Col className={"location-name"}>
              <p className={"font-weight-bold"}>Atwater Village</p>
            </Col>
          </Row>
          <Row className={"location-data d-flex"}>
            <Col className={"location-info d-flex align-items-center"} lg={6}>
              <p>2909 Los Feliz Blvd<br/>
                Los Angeles, CA 90039<br/>
                323-912-9288</p>
            </Col>
            <Col className={"location-schedule d-flex flex-column font-weight-bold"}>
              <Row className={"mb-2"}>
                <Col>October 5th</Col>
                <Col className={"text-right"}>10 am</Col>
              </Row>
              <Row className={"mb-2"}>
                <Col>October 7th</Col>
                <Col className={"text-right"}>11 am</Col>
              </Row>
              <Row className={"mb-2"}>
                <Col>October 15th</Col>
                <Col className={"text-right"}>10 am</Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className={"location mb-3"}>
          <Row>
            <Col className={"location-name"}>
              <p className={"font-weight-bold"}>West Hollywood</p>
            </Col>
          </Row>
          <Row className={"location-data d-flex"}>
            <Col className={"location-info d-flex align-items-center"} lg={6}>
              <p>1015 La Brea Ave<br/>
                West Hollywood, CA 90038<br/>
                323-883-0219</p>
            </Col>
            <Col className={"location-schedule d-flex flex-column font-weight-bold"}>
              <Row className={"mb-2"}>
                <Col>October 5th</Col>
                <Col className={"text-right"}>10 am</Col>
              </Row>
              <Row className={"mb-2"}>
                <Col>October 7th</Col>
                <Col className={"text-right"}>11 am</Col>
              </Row>
              <Row className={"mb-2"}>
                <Col>October 15th</Col>
                <Col className={"text-right"}>10 am</Col>
              </Row>
            </Col>
          </Row>
        </div>

      </Container>
    </div>
  )
}

export default ScheduleBlock
