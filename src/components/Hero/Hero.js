import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To This <br/>
        RedTron Portfolio <br/>
        Website
      </SectionTitle>

      <SectionText>
        Purpose of this Webpage is to Demonstrate Projects Developed during <a href='https://samarth-portfolio-website.000webhostapp.com' target='_blank' >Samarth</a>'s Internship at <a href='https://www.redtron.org' target='_blank'>RedTron</a>.
      </SectionText>

      <br/>

      <Button onClick={() => window.open('#about', '_self')}>Contact</Button>
    </LeftSection>
  </Section>
);

export default Hero;