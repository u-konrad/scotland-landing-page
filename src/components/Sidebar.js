import React from "react"
import links from "../assets/constants/links"
import socialLinks from "../assets/constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
import styled from "styled-components"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Wrapper className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" aria-label='close sidebar' onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={`${link.url}`} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen ? "sidebar-icons " : null}>
          {socialLinks.map(link => {
            return (
              <li key={link.id}>
                <a href={link.url} aria-label={link.label}  target="_blank" rel="noreferrer" className="social-link">
                  {link.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  background: white;
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  color: black;

  &.show-sidebar {
    opacity: 1;
    transform: translateX(100%);
  }

  .sidebar-icons {
    margin: 0 auto;
    display: flex;
    gap:1rem;
    justify-content: center;
    font-size: 22px;

  }

  .sidebar-links li {
    opacity: 0;
  }
  .sidebar-links li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: black;
    /* letter-spacing: var(--spacing); */
    margin-bottom: 1.5rem;
    font-size: 2rem;
    transition: all 0.5s ease-in-out;
  }
  .sidebar-links li a:hover {
    /* background: var(--clr-primary-2); */
    color: black;
  }

  .sidebar-links li:last-of-type a {
    text-transform: uppercase;
    font-weight: bold;
  }




  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: black;
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    transform: translateX(-100%);
  }

  /*
=============== 
Sidebar Animation
===============
*/
  .sidebar-links li {
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
  }
  .sidebar-links li:nth-of-type(1) {
    animation-delay: 0.2s;
  }
  .sidebar-links li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-links li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-links li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-links li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  .sidebar-links li:nth-of-type(6) {
    animation-delay: 1.5s;
  }
  @keyframes slideRight {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .sidebar-icons li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
  }
  .sidebar-icons li a {
    color:black;
  }
  .sidebar-icons li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-icons li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-icons li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-icons li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-icons li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideUp {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export default Sidebar
