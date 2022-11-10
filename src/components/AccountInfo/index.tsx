import React from 'react';

import Button from '../Button';
import {
  Container,
  AccountConfig,
  AccountText,
  AccountMoney,
} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AccountInfo: React.FC = () => {
  return (
    <Container>
      <AccountConfig>
        <AccountText>Conta</AccountText>
        <Button
          withBackground={false}
          icon={<Ionicons name="chevron-forward-outline" size={20} color="#999" />}
        />
      </AccountConfig>
      <AccountMoney>R$ 123.456,00</AccountMoney>
    </Container>
  );
};

export default AccountInfo;