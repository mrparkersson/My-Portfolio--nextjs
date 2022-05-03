import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { CardInfo } from '../Projects/ProjectsStyles';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 40, text: 'Open Source Projects' },
  { number: 1000, text: 'Github Commits' },
  { number: 26, text: 'Github Followers' },
  { number: 116, text: 'Github Stars' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((item, index) => (
        <Box key={index}>
          <BoxNum>{item.number}+</BoxNum>
          <BoxText>{item.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
