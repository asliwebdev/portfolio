import React from 'react'
import styled from 'styled-components'
import separator from '../assets/separator.png'
import design from '../assets/design.png'
import development from '../assets/development.png'
import maintenance from '../assets/maintenance.png'

const About = () => {
  return (
    <Wrapper id='about' className='section'>
      <h2 className='title'>aboutMe()</h2>
      <div className='about-text'>
      <p>"Hello! I'm Asliddin Bozorov, a sophomore Computer Science student at Inha University in Tashkent. As a self-taught frontend developer, my passion lies in creating engaging web experiences.
With a strong desire for continuous learning, I've pursued web development through platforms like Udemy, YouTube, and comprehensive documentation. Through self-guided exploration, I've gained solid knowledge and experiences in frontend technologies and modern UI frameworks.
My dedication to staying up-to-date with industry trends drives me to continuously expand my knowledge and experiment with new technologies. <br /><br /> I am motivated by solving problems and pushing the boundaries of what's possible in web development.
As a student at Inha University in Tashkent, I am not only growing my theoretical knowledge but also complementing it with practical applications. This combination allows me to approach projects with creativity and a solid technical foundation.
I am eager to collaborate with like-minded professionals and contribute to impactful projects. Let's connect and discuss how we can work together to create innovative and meaningful web solutions."</p>
      </div>
      <img src={separator} alt="separator block" className='separator'/>
      <div className='services-container'>
        <div className='grid-container'>
            <div className='item-container'>
              <img src={design} alt="design logo" />
              <div>
                <h4>Design</h4>
                <p>I have the skills and creativity to design your website based on your needs and preferences, ensuring an attractive and user-friendly interface that aligns with your brand identity.</p>
              </div>
            </div>
            <div className='item-container'>
              <img src={development} alt="development logo" />
              <div>
                <h4>Development</h4>
                <p>From building websites from scratch to implementing complex functionalities, I have the expertise to handle the development process, ensuring a smooth and efficient user experience.</p>
              </div>
            </div>
        </div>
        <div className='item-container'>
              <img src={maintenance} alt="maintenance logo" />
              <div>
                <h4>Maintenance</h4>
                <p> I provide ongoing support and maintenance services to ensure your website remains secure, optimized, and up-to-date, freeing you to focus on your core business.</p>
              </div>
        </div>
      </div>
      <img src={separator} alt="separator block" className='separator'/>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .about-text {
    width: 70vw;
    margin: 0 auto;
    max-width: 930px;
    text-align: left;
    p {
      font-weight: 300;
    }
  }
  .separator {
    margin: 5rem 0;
  }
  .services-container {
    width: 75vw;
    margin: 0 auto;
    max-width: 1170px;
    padding-bottom: 2rem;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
    align-items: center;
    margin-bottom: 4rem;
  }
  .item-container {
    display: inline-block;
    text-align: left;
    position: relative;
    padding-left: 3rem;
    h4 {
      margin-bottom: 1rem;
    }
    img {
      top: -30%;
      left: 0;
      position: absolute;
    }
    p {
      max-width: 30em;
    }
  }
  @media (max-width: 720px) {
    .grid-container {
      grid-template-columns: 1fr;
      row-gap: 4rem;
    }
  }
`

export default About