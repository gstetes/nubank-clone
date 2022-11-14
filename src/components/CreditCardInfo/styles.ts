import styled from 'styled-components/native';

export const Container = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
  justify-content: space-between;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const InvoiceContainer = styled.View`
  margin-top: 15px;
`;

export const InvoiceText = styled.Text`
  color: #777;
  font-size: 15px;
`;

export const InvoiceValue = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
`;
