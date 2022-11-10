import React from 'react';
import { ButtonComponent } from './styles';

interface ButtonProps {
  title?: string;
  icon?: React.ReactElement;
  onPress?: () => void;
  withBackground: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  onPress,
  withBackground
}) => {
  return (
    <ButtonComponent
      radius={!title ? '50%' : '10px'}
      withBackground={withBackground}
      onPress={() => onPress?.()}
    >
      {!!icon && icon}
    </ButtonComponent>
  )
};

export default Button;