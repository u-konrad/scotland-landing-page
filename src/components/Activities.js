import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Activities = () => {
  return (
    <Wrapper>
      <div className="grid mb-5" id="activities">
        <div className="left">
          {" "}
          <h2>Activities</h2>
          <p>
            Welcome to Scotland, the ultimate natural playground. Here you can
            have a go at all the activities the country is legendary for, as
            well as some you might not have heard of.
          </p>
        </div>
      </div>
      <div className="grid">
        <div className="full-width">
          <div>
            <StaticImage
              className="img"
              alt=""
              src="../assets/images/hiking.jpg"
              placeholder="tracedSVG"
              quality="85"
            />
            <h3>Hiking</h3>
            <p>
              Welcome to Scotland, the ultimate natural playground. Here you can
              have a go at all the activities the country is legendary for.
            </p>
          </div>
          <div>
            <StaticImage
              className="img"
              alt=""
              src="../assets/images/tent.jpg"
              placeholder="tracedSVG"
              quality="85"
            />
            <h3>Camping</h3>
            <p>
              Welcome to Scotland, the ultimate natural playground. Here you can
              have a go at all the activities the country is legendary for.
            </p>
          </div>
          <div>
            <StaticImage
              className="img"
              alt=""
              src="../assets/images/kayak.jpg"
              placeholder="tracedSVG"
              quality="85"
            />
            <h3>Kayaking</h3>
            <p>
              Welcome to Scotland, the ultimate natural playground. Here you can
              have a go at all the activities the country is legendary for.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-bottom: var(--section-gap);
  z-index: -1;

  p{
    max-width: 50ch;

  }
  

  h3 ~ p {
    max-width: 50ch;
    line-height: 1.5;
    font-size: 16px;
  }

  .full-width {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  .img {
    aspect-ratio: 1/1;
    object-fit: cover;
    width: 100%;
  }

  h3 {
    font-size: 32px;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  
  @media screen and (max-width: 768px) {
    padding-bottom: 100px;


    h3 {
      margin-top: 1rem;

    }

    .full-width {
      grid-template-columns: 1fr;
      gap: 3rem;
    }



    .img {
      aspect-ratio: 3/2;
    }
  }

`

export default Activities
