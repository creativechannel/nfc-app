import React from "react"
import { navigate } from "gatsby"
import "../components/main.scss"

const IndexPage = () => {
  if (typeof window !== `undefined`) {
    const url = localStorage.getItem("url")
    if (url) {
      navigate("/market/084b039d-f502-5d17-bf73-2f11a5658a23")
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
