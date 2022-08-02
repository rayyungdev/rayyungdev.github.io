import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import {getImage, GatsbyImage} from "gatsby-plugin-image"
import Seo from "../components/seo"

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
                                <div className='mt-4 text-white font-italic'> Recently Finished Project: </div>
                                <div className = "row mt-0"> 
                                    <h2 className='mr-3 mt-0 text-white font-weight-bold'> {title} </h2>
                                    <small> <Link to = {post.fields.slug} className = 'btn btn-sm btn-outline-light'> Read More </Link> </small>
                                </div>
                                <div className='d-flex text-white'>
                                    <small className='mt-0' > {post.frontmatter.date} </small>
                                </div>
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
                        <hr/>
                    </div>
                )})}
        </ol>
    </Layout>
  )
}

export default BlogIndex
export const Head = () => <Seo title="All posts" />

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
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1) {
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
