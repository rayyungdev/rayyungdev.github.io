const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


const pathMap = {
  blogs: "/blogs",
  projects: "/projects",
  FAQ:"/interviews",
}
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const postTemplate = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const post = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (post.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      post.errors
    )
    return
  }
  
  const Posts = post.data.allMarkdownRemark.nodes
  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (Posts.length > 0) {
    Posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : Posts[index - 1].id
      const nextPostId = index === Posts.length - 1 ? null : Posts[index + 1].id

      createPage({
        path: `${post.fields.slug}`,
        component: postTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName

    const value = createFilePath({ node, getNode})

    createNodeField({
      name: `slug`,
      node,
      value: `/${source}${value}`
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
    }

    type Author {
      name: String
      summary: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
      snail: String

    }
  `)
}

