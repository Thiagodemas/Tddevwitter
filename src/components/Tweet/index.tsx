import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

interface Props {
  name: string;
  user: string;
  date: string;
  description: string;
  imgNews?: string;
  avatar?: string;
  likes: string;
  retweet: string;
}

const Tweet: React.FC<Props> = ({
  name,
  user,
  date,
  description,
  imgNews,
  avatar,
  likes,
  retweet,
}) => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar src={avatar} />

        <Content>
          <Header>
            <strong>{name}</strong>
            <span>{user}</span>
            <Dot />
            <time>{date}</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>{description}</Description>

          <ImageContent src={imgNews} />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              {retweet}
            </Status>
            <Status>
              <LikeIcon />
              {likes}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
