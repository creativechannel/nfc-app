import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"


const ContactBlock = ({ data }) => {
  const xpert = data.nodeMarket
  const vcardFileName = `${xpert.field_first_name}_${xpert.field_last_name}_${xpert.relationships.field_brand.field_class}`.toLowerCase()
  return (
    <div className={"d-flex justify-content-center user-info align-items-center"}>

      <div className={"user-picture"}>
        {xpert.relationships.field_profile_picture.localFile.publicURL ?
          <img src={xpert.relationships.field_profile_picture.localFile.publicURL} alt={`${xpert.first_name} ${xpert.last_name}`}
               className={"user-icon"}/>
          :
          <div className={"user-icon d-flex justify-content-center align-items-center"}>
            <FontAwesomeIcon icon={faUser} color={"white"} size={"6x"}/>
          </div>
        }
      </div>

      <div className={"user-data d-flex flex-column w-75"}>
        <div className={"d-flex "}>
          <div className={"title"}>
            {xpert.job_title}
          </div>
        </div>
        <div>
          <div className={"name"}>
            {`${xpert.field_first_name} ${xpert.field_last_name}`}
          </div>
        </div>
        <div className={"d-flex flex-row align-items-baseline"}>
          <div className={"w-25 email-label label"}>Email:</div>
          <div className={"w-75 email"}><a href={`mailto:${xpert.field_email}`}>{`${xpert.field_email}`}</a></div>
        </div>
        <div className={"d-flex flex-row align-items-baseline"}>
          <div className={"w-25 phone-label label"}>Phone:</div>
          <div className={"w-75 phone"}><a href={`tel:${xpert.field_phone}`}>{`${xpert.field_phone}`}</a></div>
        </div>
        <Link to={`/vcards/${vcardFileName}.vcard`}>
          <Button variant="primary" size={"lg"} className={"mt-3"} block>Download vCard</Button></Link>
      </div>

    </div>
  )
}

export default ContactBlock
