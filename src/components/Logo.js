import React from "react"
import styled from "styled-components"
import { GiCampingTent } from "react-icons/gi"

const Logo = () => {
  return (
    <Wrapper className="logo">
      <GiCampingTent />
      <span className="ms-1"> Alba</span>
      <span>Tours</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  font-weight: 100;

  svg {
    color: hsl(var(--clr-accent-2));
    font-size: 32px;
  }

  span:first-of-type {
    font-weight: 700;
  }
`

export default Logo
