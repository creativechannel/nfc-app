import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import moment from "moment"
import { Col, Row } from "react-bootstrap"
import { MdGetApp } from "@react-icons/all-files/md/MdGetApp"
import { MdClose } from "@react-icons/all-files/md/MdClose"

const provideButton = (_) => {
  const dismissed = localStorage.getItem("pwa_dismissal")
  return !dismissed || dismissed < moment()
}

const PWAInstall = (props) => {
  const { suspend, acceptedUri, dismissedUri, children, ...other } = props

  const [showButton, setShowButton] = useState(provideButton)
  const [prompt, setPrompt] = useState(null)

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault()
        if (showButton) setPrompt(e)
        console.log("beforeinstallprompt event was fired.")
      }
    )

    return (_) => {
      window.removeEventListener("beforeinstallprompt", (e) => {
          e.preventDefault()
          if (showButton) setPrompt(e)
        }
      )
    }
  }, [showButton])

  const handle_prompt = (_) => {
    setShowButton(false)
    prompt.prompt()
    setPrompt(null)

    prompt.userChoice.then((result) => {
      if (result.outcome === "accepted")
        if (acceptedUri) navigate(acceptedUri)

      if (result.outcome === "dismissed") {
        localStorage.setItem(
          "pwa_dismissal",
          moment().add(suspend || 2, "days")
        )
        if (dismissedUri) navigate(dismissedUri)
      }
    })
  }

  return (
    <div>
      {showButton && prompt ? (
        <Row className={"add-to-home-banner"} onClick={handle_prompt}>
          <Col xs={10} className={"d-flex align-items-center justify-content-center pr-0 pl-5"}>
            <div className="add-to-home-text mr-3">
              <a>
                {"Add to Home Screen"}
              </a>
            </div>
            <MdGetApp/>
          </Col>
          <Col xs={2} className={"d-flex align-items-center justify-content-center pr-0 pl-0"}>
          </Col>
        </Row>
      ) : null}
    </div>
  )
}

export default PWAInstall
