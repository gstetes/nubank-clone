import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  HeaderContainer,
  Title,
  InvoiceContainer,
  InvoiceText,
  InvoiceValue
} from './styles';

const CreditCardInfo: React.FC = () => {
  return (
    <Container> 
      <HeaderContainer>
        <Title>Cartão de crédito</Title>
        <Ionicons name="chevron-forward-outline" size={25} color="#AAA" />
      </HeaderContainer>
      <InvoiceContainer>
        <InvoiceText>Fatura atual</InvoiceText>
        <InvoiceValue>R$ 5.000,00</InvoiceValue>
      </InvoiceContainer>
    </Container>
  );
}

export default CreditCardInfo;