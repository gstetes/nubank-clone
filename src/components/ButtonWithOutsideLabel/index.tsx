import React from 'react';
import Button from '../Button';

import {
  Container,
  ButtonLabel
} from './styles';

interface ButtonWithOutsideLabelProps {
  label: string;
  icon: React.ReactElement;
  onPress?: () => void;
  badge?: string;
};

const ButtonWithOutsideLabel: React.FC<ButtonWithOutsideLabelProps> = ({
  label,
  icon,
  onPress,
  badge
}) => {
  return (
    <Container>
      <Button
        icon={icon}
        withBackground
        onPress={() => onPress?.()}
      />
      <ButtonLabel>{label}</ButtonLabel>
    </Container>
  );
};

export default ButtonWithOutsideLabel;