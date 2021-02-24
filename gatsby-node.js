const path = require("path")
const VCard = require("vcard-creator").default
const fs = require("fs")

module.exports.createPages = async ({ graphql, actions }) => {
  const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "")
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3]
    }
    return null
  }
  const { createPage } = actions
  const contactBlockTemplate_id = path.resolve("./src/templates/XpertPage_id.js")
  const contactBlockTemplate = path.resolve("./src/templates/XpertPage.js")
  const response = await graphql(`
    query {
      allNodeMarket {
        edges {
          node {
            id
            drupal_id
            field_first_name
            field_last_name
            field_email
            field_phone
            field_job_title
            field_profile_picture {
              imageDerivatives {
                links {
                  profile_picture {
                    href
                  }
                }
              }
            }
            relationships {
              field_brand {
                name
                field_class
              }
            }
          }
        }
      }
    }
  `)

  response.data.allNodeMarket.edges.forEach((edge) => {
    createPage({
      component: contactBlockTemplate_id,
      path: `/market/${edge.node.id}`,
      context: {
        slug: edge.node.id,
        slug_type: "id"
      }
    })
    createPage({
      component: contactBlockTemplate,
      path: `/market/${edge.node.drupal_id}`,
      context: {
        slug: edge.node.drupal_id,
        slug_type: "drupal_id"
      }
    })
    const contact = edge.node
    const xpertCard = new VCard()
    xpertCard.addName(lastname = contact.field_last_name, firstname = contact.field_first_name)
    xpertCard.addEmail(contact.field_email)
    if (contact.field_phone) {
      xpertCard.addPhoneNumber(formatPhoneNumber(contact.field_phone))
    }
    if (contact.field_job_title) {
      xpertCard.addJobtitle(contact.field_job_title)
    }
    xpertCard.addCompany(contact.relationships.field_brand.name)
    xpertCard.addMedia( `PHOTO;VALUE=uri:${contact.field_profile_picture.imageDerivatives.links.profile_picture.href}`,true)
    xpertCard.addURL(`${process.env.FRONTEND_URL}/market/${edge.node.drupal_id}`)
    // console.log(xpertCard.toString())
    const fileName = `${contact.field_first_name}_${contact.field_last_name}_${contact.id}`.toLowerCase()
    const fileName_did = `${contact.field_first_name}_${contact.field_last_name}_${contact.drupal_id}`.toLowerCase()
    fs.writeFile(`./static/vcards/${fileName}.vcard`, xpertCard.toString(), () => {
    })
    fs.writeFile(`./static/vcards/${fileName_did}.vcard`, xpertCard.toString(), () => {
    })
  })
}
