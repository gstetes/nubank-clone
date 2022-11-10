import {  } from '@react-navigation/native';
import React from 'react';
import AccountFunctions from '../../components/AccountFunctions';
import AccountInfo from '../../components/AccountInfo';
import Header from '../../components/Header';

import {
  Container,
} from './styles';

interface HomeProps {
  navigation: any;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <Container>
      <Header
        onProfilePress={() => navigation.navigate('Profile')}
      />
      <AccountInfo />
      <AccountFunctions />
    </Container>
  );
};

export default Home;