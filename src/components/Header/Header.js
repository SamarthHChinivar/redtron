import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTrophy, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems:"center", color:"white", marginBottom:'20px'}}>
          <DiCssdeck size='4rem'/> <Span>RedTron</Span>
        </a>
      </Link>
    </Div1>
    
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Tools</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href='https://samarth-portfolio-website.000webhostapp.com' target='_blank' rel='noopener'>
        <AiFillTrophy size='3rem'/>
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/samarth-h-chinivar' target='_blank' rel='noopener'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>

      <SocialIcons href='https://github.com/SamarthHChinivar' target='_blank' rel='noopener'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;