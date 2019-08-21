import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import BlogPost from 'components/BlogPost'
import GridTemplate from 'components/GridTemplate'
import Pagination from 'components/Pagination'

const content = ({ list }) => {
  return (
    <nav>
      {list.map(({ node }, i) => (
        <BlogPost
          key={i}
          slug={node.fields.slug}
          date={node.frontmatter.date}
          title={node.frontmatter.title}
          description={node.frontmatter.description}
          timeToRead={node.timeToRead}
        />
      ))}
    </nav>
  )
}

const BlogList = (props) => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  const list = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title='Blog' />
      <GridTemplate content={content({ list })} />
      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const BlogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList