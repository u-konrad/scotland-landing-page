import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { createRef } from "react"
import SlideArrows from "./SlideArrows"

const Landscapes = () => {
  const ref = createRef()
  const [firstImg, setFirstImg] = useState(1)

  return (
    <Wrapper className="grid" id="landscapes">
      <div className="left">
        <h2>Landscapes</h2>
        <p>
          Scotland comes from Scoti, the Latin name for the Gaels. Philip
          Freeman has speculated on the likelihood of a group of raiders
          adopting a name from an Indo-European root, *skot, citing the parallel
          in Greek skotos , meaning "darkness, gloom"
        </p>
      </div>
      <div className="bleed-right  ">
        <div ref={ref} className="images">
          <ImgWrapper num={1} firstImg={firstImg}>
            <StaticImage
              className="img"
              src="../assets/images/land-1.jpg"
              alt=""
              placeholder="tracedSVG"
              quality="85"
            />{" "}
            <p>Isle of Skye</p>
          </ImgWrapper>
          <ImgWrapper num={1} firstImg={firstImg}>
            <StaticImage
              className="img"
              src="../assets/images/land-2.jpg"
              alt=""
              placeholder="tracedSVG"
              quality="85"
            />
            <p>Glenfinnan</p>
          </ImgWrapper>
          <ImgWrapper num={3} firstImg={firstImg}>
            <StaticImage
              className="img"
              src="../assets/images/land-3.jpg"
              alt=""
              placeholder="tracedSVG"
              quality="85"
            />
            <p>Glencoe</p>
          </ImgWrapper>
          <ImgWrapper num={4} firstImg={firstImg}>
            <StaticImage
              className="img"
              src="../assets/images/land-4.jpg"
              alt=""
              placeholder="tracedSVG"
              quality="85"
            />
            <p>Cairngorms</p>
          </ImgWrapper>
        </div>
        <SlideArrows
          onClickLeft={() => {
            if (firstImg > 1) {
              ref.current.scrollLeft =
                (firstImg - 2) * ref.current.offsetWidth * 0.43
              setFirstImg(prev => --prev)
            }
          }}
          onClickRight={() => {
            if (firstImg < 3) {
              ref.current.scrollLeft = firstImg * ref.current.offsetWidth * 0.43
              setFirstImg(prev => ++prev)
            }
          }}
          disabledLeft={firstImg === 1}
          disabledRight={firstImg === 3}
        />
      </div>
    </Wrapper>
  )
}

const ImgWrapper = ({ children, num, firstImg }) => {
  const isShaded = firstImg + 2 === num

  return (
    <div className={`img-wrapper ${isShaded ? "shaded" : "clear"}`}>
      {children}
    </div>
  )
}

const Wrapper = styled.section`
  position: relative;
  top: calc(-1 * var(--section-gap) / 2);
  margin-bottom: calc(var(--section-gap) / 2) !important;

  @media screen and (max-width: 768px) {
    & {
      top: 0;
      margin-bottom: var(--section-gap) !important;
    }
  }
  .control-box {
    position: absolute;
    bottom: -3rem;
    left: 0;
  }

  .control-box button{
    font-size: 26px;

  }


  button:disabled {
    color: grey;
  }

  .bleed-right {
    position: relative;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  p {
    max-width: 45ch;
  }

  .shaded {
    opacity: 0.5;
    transition: all 0.5s ease-in-out;
  }

  .clear {
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }

  .images {
    display: grid;
    white-space: nowrap;
    overflow-x: hidden;
    scroll-behavior: smooth;
    grid-auto-flow: column;
    grid-template-columns: repeat(5, 40%);
    gap: 3%;
  }

  @media screen and (max-width: 768px) {
    .bleed-right {
      padding-left: var(--nav-padding);
      overflow-x: auto;
    }

    .shaded {
      opacity: 1;
    }

    .images {
      overflow-x: auto;
      margin-top: 2rem;
    }

    .control-box {
      display: none !important;
    }
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .post-grid::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .post-grid {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .img {
    width: 100%;
    margin-right: 2rem;
    aspect-ratio: 1/2;
    object-fit: cover;
  }

  .img-wrapper {
    position: relative;
  }

  .img-wrapper p {
    position: absolute;
    bottom: 10px;
    right: 20px;
    text-align: right;
    opacity: 1;
  }

  .btn-icon {
    font-size: 22px;
  }
`

export default Landscapes
