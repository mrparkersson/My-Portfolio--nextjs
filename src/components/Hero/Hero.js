import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There!! <br />
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Amo Parker Prince is my name, and I'm a full-stack developer. I am a
        dependable and quick learner. I am constantly eager to learn new
        technologies and contribute to the growth of your firm.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://mail.google.com/mail/u/0/#inbox')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
