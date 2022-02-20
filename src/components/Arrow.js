import React from "react"
import styled from "styled-components"

const Arrow = ({ className }) => {
  return (
    <Wrapper className={className} href="#landscapes">
      <div></div>
      <div className="head"></div>
      <div className="head"></div>
    </Wrapper>
  )
}

const Wrapper = styled.a`
  
  width: min-content;
  /* transform: rotate(90deg); */
  opacity: 0.6;
  --color: white;
padding-inline: 1rem;

  &:hover {
    opacity: 1;
  }

  div {
    width: 0.5px;
    height: 60px;
    background-color: var(--color);
  }

  .head:nth-child(2) {
    position: absolute;
    right: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 0.5px;
    height: 10px;
    background-color: var(--color);
    transform-origin: bottom right;
    transform: rotate(30deg);
  }

  .head:nth-child(3) {
    position: absolute;
    right: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 0.5px;
    height: 10px;
    background-color: var(--color);
    transform-origin: bottom right;
    transform: rotate(-30deg);
  }
`

export default Arrow
