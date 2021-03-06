import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Nature = () => {
  return (
    <Wrapper className="grid" id="wildlife">
      <div className="left mb-3">
        <StaticImage alt="" className="img"  src="../assets/images/deer.png" />
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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`


  @media screen and (max-width:768px ) {
    .img{
width:80%;
}

.left{
  display: flex;
  justify-content: center;
}
  }


  p {
    max-width: 45ch;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  iframe {
    width: 100%;
    aspect-ratio: 560/315;
  }

  .video {
    margin-top: 3rem;
  }
`

export default Nature
