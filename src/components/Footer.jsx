import React from 'react'
import styled from 'styled-components'
import { FaAngleDoubleUp} from 'react-icons/fa'
import { footerSocialLinks } from '../data'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <Wrapper>
        <a href="#">
            <FaAngleDoubleUp className='double'/>
            <h5>Back To Top</h5>
        </a>
        <div className='social-links'>
           {footerSocialLinks.map(link => {
            const {id, url, icon} = link;
            return <a href={url} key={id} target='_blank' rel='noreferrer'>{icon}</a>
           })}
        </div>
        <div>
          <p>
            <span>&copy; {year} Asliddin Bozorov</span>
            All Rights Reserved.
          </p>
        </div>
    </Wrapper> 
  )
}
const Wrapper = styled.footer`
 width: 100%;
 height: 250px;
 background: #1A1A1A;
 color: var(--white);
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 2rem;
 text-align: center;
  a {
      color: var(--white);
 }
 h5 {
    margin-top: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2.781px;
 }
 .double {
    font-size: 25px;
 }
 .social-links {
    display: flex;
    gap: 20px;
    a {
        color: var(--white);
        svg {
            font-size: 25px;
        }
    }
 } 
 p {
    font-family: Nunito;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 1px;
    span {
     font-weight: 700;
     margin-right: 0.75rem;
   }
 }
`

export default Footer