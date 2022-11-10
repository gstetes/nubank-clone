import React from 'react';
import { NavigationContainerProps } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from '../Button';

import {
  HeaderContainer,
  HeaderContent,
  WelcomeText,
  UserButton,
  ButtonsContainer
} from './styles';

interface HeaderOptions {
  onProfilePress: () => void;
};

const Header: React.FC<HeaderOptions> = ({
  onProfilePress
}) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <UserButton onPress={onProfilePress}>
          <Ionicons name="person-outline" size={25} color="#d7b6ee" />
        </UserButton>
        <ButtonsContainer>
          <Button
            withBackground={false}
            icon={<Ionicons name="eye-outline" size={25} color="#d7b6ee" />}
          />
          <Button
            withBackground={false}
            icon={<Ionicons name="help-outline" size={25} color="#d7b6ee" />}
          />
          <Button
            withBackground={false}
            icon={<Ionicons name="mail-outline" size={25} color="#d7b6ee" />}
          />
        </ButtonsContainer>
      </HeaderContent>
      <WelcomeText>
        Olá, Guilherme
      </WelcomeText>
    </HeaderContainer>
  );
}

export default Header;