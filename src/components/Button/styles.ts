import styled from 'styled-components/native';

interface ButtonComponentProps {
  radius: string;
  withBackground: boolean;
}

export const ButtonComponent = styled.TouchableOpacity<ButtonComponentProps>`
  border-radius: ${(props) => props.radius};

  background: ${(props) => props.withBackground ? '#EEEEEE' : 'transparent'};
  padding: ${(props) => props.withBackground ? '35px' : 0}
`