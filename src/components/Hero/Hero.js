import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Name, HeaderThree, Hr, LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Salman Ashraf <br />
        <Hr />
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A Graduate Software Engineer at ARUP with a First-Class BSc in Computer Science from the University of Manchester. Experienced in backend and frontend development using Python, Java, JavaScript, and React. Skilled in machine learning, with proven success in NLP and deep learning projects like Fake News Detection and Air Quality Analysis.
      </SectionText>
      <Button onClick={() => window.location = '#contact'}>Reach Out</Button>
    </LeftSection>
  </Section>
);

export default Hero;