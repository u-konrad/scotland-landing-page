import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Activities = () => {
  return (
    <Wrapper>
      <div className="grid mb-5">
        <div className="left">
          {" "}
          <h2>Activities</h2>
          <p>Most magical places in Scotland.</p>
        </div>
      </div>
      <div className="grid">
        <div className="full-width">
          <div >
            <StaticImage
              className="img"
              alt=""
              src="../assets/images/hiking.jpg"
            />
            <h3>Hiking</h3>
            <p>Most magical places in Scotland.</p>

          </div>
          <div >
            <StaticImage
              className="img"
              alt=""
              src="../assets/images/tent.jpg"
            />
            <h3>Camping</h3>
            <p>Most magical places in Scotland.</p>

          </div>
          <div >
            <StaticImage
              className="img"
              alt=""
              src="../assets/images/kayak.jpg"
            />
            <h3>Kayaking</h3>
            <p>Most magical places in Scotland.</p>

          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 300px;

  p {
    max-width: 50ch;
  }

  .full-width {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

  

  }

  .img {
    aspect-ratio: 1/1;
    object-fit: cover;


  }

  .full-width>div{
  }



  h3{
      font-size: 36px;
      margin-top: 1rem;
  }
`

export default Activities
