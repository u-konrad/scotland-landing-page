import React from "react"
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram
} from "react-icons/fa"

const data = [
  {
    id: 0,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/",
    name:'Facebook',
    aria:'Facebook link'
  },
  {
    id: 1,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://twitter.com/",
    name:'Twitter',
    aria:'Twitter link'


  },
  {
    id: 3,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/",
    name:'Instagram',
    aria:'Instagram link'


  },
]

export default data
