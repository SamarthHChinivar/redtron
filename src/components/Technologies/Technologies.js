import React from 'react';
import { DiPython } from 'react-icons/di';
import {SiJupyter} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/> <br/>

    <SectionTitle>Tools</SectionTitle>
    <SectionText>
      Tools I explored during this Internship are shown below:
    </SectionText>

    <List>
      <ListItem>
        <DiPython size='3rem'/>
        <ListContainer>
          <ListTitle>Python 3</ListTitle>
          <ListParagraph>
            It is a programming <br/>
            language with many <br/>
            modules.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiJupyter size='3rem'/>
        <ListContainer>
          <ListTitle>Jupyter Notebook</ListTitle>
          <ListParagraph>
            It is the original web <br/> 
            app for creating and <br/> 
            sharing .ipynb codes <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
