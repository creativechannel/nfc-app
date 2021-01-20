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
    allWpMarket {
      edges {
        node {
          id
        }
      }
    }
  }
  `)

  response.data.allWpMarket.edges.forEach((edge) => {
    createPage({
      component: contactBlockTemplate,
      path: `/market/${edge.node.id}`,
      context: {
        slug: edge.node.id
      }
    })
    // const contact = edge.node.frontmatter
    // const xpertCard = new VCard()
    // xpertCard.addName(lastname = contact.lastName, firstname = contact.firstName, additional = contact.title)
    // xpertCard.addEmail(contact.email)
    // xpertCard.addPhoneNumber(contact.phone)
    //
    // console.log(xpertCard.toString())
    // const fileName = `${contact.firstName}_${contact.lastName}_${contact.brandClass}`.toLowerCase()
    // fs.writeFile(`./src/markets/vcards/${fileName}.vcard`, xpertCard.toString(), () =>{})
  })
}
