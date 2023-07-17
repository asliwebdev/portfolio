import React from 'react'
import styled from 'styled-components'
import { mainSkills, otherSkills } from '../data'

const Skills = () => {
  return (
    <Wrapper id='skills' className='section'>
      <h2 className='title'>skills()</h2>
      <div className='skills-container'>
          <div>
             <h3>
              Using Now: 
             </h3>
             <div className='grid-container'>
                {
                  mainSkills.map(skill => {
                    const {id, text, icon} = skill;
                    return <div key={id} className='skill'>
                      <img src={icon} alt={text} className='icon'/>
                      <p>{text}</p>
                    </div>
                  })
                }
             </div>
          </div>
          <div>
              <h3>
                Other skills:
              </h3>
              <div className="grid-container">
                {
                  otherSkills.map(skill => {
                    const {id, text, icon} = skill;
                    return <div key={id}>
                      <img src={icon} alt={text} className='icon'/>
                      <p>{text}</p>
                    </div> 
                  })
                }
              </div>
          </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .skills-container {
    width: 90vw;
    margin: 0 auto;
    max-width: 1070px;
    text-transform: uppercase;
    padding: 0 3rem;
  }
  h3 {
    text-align: left;
    margin-bottom: 3rem;
    letter-spacing: 5.5px;
    padding-left: 3.5rem;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 2rem;
    margin-bottom: 3rem;
    padding: 0;
  }
  .icon {
    margin-bottom: 0.75rem;
  }
  p {
    letter-spacing: 3px;
  }
  @media (max-width: 720px) {
    h3 {
      text-align: center;
      padding: 0;
    }
  }
`

export default Skills