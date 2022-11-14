import React from 'react';
import FlexButton from '../FlexButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ButtonsContainer, Container, Title } from './styles';

const Insurance: React.FC = () => {
  return (
    <Container>
      <Title>Acompanhe seu dinheiro</Title>
      <ButtonsContainer>
        <FlexButton
          icon={<Ionicons name="heart-outline" size={25} color="#000" />}
          label='Seguro de vida'
          margin={10}
        />
        <FlexButton
          icon={<Ionicons name="phone-portrait-outline" size={25} color="#000" />}
          label='Seguro de celular'
          margin={10}
        />
      </ButtonsContainer>
    </Container>
  );
}

export default Insurance;