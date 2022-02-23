import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import { BsFillBookmarkPlusFill } from "react-icons/bs"
import Sidebar from "./Sidebar"
import { useState } from "react"
import { HiMenu } from "react-icons/hi"
import links from '../assets/constants/links'
import { Link } from "gatsby"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Logo />
      <ul className="links" >
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={`${link.url}`}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
  
      <button className="btn-icon toggle-btn" onClick={toggleSidebar}>
        <HiMenu />
      </button>
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
  padding-block: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;

  .toggle-btn {
    display: none;
    line-height: 1;
    font-size: 28px;
    padding-bottom: 7px;
  }

 .links {
    display: flex;
    gap: 3rem;
    /* border-bottom: 0.5px solid rgba(255, 255, 255, 0.3); */
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-family: 'montserrat';
  }

  li {
    padding-block: 0.5rem;
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
    list-style: none;
  }

  li:hover {
    opacity: 1;
    box-shadow: inset 0 -3px 0 white;
  }

  .links li:last-of-type a{
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
  }


  @media screen and (max-width: 768px) {
    .links,
    .last {
      display: none;
    }

    .toggle-btn {
      display: block;
    }
  }
`

export default Nav
