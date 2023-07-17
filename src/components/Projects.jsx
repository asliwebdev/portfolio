import React from 'react'
import styled from 'styled-components'
import { useFetchProjects } from './fetchProjects'

const Projects = () => {
  const {loading, projects} = useFetchProjects();
  if(loading) {
    return <Wrapper id='projects' className='section'>
            <div className="loading"></div>
    </Wrapper>
  }

  return (
    <Wrapper id='projects' className='section'>
       <h2 className='title'>projects()</h2>
       <div className='section-container'>
        <div className='projects-container'>
          {
            projects.map(project => {
              const {id, title, demoUrl, codeUrl, img, overview, technologies} = project;
              return <div key={id} className='project'>
                       <div className="img-container">
                         <img src={img} alt={title} />
                         <div className='hover-div'>
                          <a href={demoUrl} target='_blank' rel='noreferrer'>Demo</a>
                          <a href={codeUrl} target='_blank' rel='noreferrer'>Code</a>
                         </div>
                       </div>
                       <div className='project-info'>
                        <h4>{title}</h4>
                        <p className='overview'>{overview}</p>
                        <p>
                          {
                            technologies.map((item, index) => {
                              return <span key={index}>{item}{index < technologies.length - 1 ? ",":""}</span>
                            })
                          }
                        </p>
                     </div>
              </div>
            })
          }
        </div>
       </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .section-container {
    background: #1a1a1a;
  }
  .projects-container {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 3rem;
    row-gap: 2rem;
    padding: 3rem 0;
    color: var(--white);
  }
  .project {
    background: rgba(255, 255, 255, 0.10);
    border-radius: 14px;
    padding-bottom: 1rem;
    h4 {
        margin: 1rem 0;
    }
    p.overview {
      margin-bottom: 1.5rem;
    }
    p {
      line-height: 1.3;
      letter-spacing: 1px;
      span {
       margin-right: 0.5rem;
       display: inline-block;
    }
    } 
    .project-info {
      padding: 0 1.5rem;
      text-align: left;
    }
  }
  .img-container {
    position: relative;
  }
  img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-top-right-radius: 14px;
      border-top-left-radius: 14px;
      transition: var(--transition);
    }
  .hover-div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    a {
      border-left: 3px solid var(--white);
      border-right: 3px solid var(--white);
      color: var(--white);
      padding: 5px 25px;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
    transition: var(--transition);
    opacity: 0;
  }
  .img-container:hover img{
    opacity: 0.5;
  }
  .img-container:hover .hover-div{
    opacity: 1;
  }
  @media (max-width: 720px) {
    .projects-container {
      width: 80vw;
    }
  }
`

export default Projects