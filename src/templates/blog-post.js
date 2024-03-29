import * as React from "react"
import {graphql, Link} from "gatsby"
import Header from "../components/header"

import Layout from "../components/Layout"

const BlogPostTemplate = ({ data }) => {
    const post = data.markdownRemark
    const { previous, next } = data

    return(
        <Layout>
          <Header location = {post.frontmatter.title} />
          <div className = "container py-5 px-2 bg-white"> 
            <article className="blog-post" itemScope itemType = "http://schema.org/Article">
              <p align="right">{post.frontmatter.date}</p>
              <div class="row px-4">
                  <div class="col-12">
                  <section
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  itemProp="articleBody"
                  />
                  </div>
              </div>
              <div className="col-12 py-4">
                <div className="btn-group btn-group-lg w-100">
                  {previous && <Link to = {previous.fields.slug} className="btn btn-outline-primary"><i className="fa fa-angle-left mr-2"></i> Previous</Link>}
                  {next && <Link to = {next.fields.slug} type="button" className="btn btn-outline-primary">Next<i className="fa fa-angle-right ml-2"></i></Link>}
                </div> 
              </div>
            </article>
          </div>
        </Layout>
    )
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(
      id: { eq: $previousPostId }
      )
      {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(
      id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
