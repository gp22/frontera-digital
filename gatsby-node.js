/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("src/templates/page.js")
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    layout
                    path
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const filterByLayout = layout => {
          return result.data.allMarkdownRemark.edges.filter(
            edge => edge.node.frontmatter.layout === layout
          )
        }
        const pages = filterByLayout("page")

        pages.forEach(({ node }) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: pageTemplate,
            context: {
              pathSlug: path,
            },
          })
        })

        resolve()
      })
    )
  })
}
