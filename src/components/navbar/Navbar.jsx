import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ImBooks } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import './navbar.css';

// an array to store out navigation
const navigationLinks = [
  {
    name: 'Books',
    icon: ImBooks,
    link: "/",
  },
  {
    name: 'Members',
    icon: FiUsers,
    link: '/members',
  },
  {
    name: 'Reservations',
    icon: BsFillBookmarkCheckFill,
    link: '/reservations',
  },
]

const socialMedia = [
  {
    icon: BsGithub,
    link: 'https://github.com/leehaney254',
  },
  {
    icon: BsTwitter,
    link: 'https://twitter.com/Lee06785586',
  },
  {
    icon: BsLinkedin,
    link: 'https://www.linkedin.com/in/leehaney-george/',
  },
]

const Navbar = () => {
  return (
    <nav className="w-44 borderRight">
      <div className="flex justify-center items-center">
        <p>Hi admin!</p>
      </div>
      <ul className="flex flex-col gap-3">
        {
          navigationLinks.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.link} className="flex gap-2">
                  <item.icon className="text-2xl text-light-indigo" />
                  {item.name}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
      <div className="flex gap-3 justify-center">
        {
          socialMedia.map((item, index) => {
            return (
              <Link to={item.link} key={index}>
                <item.icon />
              </Link>
            )
          })
        }
      </div>
    </nav>
  )
}

export default Navbar