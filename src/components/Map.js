import { StaticImage } from "gatsby-plugin-image"
import React, { Fragment } from "react"
import styled from "styled-components"
import { useState } from "react"
import { HiLocationMarker } from "react-icons/hi"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import SlideArrows from "./SlideArrows"

const Map = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(0)

  const places = data.allStrapiPlace.nodes[0].data.map(place => {
    const { title, desc, x, y, img } = place.attributes

    const imgData =
      img.data?.attributes.localFile.childImageSharp.gatsbyImageData

    return { title, desc, x, y, img: imgData }
  })

  return (
    <Wrapper>
      <div className="grid">
        <div className="full-width text-center">
          <h2 className="mb-2">Attractions</h2>
          <p>Most magical places in Scotland.</p>
        </div>
      </div>
      <div className="grid">
        <div className="left">
          <ul className="mb-3 tablinks">
            {places.map((tab, index) => {
              return (
                <Tablink
                  onClick={() => setCurrentTab(index)}
                  tab={tab}
                  index={index}
                  isActive={currentTab === index}
                />
              )
            })}
          </ul>
          <div className="tab-container">
            {places.map((tab, index) => (
              <Tab tab={tab} index={index} isActive={currentTab === index} />
            ))}
            <div className=" arrows">
              <SlideArrows
                onClickLeft={() => {
                  console.log(currentTab)
                  setCurrentTab(prev => --prev)
                }}
                onClickRight={() => {
                  console.log(currentTab)
                  setCurrentTab(prev => ++prev)
                }}
                disabledLeft={currentTab === 0}
                disabledRight={currentTab === 4}
              />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="map-frame">
            <StaticImage
              className="map"
              src="../assets/images/map-light.png"
              alt=""
            />
            {places.map((tab, index) => {
              return (
                <Marker
                  key={index}
                  tab={tab}
                  isActive={currentTab === index}
                  onClick={() => setCurrentTab(index)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Tablink = ({ index, tab, isActive, onClick }) => {
  return (
    <li className={`tablink ${isActive && "active"}`} key={index}>
      <button className="btn-icon" onClick={onClick}>
        {tab.title}
      </button>
    </li>
  )
}

const Tab = ({ tab, index, isActive }) => {
  return (
    <Fragment>
      <div className={`tab ${isActive && "show"}`} key={index}>
        <GatsbyImage className="img mb-5" image={getImage(tab.img)} alt="" />

        <h3 className="mb-3">{tab.title}</h3>
        <p>{tab.desc}</p>
      </div>
    </Fragment>
  )
}

const Marker = ({ tab, isActive, onClick }) => {
  return (
    <div
      className={`marker ${isActive && "active"}`}
      style={{ top: tab.y + "%", left: tab.x - 14 + "%" }}
      onClick={onClick}
    >
      <button className="btn-icon">
        <HiLocationMarker className="icon" />
      </button>
      <span className="title">{tab.title}</span>
    </div>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;

  .arrows {
    position: relative;
    top: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 20%;
    justify-content: space-between;
    display: none;
  }

  .control-box {
    display: flex;
    justify-content: space-between;
  }

  .control-box button {
    background-color: white;
    color: black;
    width: 30px;
    height: 30px;
  }

  .control-box button:disabled {
    background-color: grey;

  }

  & > div:first-child {
    padding-bottom: 50px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    /* gap: 2rem; */
    border-bottom: 0.5px solid grey;
  }

  .tablink button {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0.05rem;
    padding-block: 1rem;
    opacity: 0.7;
    transition: all 0.2s linear;
  }

  @media screen and (max-width: 1200px) {
    min-height: 0;
    .tablink button {
      font-size: 12px;
    }
  }

  .tablink.active button {
    /* border-bottom: 2px solid white; */
    opacity: 1;
    box-shadow: inset 0 -3px 0 white;
  }

  button {
    padding: 0;
  }

  

  .map-frame {
    width: 495px !important;
    aspect-ratio: 495/712;
    position: absolute;
  }

  @media screen and (max-width: 992px) {
    .arrows {
      display: flex;
    }

    .tablinks {
      display: none;
    }

    .map-frame {
      top: -20%;
      left: 40%;
      transform: scale(0.8) translateX(-50%);
    }

    .right {
      height: 500px;
    }

    .left {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
 

    .map-frame {
      top: -30%;
      left: 40%;
      transform: scale(0.7) translateX(-60%);
    }
  }
  .map {
    object-fit: contain;
  }

  .marker {
    position: absolute;
    z-index: 10;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    cursor: pointer;
  }

  .marker button {
    color: #8d0000;
    font-size: 40px;
    transition: all 0.3s ease-in-out;
  }

  .marker .title {
    background-color: hsl(var(--clr-accent));
    color: white;
    padding: 0.25rem;
    border-radius: 5%;
    font-size: 14px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    margin-left: 0.25rem;
  }

  .marker:hover {
    color: #a70000;
  }

  .marker.active button {
    color: hsl(var(--clr-accent-2));
    transform-origin: 50% 100%;
    transform: scale(1.3);
  }

  .marker.active .title {
    background-color: hsl(var(--clr-accent-2));
    font-size: 14px;
    opacity: 1;
  }

  .right {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }

  h3 {
    font-weight: bold;
    font-size: 40px;
  }

  .tab-container {
    position: relative;
    min-height: 550px;
  }

  .tab {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .tab.show {
    opacity: 1;
  }

  .tab .img {
    width: 100%;
    aspect-ratio: 3/1.7;
    object-fit: cover;
  }
`

export default Map
