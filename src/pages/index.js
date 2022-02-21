import  React from "react"
import Hero from "../components/Hero"
import Landscapes from "../components/Landscapes"
import Nature from "../components/Nature"
import Map from "../components/Map"
import { graphql } from "gatsby"
import Activities from "../components/Activities"
import End from "../components/End"
import Footer from "../components/Footer"

const IndexPage = ({ data }) => {

  console.log(data)

  return (
    <React.Fragment>
      {/* <Hero />
      <Landscapes />
      <Nature />
      <Map data={data}  /> */}
      <Activities/>
      <End/>
      <Footer/>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    allStrapiPlace {
      nodes {
        data {
          attributes {
            desc
            title
            x
            y
            img {
              data {
                attributes {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
