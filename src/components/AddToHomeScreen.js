import React, { useState } from "react"
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
  const shouldRender = visible && isIos() && !isInStandaloneMode()
  return (
    <div>
      {shouldRender ? (
        <div className="d-flex add-to-home-banner align-items-center justify-content-center p-3">
          <div className="add-to-home-content d-flex align-items-center">
            <div className="add-to-home-text mr-1">
              <a>
                {"Add to home screen"}
              </a>
            </div>
            <MdGetApp/>
          </div>
          <MdClose
            className="add-to-home-close-btn"
            onClick={handleCloseBannerBtnClick}
          />
        </div>
      ) : null}
    </div>
  )
}

export default AddToHomeScreen
