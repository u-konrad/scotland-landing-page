import { navigate } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import socialLinks from '../assets/constants/social_links'
import Arrow from './Arrow'

const SocialPanel = () => {
  return (
    <Wrapper>
      <div className='links'>
        {socialLinks.map(link=>{return <button className='btn btn-icon'>{link.icon}</button>})}
        </div>
        <Arrow className="arrow"/>
    </Wrapper>
  )
}

const Wrapper =styled.div`
height: 100vh;
position: absolute;
top:0;
left:calc(var(--nav-padding));
transform: translate(-50%);
opacity:0.8;
font-size:20px;
display: flex;
flex-direction: column;
justify-content: center;

.arrow{
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translate(-50%);
  cursor: pointer;
}


.links{
  gap:0.25rem;
  display: flex;
flex-direction: column;
}

@media screen and (max-width:768px) {

  display: none;
  
}

`

export default SocialPanel