import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Nature = () => {
  return (
    <Wrapper className="grid">
      <div className="left">
        <StaticImage alt="" src="../assets/images/deer.png" />
      </div>
      <div className="right">
        <h2>Wildlife</h2>
        <p>
          Scotland comes from Scoti, the Latin name for the Gaels. Philip
          Freeman has speculated on the likelihood of a group of raiders
          adopting a name from an Indo-European root, *skot, citing the parallel
          in Greek skotos , meaning "darkness, gloom"
        </p>
        <div className="video">
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/b2rc9U3ZyQM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-block: 100px;

  p {
    max-width: 50ch;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  iframe{
      width: 100%;
aspect-ratio:560/315 }

  .video{
    margin-top: 3rem;
  }
`

export default Nature
