import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/homepage/hero/hero'
import MissionStatement from '../components/homepage/mission-statement/mission-statement'
import Layout from '../components/layout'
import Statistics from '../components/homepage/statistics/statistics'
import Testimonial from '../components/homepage/testimonial.js'
import 'bootstrap/dist/css/bootstrap.css';
import HomepageEvent from '../components/homepage/homepage-event'

class HomePage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const homePage = get(this, 'props.data.contentfulHomePage')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero headline={homePage.headline} tagline={homePage.tagline} heroImage={homePage.heroImage} />
          <MissionStatement header={homePage.missionStatementHeader} subheader={homePage.missionStatementSubheader} missionStatement={homePage.missionStatement.value.value} />
          <Statistics statsHeader={homePage.statisticsHeader} stats={homePage.stats} statsButtonLabel={homePage.statisticsButtonLabel} />
          <HomepageEvent event={homePage.event} eventHeader={homePage.eventHeader} />
          <Testimonial carousel={homePage.testimonials} carouselHeader={homePage.testimonialsHeader} />
        </div>
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    contentfulHomePage {
      headline
      tagline
      heroImage {
        fluid (quality: 100){
          ...GatsbyContentfulFluid
        }
      }
      contentful_id
      missionStatementHeader
      missionStatementSubheader
      missionStatement {
        value {
          value
        }
      }
      statisticsHeader
      statisticsButtonLabel
      stats {
        id
        number
        description
      }
      eventHeader
      event {
        title
        date
        endTime
        startTime
        description {
          description
        }
        registrationLink
        location
        photo {
          fluid (quality: 100){
            ...GatsbyContentfulFluid
          }
        }
      }
      testimonialsHeader
      testimonials {
        company
        companyWebsite
        name
        profilePicture {
          fluid (quality: 100){
            ...GatsbyContentfulFluid
          }
        }
        testimonial {
          testimonial
        }
      }
    }
  }
`
