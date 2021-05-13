import React from 'react';
import {Container, TopText, HistoryList} from './styles';

import HistoryItem from '../../components/HistoryItem';
import HistoryItemModel from '../models/HistoryItemModel';

const histories: HistoryItemModel[] = [
  {
    id: '1',
    beneficiary: 'Uber',
    date: new Date(),
    description: 'Transferencia enviada',
    type: 'Pix',
    value: 19.9,
  },
  {
    id: '2',
    beneficiary: 'Spotify',
    date: new Date(),
    description: 'Transferencia enviada',
    type: 'Pix',
    value: 53.4,
  },
  {
    id: '3',
    beneficiary: 'Spotify',
    date: new Date(),
    description: 'Transferencia enviada',
    type: 'Pix',
    value: 53.4,
  },
  {
    id: '4',
    beneficiary: 'Spotify',
    date: new Date(),
    description: 'Transferencia enviada',
    type: 'Pix',
    value: 53.4,
  },
  {
    id: '5',
    beneficiary: 'Spotify',
    date: new Date(),
    description: 'Transferencia enviada',
    type: 'Pix',
    value: 53.4,
  },
  {
    id: '6',
    beneficiary: 'Spotify',
    date: new Date(),
    description: 'Transferencia enviada',
    type: 'Pix',
    value: 53.4,
  },
  {
    id: '7',
    beneficiary: 'Spotify',
    date: new Date(),
    description: 'Transferencia enviada',
    type: 'Pix',
    value: 53.4,
  },
  {
    id: '8',
    beneficiary: 'Spotify',
    date: new Date(),
    description: 'Transferencia enviada',
    type: 'Pix',
    value: 53.4,
  },
  {
    id: '9',
    beneficiary: 'Spotify',
    date: new Date(),
    description: 'Transferencia enviada',
    type: 'Pix',
    value: 53.4,
  },
];

export default () => {
  return (
    <Container>
      <TopText>Historico</TopText>
      <HistoryList
        data={histories}
        renderItem={HistoryItem}
        keyExtractor={(item, index) => item.id}
      />
    </Container>
  );
};
