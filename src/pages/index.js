import React from "react"
import { navigate } from "gatsby"
import "../components/main.scss"

const IndexPage = () => {
  let url = ""
  if (typeof window !== `undefined`) {
    url = localStorage.getItem("url")
    if (url) {
      navigate(url)
      return null
    }
  }
  return (
    <>
      <div className={"d-flex w-100 vh-100 justify-content-center align-items-center"}>
        <h1>contap.co</h1>
      </div>
    </>
  )
}

export default IndexPage
