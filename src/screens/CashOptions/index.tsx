import React from 'react';
import CashTracking from '../../components/CashTracking';
import Header from '../../components/Header';
import Insurance from '../../components/Insurance';

import { Container } from './styles';

interface CashOptionsProps {
  navigation: any;
};

const CashOptions: React.FC<CashOptionsProps> = ({ navigation }) => {
  return (
    <Container>
      <Header
        hideUsername={true}
        onProfilePress={() => navigation.navigate('Profile')}
      />
      <CashTracking />
      <Insurance />
    </Container>
  );
}

export default CashOptions;