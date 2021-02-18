import React from "react"
import { Button, Col, Form, Row } from "react-bootstrap"

const SubscribeBlock = () => {

  return (
    <div className={"h-100 d-flex flex-column"}>
      <h2 className={"text-center"}>Subscribe to Stay Up to Date</h2>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formGroupFirstName">
              <Form.Control type="text" placeholder="First Name" size={"lg"}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGroupLastName">
              <Form.Control type="text" placeholder="Last Name" size={"lg"}/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Email Address" size={"lg"}/>
            </Form.Group>
            <Button variant="primary" type="submit" block size={"lg"}>
              Subscribe
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default SubscribeBlock
