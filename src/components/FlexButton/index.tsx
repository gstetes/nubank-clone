import React from 'react';
import { Container, Label, ContentContainer, Subtitle } from './styles';

interface FlexButtonProps {
  icon: React.ReactElement;
  label: string;
  onPress?: () => void;
  subtitle?: string;
  margin?: number;
};

const FlexButton: React.FC<FlexButtonProps> = ({
  icon,
  label,
  onPress,
  subtitle,
  margin = 30
}) => {
  return (
    <Container onPress={() => onPress?.()} margin={margin}>
      <ContentContainer>
        {icon}
        <Label>{label}</Label>
      </ContentContainer>
      {subtitle &&
        <Subtitle>{subtitle}</Subtitle>
      }
    </Container>
  );
};

export default FlexButton;