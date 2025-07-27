import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Name, HeaderThree, Hr, LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <HeaderThree>Salman Ashraf</HeaderThree>
      <Hr />
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Write something about me
      </SectionText>
      <Button onClick={() => window.location = '#contact'}>Reach Out</Button>
    </LeftSection>
  </Section>
);

export default Hero;