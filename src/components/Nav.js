import React from "react"
import styled from "styled-components"
import Links from "./Links"
import Logo from "./Logo"
import {BsFillBookmarkPlusFill} from 'react-icons/bs'

const Nav = () => {
  return (
    <Wrapper>
      <Logo />
      <Links />
          <a className=" last" href="#">Book <BsFillBookmarkPlusFill/></a>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  padding-inline: var(--nav-padding);
  padding-block: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;

  ul {
    display: flex;
    gap: 3rem;
    /* border-bottom: 0.5px solid rgba(255, 255, 255, 0.3); */
  }


  li {
    padding-block: 0.5rem;
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
list-style:none  }

  li:hover {
    opacity: 1;
    box-shadow: inset 0 -3px 0 white;
  }

  .last {
    font-weight: 700;
    font-size: 18px;
    opacity: 0.8;


  }

  .last:hover {
opacity:1;
  }

  @media screen and (max-width: 768px) {
    ul, .last {
      display: none;
    }
  }
`

export default Nav
