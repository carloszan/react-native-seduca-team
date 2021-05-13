import React from 'react';
import styled from 'styled-components/native';
import HistoryItemModel from '../screens/models/HistoryItemModel';

const Container = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const DescriptionArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DescriptionText = styled.Text`
  font-weight: bold;
`;

const DateText = styled.Text`
  opacity: 0.5;
`;

const DetailsArea = styled.View``;

const BeneficiaryText = styled.Text`
  opacity: 0.8;
`;

const ValueText = styled.Text`
  opacity: 0.8;
`;

const TypeText = styled.Text`
  opacity: 0.8;
`;

const Hr = styled.View`
  border-bottom-color: #666;
  border-bottom-width: 0.2px;
  margin-top: 10px;
`;

export default ({item}: {item: HistoryItemModel}) => {
  return (
    <Container>
      <DescriptionArea>
        <DescriptionText>{item.description}</DescriptionText>
        <DateText>{item.date.toLocaleDateString()}</DateText>
      </DescriptionArea>

      <DetailsArea>
        <BeneficiaryText>{item.beneficiary}</BeneficiaryText>
        <ValueText>R${item.value}</ValueText>
        <TypeText>{item.type}</TypeText>
      </DetailsArea>

      <Hr />
    </Container>
  );
};
