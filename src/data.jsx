import cpp_icon from './assets/cpp_icon.svg'
import css_icon from './assets/css_icon.svg'
import bootstrap_icon from './assets/bootstrap_icon.png'
import html_icon from './assets/html_icon.svg'
import git_icon from './assets/git_icon.png'
import js_icon from './assets/js_icon.svg'
import react_icon from './assets/react_icon.svg'
import english_icon from './assets/english_icon.svg'
import react_query_icon from './assets/react_query_icon.svg'
import react_router_icon from './assets/react_router_icon.svg'

import {SiMaildotru} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import {ImLinkedin} from 'react-icons/im'

import {LiaTelegramPlane} from 'react-icons/lia'
import { MdOutlineEmail } from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'


export const navLinks = [
  {
    url: '#about',
    text: 'About me',
  },
  {
    url: '#skills',
    text: 'Skills',
  },
  {
    url: '#projects',
    text: 'Projects',
  },
  {
    url: '#contact',
    text: 'Contact',
  },
]
export const socialLinks = [
  {
    url: 'mailto:asliddiniut@gmail.com',
    img: <SiMaildotru />,
    text: 'email link',
  },
  {
    url: 'https://github.com/asliwebdev',
    img:  <FaGithub />,
    text: 'github link',
  },
  {
    url: 'https://www.linkedin.com/in/asliddin-bozorov',
    img:  <ImLinkedin />,
    text: 'linkedin link',
  },
]
export const mainSkills = [
    { 
      id: 1,
      text: 'html5',
      icon: html_icon,
    },
    {
      id: 2,
      text: 'css3',
      icon: css_icon,
    },
    { 
      id: 3,
      text: 'bootstrap',
      icon: bootstrap_icon,
    },
    { 
      id: 4,
      text: 'javascript',
      icon: js_icon,
    },
    {
      id: 5,
      text: 'react',
      icon: react_icon,
    },
    {
      id: 6,
      text: 'react query',
      icon: react_query_icon,
    },
    {
      id: 7,
      text: 'react router',
      icon: react_router_icon,
    },
    {
      id: 8,
      text: 'git',
      icon: git_icon,
    }
]
export const otherSkills = [
    {
      id: 9,
      text: 'english',
      icon: english_icon,
    },
    {
      id: 10,
      text: 'c++',
      icon: cpp_icon,
    },
]
export const footerSocialLinks = [
  {
    id: 1,
    url: 'https://t.me/asliddin_iut',
    icon: <LiaTelegramPlane />,
  }, 
  {
    id: 2,
    url: 'https://www.linkedin.com/in/asliddin-bozorov',
    icon: <AiOutlineLinkedin /> ,
  }, 
  {
    id: 3,
    url: 'https://www.instagram.com/asliddin_iut',
    icon: <FaInstagram /> ,
  }, 
  {
    id: 4,
    url: 'mailto:asliddiniut@gmail.com',
    icon: <MdOutlineEmail /> ,
  }, 
]


