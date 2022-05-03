import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with both small and large firms, and I've built full-stack
      apps for them using a variety of technologies and languages.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>Front-end</ListContainer>
        <ListParagraph>
          Experience with <br /> React.js, HTML/CSS, Styled Components, Scss,
          TypeScript
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>Back-end</ListContainer>
        <ListParagraph>
          Experience with <br /> Node.js and Databases
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>UI/UX</ListContainer>
        <ListParagraph>
          Experience with <br /> tools like Figma
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
