import React from 'react';

import ButtonWithOutsideLabel from '../ButtonWithOutsideLabel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container } from './styles';

const AccountFunctions: React.FC = () => {
  return (
    <Container horizontal>
      <ButtonWithOutsideLabel
        label='Pix'
        icon={<Ionicons name="cash-outline" size={30} color="#000" />}
      />
      <ButtonWithOutsideLabel
        label='Pagar'
        icon={<Ionicons name="card-outline" size={30} color="#000" />}
      />
      <ButtonWithOutsideLabel
        label='Empréstimo'
        icon={<Ionicons name="medkit-outline" size={30} color="#000" />}
      />
      <ButtonWithOutsideLabel
        label='Transferir'
        icon={<Ionicons name="shuffle-outline" size={30} color="#000" />}
      />
      <ButtonWithOutsideLabel
        label='Cobrar'
        icon={<Ionicons name="alert-outline" size={30} color="#000" />}
      />
      <ButtonWithOutsideLabel
        label='Investimentos'
        icon={<Ionicons name="globe-outline" size={30} color="#000" />}
      />
      <ButtonWithOutsideLabel
        label='Recarga'
        icon={<Ionicons name="phone-portrait-outline" size={30} color="#000" />}
      />
    </Container>
  );
};

export default AccountFunctions;