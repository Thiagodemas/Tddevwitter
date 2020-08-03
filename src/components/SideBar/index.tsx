import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
        <List
            title="O que está acontecendo"
            elements={[
                <News title="Bootcamp da Rocketseat" numberTwitter="34,2 mil" />,
                <News title="React Native" numberTwitter="100 mil" />,
                <News title="JavaScript" numberTwitter="18.676 mil" />,
                <News title="Node.js" numberTwitter="200 mil" />,
                <News title="Flamengo" numberTwitter="40 milhões" />,
                <News title="Next Leve Week" numberTwitter="677,45 mil" />,
                
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Luiz Batanero"
                nickname="@luizbatanero"
              />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSuggestion
                name="Camila Magalhães"
                nickname="@camilaamgl"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;