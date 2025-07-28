import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
    <Section nopadding id="projects">
      <SectionDivider/>
      <SectionTitle>Projects</SectionTitle>
      <SectionText>Learn about my projects completed over the years. Feel free to contact me if you have any questions.</SectionText>
      <GridContainer>
        {projects.map(({ id, title, description, image, tags, source, visit, pdf }) => (
          <BlogCard key={id}>

            <Img src={image} />

            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr />
            </TitleContent>

            <CardInfo>{description}</CardInfo>

            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>

            <UtilityList>
              {visit && (<ExternalLinks href={visit} target='blank'>Code</ExternalLinks>)}
              {source && (<ExternalLinks href={source} target='blank'>Source</ExternalLinks>)}
              {pdf && (
                <ExternalLinks href={pdf} target="_blank">Report</ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>

        ))}
      </GridContainer>
    </Section>
);

export default Projects;