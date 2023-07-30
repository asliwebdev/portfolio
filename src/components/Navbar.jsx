import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import cv from '../assets/CV.pdf'
import logo from '../assets/logo.jpg'
import { FaTimes, FaBars } from 'react-icons/fa'
import { navLinks } from '../data'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <div className="nav-header">
          <img src={logo} alt="logo img" className='logo'/>
          <button type="button" className='nav-toggle' onClick={toggleLinks}>{showLinks ? <FaTimes /> : <FaBars />}</button>
        </div>
        <div className='right-nav' ref={linksContainerRef} style={linkStyles}>
        <div className='links-container' ref={linksRef}>
           <ul className="nav-links">
              {navLinks.map(link => {
                  const {url, text} = link;
                 return <li key={url}><a href={url} onClick={() => setShowLinks(false)}>{text}</a></li>
              })}
           </ul>
           <a href={cv} download className='cv-btn' onClick={() => setShowLinks(false)}>Download CV</a>
        </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--black);
  z-index: 100;
  .nav-center {
    width: 100%;
  }
  .nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
.logo {
    width: 90px;
    border-radius: 8px;
}
.nav-toggle {
  background: transparent;
  border: transparent;
  color: var(--white);
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
}
.right-nav {
  overflow: hidden;
  transition: var(--transition);
  position: relative;
  z-index: 100;
}
.nav-links a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    padding: 1rem 0;
    color: var(--white);
    transition: var(--transition);
    background: rgba(0, 0, 0, 0.40);
    font-family: var(--headingFont);
    color: var(--white);
    font-weight: 600;
    &:hover {
        color: var(--btn-bg-color)
    }
}
.cv-btn {
    display: block;
    text-transform: uppercase;
    text-align: center;
    background: var(--white);
    color: var(--black);
    padding: 1rem 0;
    font-size: 15px;
    font-weight: 600;
    font-family: var(--headingFont);
    cursor: pointer;
    &:hover {
       background: var(--btn-bg-color);
    }
  }
@media (min-width: 992px) {
   height: 6rem;
   background: transparent;
  .nav-toggle {
    display: none;
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .nav-header {
    padding: 0;
  }
  .right-nav {
    height: auto !important;
  }
  .links-container {
    display: flex;
    gap: 5rem;
  }
  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin: 0 0.75rem;
    }
    a {
      display: inline;
      font-size: 17px;
      font-weight: 700;
      background: transparent;
    }
  }
  .cv-btn {
    text-transform: capitalize;
    padding: 10px 20px;
    border-radius: 15px;
    font-size: 15px;
    font-weight: 700;
  }
}
`

export default Navbar
