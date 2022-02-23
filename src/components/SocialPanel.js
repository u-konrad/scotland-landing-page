import React from "react"
import styled from "styled-components"
import socialLinks from "../assets/constants/social_links"

const SocialPanel = () => {
  return (
    <Wrapper>
      <div className="links">
        {socialLinks.map(link => {
          return <a key={link.id} className="btn btn-icon" href={link.url} target="_blank" rel="noreferrer">{link.icon}</a>
        })}
      </div>
      <div className="line"></div>
      {/* <Arrow className="arrow"/> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* height: 100vh; */
  position: absolute;
  top: 82vh;
  left: calc(var(--nav-padding));
  transform: translate(-50%);
  opacity: 0.6;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .arrow {
    position: absolute;
    left: 50%;
    bottom: -0.25rem;
    transform: translate(-50%, 100%);
    cursor: pointer;
  }

  .line {
    width: 0.5px;
    height: 100px;
    background-color: white;
    position: absolute;
    left: 50%;
    bottom: -0.25rem;
    transform: translate(-50%, 100%);
  }


  .btn-icon {
    padding: 0;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export default SocialPanel
