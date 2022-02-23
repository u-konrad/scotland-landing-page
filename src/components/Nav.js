import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
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
    <nav className="topnav">
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
    </nav>
  )
}

const Wrapper = styled.nav`
  position: absolute;
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
    font-size: 32px!important;
    padding-bottom: 13px;
  }

 .links {
    display: flex;
    gap: 3rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-family: 'Montserrat';
    font-weight: 400;
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

  }

  @media screen and (max-width: 992px) {
    .links {
      font-size: 14px;
      gap:2vw;

    }
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
