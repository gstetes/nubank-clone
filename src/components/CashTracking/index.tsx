import React from 'react';
import FlexButton from '../FlexButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Container, Title, ButtonsContainer } from './styles';

const CashTracking: React.FC = () => {
  return (
    <Container>
      <Title>Acompanhe seu dinheiro</Title>
      <ButtonsContainer>
        <FlexButton
          icon={<Ionicons name="briefcase-outline" size={25} color="#000" />}
          label='Caixinhas'
          subtitle='R$ 100,00' 
          margin={10}
        />
        <FlexButton
          icon={<Ionicons name="cellular-outline" size={25} color="#000" />}
          label='Investimentos'
          subtitle='R$ 317,00'
          margin={10}
        />
        <FlexButton
          icon={<Ionicons name="wallet-outline" size={25} color="#000" />}
          label='Cripto'
          subtitle='R$ 758,00'
          margin={10}
        />
      </ButtonsContainer>
    </Container>
  );
};

export default CashTracking;