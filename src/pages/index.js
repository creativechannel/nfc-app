import React from "react"
import { navigate } from "gatsby"
import "../components/main.scss"

const IndexPage = () => {
/*  if (typeof window !== `undefined`) {
    const url = localStorage.getItem("url")
    if (url) {
      navigate(url)
      return null
    }
  } else {
    navigate("/market/dd091fbe-5d6e-5c88-af66-6ef1cd0ed2a6")
    return
  }*/

  return (
    <>
      <div className={"d-flex w-100 vh-100 justify-content-center align-items-center"}>
        <h1>contap.co</h1>
      </div>
    </>
  )
}

export default IndexPage
