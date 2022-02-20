import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import SocialPanel from "./SocialPanel"
import Nav from "./Nav"

const Hero = () => {
  return (
    <Wrapper className="grid">
      <Nav />
      <div className="full-width title-box">
        <h1>
          Visit
          <br /> Scotland
        </h1>
        <p className="mb-3">
          Scotland comes from Scoti, the Latin name for the Gaels. Philip
          Freeman has speculated on the likelihood of a group of raiders
          adopting a name from an Indo-European root, *skot, citing the parallel
          in Greek skotos , meaning <span>darkness, gloom.</span>
        </p>
        <button className="btn btn-sharp">Book&nbsp;tour</button>
      </div>
      <StaticImage
        className="img full-bleed"
        src="../assets/images/hero.jpg"
        width={1920}
      ></StaticImage>

      <SocialPanel />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;

  h1 {
    font-size: 144px;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    line-height: 1;
    margin-bottom: 1rem;
  }

  .img {
    height: 120vh;
    object-fit: contain;
    grid-row: 1/1;
  }

  .img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      hsl(var(--clr-bg) / 1) 0%,
      hsl(var(--clr-bg) / 0.2) 50%
    );
    /* opacity: 0.2; */
  }

  .title-box {
    height: 100vh;
    position: relative;
    grid-row: 1/1;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    color: white;
    max-width: 50ch;
    opacity: 1;
    line-height: 1.6;
  }

  p span {
    padding-left: 0.5rem;
    font-weight: 500;
    font-size: 22px;
  }
`

export default Hero
