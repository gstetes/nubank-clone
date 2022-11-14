import styled from 'styled-components/native';

interface HeaderContainerProps {
  hideUsername: boolean;
};

export const HeaderContainer = styled.View<HeaderContainerProps>`
  background-color: #810AD0;
  height: ${props => props.hideUsername ? '180px' : '230px'};
  padding-top: 80px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  justify-content: space-between;
`;

export const HeaderContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeText = styled.Text`
  color: #d7b6ee;
  font-size: 22px;
  font-weight: bold;
`;

export const UserButton = styled.TouchableOpacity`
  background-color: #FFFFFF25;
  padding: 20px;
  border-radius: 50%;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 35%;
`;