import React from 'react'
import styled from 'styled-components'
import hero_img from '../assets/hero_img.png'
import small_hero from '../assets/small_hero.png'
import Navbar from './Navbar'
import { socialLinks } from '../data'


const Home = () => {
 
  return <Wrapper>
     <Navbar />
     <div className="hero">
        <div className="hero-container">
            <div className="text-container">
              <div className='texts'>
                <h4>Hello, I am</h4>
                <h1>&lt;     Asliddin <br />Bozorov /&gt;</h1>
                <h5> a passionate junior frontend developer.</h5>
              </div>
              <div className="social-links">
                 {
                   socialLinks.map(link => {
                    const {url, img, text} = link;
                    return <a href={url} key={url}>{img}</a>
                   })
                 }
              </div>
            </div>
            <div className="image-container">
                <img src={hero_img} alt="hero img" className='hero-img'/>
                <img src={small_hero} alt="small hero img" className='small-hero-img'/>
                <p>This is not my photo, but I dearly hope to get one just like this</p>
            </div>
        </div>
        <div className="lightgray"></div>
     </div>
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 100vh;
  position: relative;
  background: black;
.lightgray {
  width: 100%;
  height: 500px;
  clip-path: polygon(0 66%, 100% 40%, 100% 100%, 0% 100%);
  background-color: lightgray;
  position: absolute;
  bottom: 0;
}
.hero {
  background: var(--black);
  height: calc(100vh - 6rem);
  color: var(--white);
  position: absolute;
  top: 6rem;
  width: 100%;
}
.hero-container {
  width: 100%;
  height: 100%;
}
.image-container {
  height: calc(100vh - 6rem);
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  p {
    display: none;
  }
}
 img.small-hero-img {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0,
    height: 631px;
  }
.text-container {
  clip-path: polygon(0 66%, 100% 40%, 100% 100%, 0% 100%);
  background-color: rgba(0, 0, 0, 0.56);
  width: 100%;
  height: 500px;
  position: absolute;
  bottom: 0;
  z-index: 5;
  .texts {
    position: absolute;
    bottom: 0;
    left: 10%;
    transform: translateY(-20%);
    h1 {
      margin: 0.75rem 0;
    }
  }
}
.social-links {
      position: absolute;
      bottom: 5%;
      right: 5%;
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 3rem;
       a {
        width: 26.059px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        fill: #fff;
        width: 26.059px;
        height: 25px;
      }
    }
.hero-img {
  display: none;
}

@media (min-width: 992px) {
  min-height: 100vh;
  .lightgray {
    display: none;
  }
  background: linear-gradient(100deg, var(--bg-color), var(--bg-color) 45%, var(--black) 45%, var(--black) 100%);
  .hero {
    height: calc(100vh - 6rem);
    background: transparent;
    color: var(--black);
  }
  .hero-container {
    width: 90vw;
    height: 100%;
    margin: 0 auto;
    max-width: 1170px; 
    display: flex;
    justify-content: space-between;
    background: transparent;
    clip-path: none;
    position: relative;
  }
  .text-container {
    padding: 7rem 0;
    background: transparent;
    clip-path: none;
    position: relative;
    .texts {
      position: relative;
      transform: none;
      left: 0;
    }
  }
  .image-container {
    display: block;
    position: relative;
   p {
    display: block;
    position: absolute;
    top: 85%;
    left: 35%;
    max-width: 10em;
    z-index: 100;
   }
  }
  .small-hero-img {
    display: none;
  }
  .hero-img {
    display: block;
    width: 600px;
    height: 630px;
  }
  .social-links {
        position: relative;
        display: flex;
        flex-direction: row;
        left: 0;
        gap: 1.5rem;
       a {
        width: 61px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--btn-bg-color);
        box-shadow: var(--btn-shadow);
      }
      svg {
        fill: #000;
        width: 37.001px;
        height: 35.497px;
      }  
  }
  h4 {
    margin-bottom: 3.5rem;
 }
 h1 {
    font-family: var(--secondFont);
    letter-spacing: 3px;
    font-weight: 700;
    margin-bottom: 0.5rem;
 }
 h5 {
   color: #909090;
   font-family: var(--secondFont);
   font-weight: 800;
   margin-bottom: 4rem;
 }
}
`

export default Home
