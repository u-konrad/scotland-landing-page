import React from "react"
import styled from "styled-components"
import Links from "./Links"
import Logo from "./Logo"
import socialLinks from "../assets/constants/social_links"

const Footer = () => {
  return (
    
    <Wrapper>
      <div>
      <Logo />
      <Links />
      <div className="social-container">
        {socialLinks.map(link => (
          <button className="btn btn-icon">{link.icon}</button>
        ))}
      </div>
      </div>
      <p className="text-end text-muted">&copy;2022 AlbaTours</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-inline: var(--nav-padding);
  background-color: black;
 

&>div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 0.25rem;

}

&>p{
  padding-bottom: 0.5rem;
font-size: 14px;
font-weight: bold;
}

  .logo{
      font-size: 22px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 0;
  }

  a{
      opacity: 0.7;
  }
  a:hover{
opacity: 1;
  }

.social-container{
    display: flex;
    align-items: center;

    gap: 0.5rem;
}

`

export default Footer
