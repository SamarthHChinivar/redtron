import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
import { images } from '../../constants/constants';

const Timeline = () => {
  return (
    <Section id='about'>
      <SectionDivider/>
      <br/> <br/>

      <SectionTitle main>About</SectionTitle>

      <GridContainer>
      {images.map(({id, image, title, description, visit}) => (
        <BlogCard key={id}>
          <Img src={image}/>

          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          
          <CardInfo>{description}</CardInfo>

          {/* <div>
            <Hr/>
            <TitleContent>Modules</TitleContent>
            <TagList>
              {tags.map((tag, i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div> */}

          <UtilityList>
            {/* <ExternalLinks href={source} target='_blank' >Code</ExternalLinks> */}
            <ExternalLinks href={visit} target='_blank' >Contact</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>


      <br/>
      <SectionDivider/>
      <br/>
    </Section>
  );
};

export default Timeline;
