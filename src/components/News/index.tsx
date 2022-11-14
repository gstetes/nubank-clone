import React from 'react';

import {
  Container,
  Article,
  ArticleText,
  HighlightedText
} from './styles';

const News: React.FC = () => {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Article>
        <ArticleText><HighlightedText>Novidade! </HighlightedText>Conheça a ferramenta de Controle de gastos do Nubank.</ArticleText>
      </Article>
      <Article>
        <ArticleText><HighlightedText>Novidade! </HighlightedText>Conheça a ferramenta de Controle de gastos do Nubank.</ArticleText>
      </Article>
    </Container>
  );
}

export default News;