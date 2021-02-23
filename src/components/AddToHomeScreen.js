import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { MdClose } from "@react-icons/all-files/md/MdClose"
import { MdGetApp } from "@react-icons/all-files/md/MdGetApp"

const AddToHomeScreen = () => {
  const [visible, setVisibility] = useState(true)
  const handleCloseBannerBtnClick = () => setVisibility(false)

  const isIos = () => {
    if (typeof window !== `undefined`) {
      const userAgent = window.navigator.userAgent.toLowerCase()
      return /iphone|ipad|ipod/.test(userAgent)
    }
    return false
  }

  const isInStandaloneMode = () => {
    if (typeof window !== `undefined`) {
      return "standalone" in window.navigator && window.navigator.standalone
    }
    return false
  }
  const shouldRender = visible && isIos() && isInStandaloneMode()
  return (
    <div>
      {shouldRender ? (
        <Row className={"add-to-home-banner"}>
          <Col xs={10} className={"d-flex align-items-center justify-content-center pr-0 pl-5"}>
            <div className="add-to-home-text mr-3">
              <a>
                {"Add to Home Screen"}
              </a>
            </div>
            <MdGetApp/>
          </Col>
          <Col xs={2} className={"d-flex align-items-center justify-content-center pr-0 pl-0"}>
            <MdClose
              className="add-to-home-close-btn"
              onClick={handleCloseBannerBtnClick}
            />
          </Col>
        </Row>
      ) : null}
    </div>
  )
}

export default AddToHomeScreen
