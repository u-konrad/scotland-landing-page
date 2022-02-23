import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import socialLinks from "../assets/constants/social_links"
import links from '../assets/constants/links'
import { Link } from "gatsby"


const Footer = () => {
  return (
    <Wrapper>
      <div>
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
        <div className="social-container">
          {socialLinks.map(link => (
            <a href={link.url} target="_blank" className="btn btn-icon">{link.icon}</a>
          ))}
        </div>
      </div>
      <hr></hr>
      <p>&copy;2022 AlbaTours</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-inline: var(--nav-padding);
  background-color: black;

  hr {
    color: grey;
    margin: 0;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 2rem;
  }

  & > p {
    padding-block: 0.25rem;
    font-size: 14px;
    text-align: end;
    color: grey;
  }

  .logo {
    font-size: 22px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 0;
  }

  a {
    opacity: 0.7;
  }
  a:hover {
    opacity: 1;
  }

  .social-container {
    display: flex;
    align-items: center;

    gap: 0.5rem;
  }

  @media screen and (max-width: 992px) {
    ul {
      font-size: 14px;
      gap: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    & > div {
      flex-direction: column;
    }

    ul {
      flex-direction: column;
      margin-block: 2rem;
      font-size: 18px;
    }
  }
`

export default Footer
