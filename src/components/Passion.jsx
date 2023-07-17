import React from 'react'
import styled from 'styled-components'
import rectangle from '../assets/rectangle.png'
import it from '../assets/it.png'
import ellipse_1 from '../assets/ellipse_1.png'
import ellipse_2 from '../assets/ellipse_2.png'
import small_view_rectangle from '../assets/small_view_rectangle.png'
import small_view_it from '../assets/small_view_it.png'
import small_view_ellipse_1 from '../assets/small_view_ellipse_1.png'
import small_view_ellipse_2 from '../assets/small_view_ellipse_2.png'

const Passion = () => {
  return (
    <Wrapper>
    <div className='container'>
      <div className='left-part'>
        <h3>
           My Enthusiasm 
        </h3>
        <p>
          As a passionate Front-End Developer, I specialize in creating captivating and user-friendly web experiences. I have a strong eye for design and a knack for crafting visually appealing interfaces. With a focus on responsive design and performance optimization, I strive to deliver exceptional web solutions. I thrive in collaborative environments and am excited to explore new opportunities to create remarkable web experiences together. Let's connect and discuss how we can collaborate!
        </p>
      </div>
      <div className="small-view-images">
        <div className='overflow'>
          <img src={small_view_ellipse_1} alt="small view ellipse 1" className='small-view-ellipse-1'/>
          <img src={small_view_ellipse_2} alt="small view ellipse 2" className='small-view-ellipse-2'/>
        </div>
        <div className='rectangle-it'>
          <img src={small_view_rectangle} alt="small view rectangle" className='small-view-rectangle'/>
          <img src={small_view_it} alt="small view it" className='small-view-it'/>
        </div>
      </div>
      <div className='right-part'>
        <img src={rectangle} alt="rectangle" className='rectangle' />
        <img src={it} alt="it" className='it'/>
        <img src={ellipse_1} alt="ellipse 1" className='ellipse_1'/>
        <img src={ellipse_2} alt="ellipse 2" className='ellipse_2'/>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
 height: 500px;
 background: linear-gradient(95deg, #1D1D1D 0%, #1D1D1D 100%, #1D1D1D 100%);
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 padding: 0 2rem;
 .container {
  width: 90vw;
  height: 100%;
  margin: 0 auto;
  position: relative;
 }
 .left-part {
    padding: 2rem 0;
 }
 .right-part {
  display: none;
 }
 .small-view-images {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-10%);
 }
 h3 {
    text-align: center;
    color: var(--white);
    letter-spacing: 2px;
    margin-bottom: 2rem;
    font-size: 25px;
    position: relative;
    z-index: 10;
 }
 p {
    color: var(--white);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: 1px;
    max-width: 40em;
    position: relative;
    z-index: 10;
 }
 .rectangle-it {
  position: relative;
 }
 .small-view-it {
  position: absolute;
  top: 20%;
  left: 25%;
 }
 .overflow {
  width: 200px;
  height: 100px;
  position: relative;
  overflow: hidden;
 }
 .small-view-ellipse-1{
  position: absolute;
  top: 0;
  left: 37%;
 }
 .small-view-ellipse-2 {
  position: absolute;
  top: 30%;
  left: 10%;
 }
 
 @media (min-width: 992px) {
  height: 350px;
  text-align: left;
  padding: 0;
  .container {
    width: 85vw;
    display: flex;
    justify-content: space-between;
  }
  .small-view-images {
    display: none;
  }
  .right-part {
    display: block;
    position: relative;
  }
  h3 {
    text-align: left;
    font-size: clamp(1.25rem, 2.5vw, 2.5rem); 
  }
  p {
    max-width: 50em;
  }
  .it {
    position: absolute;
    top: 25%;
    right: 15%;
  }
  .ellipse_1 {
    position: absolute;
    top: -1%;
    right: -5%;
  }
  .ellipse_2 {
    top: 0%;
    right: 25%;
    position: absolute;
  }
  overflow: hidden;
 }
 @media (min-width: 720px) {
   p {
    max-width: 50em;
   }
 }
`

export default Passion