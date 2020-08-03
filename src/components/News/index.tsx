import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  numberTwitter: string;
}

const News: React.FC<Props> = ({ title, numberTwitter }) => {
  return (
    <Container>
      <span>Assuntos do momento no Brasil</span>
      <strong>{title}</strong>
      <span>{numberTwitter} Tweets</span>
    </Container>
  );
};

export default News;
