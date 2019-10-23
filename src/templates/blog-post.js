import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import {
  TitleTypography,
  DateTypography,
  ContentTypography,
  NavButton,
  DefaultLink,
} from "../components/styledTemplate"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <TitleTypography>{post.frontmatter.title}</TitleTypography>
            <DateTypography>{post.frontmatter.date}</DateTypography>
          </header>
          <section>
            <ContentTypography>
              <p dangerouslySetInnerHTML={{ __html: post.html }} />
            </ContentTypography>
          </section>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>{/* <Bio /> */}</footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <DefaultLink to={previous.fields.slug} rel="prev">
                  <NavButton>← {previous.frontmatter.title}</NavButton>
                </DefaultLink>
              )}
            </li>
            <li>
              {next && (
                <DefaultLink to={next.fields.slug} rel="next">
                  <NavButton>{next.frontmatter.title} →</NavButton>
                </DefaultLink>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
