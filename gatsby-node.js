const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
//const { fmImagesToRelative } = require('gatsby-remark-relative-images')
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
//exports.createPages = ({ actions, graphql }) => {
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagsPost = path.resolve(`./src/templates/tags.js`)

  // Get all markdown blog posts sorted by date
  const blogResult = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            templateKey
          }
        }
      }
    }
  `)

  if (blogResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      blogResult.errors
    )
    return
  }
  const posts = blogResult.data.allMarkdownRemark.nodes

  exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode })

      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      // posts.forEach((post) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        tags: post.frontmatter.tags,
        // component: blogPost,
        component: path.resolve(
          `src/templates/${String(post.frontmatter.templateKey)}.js`
        ),
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach((post) => {
    // if (_.get(post, `post.frontmatter.tags`)) {
    tags = tags.concat(post.frontmatter.tags)
    // }
  })
  // Delete null tag
  tags = tags.filter(function (e) {
    return e != null
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)
  // Show tags
  console.log(tags)

  // Make tag pages
  tags.forEach((tag) => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag,
      },
    }) // End createPage
  }) // End Make tag pages
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
