import React from 'react';
import AccountFunctions from '../../components/AccountFunctions';
import AccountInfo from '../../components/AccountInfo';
import Header from '../../components/Header';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FlexButton from '../../components/FlexButton';
import News from '../../components/News';
import CreditCardInfo from '../../components/CreditCardInfo';

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
      <FlexButton
        label='Meus cartões'
        icon={<IonIcons name="card-outline" size={30} color="#000" />}
      />
      <News />
      <CreditCardInfo />
    </Container>
  );
};

export default Home;