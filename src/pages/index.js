import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import {getImage, GatsbyImage} from "gatsby-plugin-image"

/*
  We're going let's consolidate... just move the carosel and side bar here b.c the caraousel and the blog list are only used for the index anyway 
*/

const BlogIndex = ({data}) => {
  const blogs = data.blogs.nodes
  const projects = data.projects.nodes

  return (

    <Layout >
      <div className = 'container p-0' >
        <div id = "blog-carousel" className = "caraousel slide" data-ride ="carousel">
            <div className="carousel-inner">
                {projects.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    const img = getImage(post.frontmatter.featuredImage)
                  return(
                        <div class='caraousel-item active'>
                            <GatsbyImage
                                image = {img}
                                imgClassName='w-100'
                            />

                            <div className = 'carousel-caption d-flex flex-column align-items-center '>
                                <h1 className='mb-3 text-white font-weight-bold'> Current Project: </h1>
                                <h5 className='mb-3 text-white font-weight-bold'> {title} </h5>
                                <div class='d-flex text-white'>
                                    <small className='mr-2' > {post.frontmatter.date} </small>
                                </div>
                                <Link to = {post.fields.slug} className = 'btn btn-lg btn-outline-light mt-4'> Read More </Link>
                            </div>
                        </div>
                )})}
            </div>
        </div>
      </div>

      <ol style={{ listStyle: `none` }} className = 'container bg-white pt-5'>
            {blogs.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                const img = getImage(post.frontmatter.featuredImage)
                return(
                    <div className="container bg-white pt-5">
                        <div className="row blog-item px-3 pb-5">
                            <div className="col-md-5">
                                <GatsbyImage
                                    className="img-fluid mb-4 mb-md-0"
                                    image={img}
                                />
                            </div>
                            <div className="col-md-7">
                                <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">{title}</h3>
                                <div className="d-flex mb-3">
                                    <small className="mr-2 text-muted">{post.frontmatter.date}</small>
                                </div>
                                <p>
                                 {post.frontmatter.description}
                                </p>
                                <Link to = {post.fields.slug} className="btn btn-link btn-outline-dark mt-4" >Read More <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                )})}
        </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    blogs: allMarkdownRemark(
        filter: {frontmatter: {parent: {eq: "blog"}}}
        sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 300, 
                  height: 300,
                  quality: 100, 
                  )
              }
            }
          }
        }
      }

    projects: allMarkdownRemark(
      filter: {frontmatter: {parent: {eq: "projects"}}}
      sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 4.5
                )
            }
          }
        }
      }
    }
  }
`
