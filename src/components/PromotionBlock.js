import React from "react"
import { ConditionalWrapper } from "../helpers/helpers"

const PromotionBlock = ({ promotion }) => {
  const promotionImage = promotion.relationships.field_image.localFile.childrenImageSharp[0].fluid.src

  return (

    <div className={"d-flex flex-column w-100"}>
      <ConditionalWrapper
        condition={promotion.field_external_link}
        wrapper={(children) => <a href={promotion.field_external_link.uri} className={"w-100"}>{children}</a>}
      >
        <img
          src={promotionImage}
          alt={promotion.title}
          className={"img-fluid w-100"}
        />
      </ConditionalWrapper>
      <ConditionalWrapper
        condition={promotion.field_external_link}
        wrapper={(children) => <a href={promotion.field_external_link.uri} className={"w-100"}>{children}</a>}
      >
        <div className={"cta text-center p-3"}>{promotion.field_call_to_action}</div>
      </ConditionalWrapper>

    </div>

  )
}
export default PromotionBlock
