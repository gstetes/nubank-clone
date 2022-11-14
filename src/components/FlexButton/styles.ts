import styled from 'styled-components/native';

interface ContainerProps {
  margin: number;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  margin: ${props => `${props.margin}px`};
  padding: 15px;
  background: #EEEEEE80;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  margin-left: 20px;
  font-weight: bold;
  font-size: 14px;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Subtitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;