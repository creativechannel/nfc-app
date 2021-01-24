const path = require("path")
const VCard = require("vcard-creator").default
const fs = require("fs")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug
//     })
//   }
// }


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const contactBlockTemplate = path.resolve("./src/templates/XpertPage.js")
  const response = await graphql(`
    query {
      allNodeMarket {
        edges {
          node {
            id
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
      component: contactBlockTemplate,
      path: `/market/${edge.node.id}`,
      context: {
        slug: edge.node.id
      }
    })
    // const contact = edge.node
    // const xpertCard = new VCard()
    // xpertCard.addName(lastname = contact.field_last_name, firstname = contact.field_first_name, additional = contact.field_job_title)
    // xpertCard.addEmail(contact.field_email)
    // xpertCard.addPhoneNumber(contact.field_phone)
    //
    // console.log(xpertCard.toString())
    // const fileName = `${contact.field_first_name}_${contact.field_last_name}_${contact.relationships.field_brand.field_class}`.toLowerCase()
    // fs.writeFile(`./src/markets/vcards/${fileName}.vcard`, xpertCard.toString(), () => {
    // })
  })
}
