const path = require("path")
const VCard = require("vcard-creator").default
const fs = require("fs")

module.exports.createPages = async ({ graphql, actions }) => {
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
            relationships {
              field_brand {
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
    xpertCard.addName(lastname = contact.field_last_name, firstname = contact.field_first_name, additional = contact.field_job_title)
    xpertCard.addEmail(contact.field_email)
    if (contact.field_phone) {
      xpertCard.addPhoneNumber(contact.field_phone)
    }

    // console.log(xpertCard.toString())
    const fileName = `${contact.field_first_name}_${contact.field_last_name}_${contact.id}`.toLowerCase()
    fs.writeFile(`./static/vcards/${fileName}.vcard`, xpertCard.toString(), () => {
    })
  })
}

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type NodeMarket implements Node {
//       field_first_name: String
//     }
//   `
//   createTypes(typeDefs)
// }
