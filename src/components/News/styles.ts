import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding-left: 10px;
  padding-right: 30px;
`;

export const Article = styled.View`
  background: #EEEEEE80;
  margin-left: 20px;
  padding: 20px;
  flex-direction: row;
  max-width: 330px;
  border-radius: 10px;
`;

export const ArticleText = styled.Text`
  font-size: 15px;
`;

export const HighlightedText = styled.Text`
  font-weight: bold;
  color: #810AD0;
`;
