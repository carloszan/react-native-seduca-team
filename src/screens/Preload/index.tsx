import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, LoadingIcon, Text} from './styles';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        routes: [
          {
            name: 'Home',
          },
        ],
      });
    }, 100);
  });

  return (
    <Container>
      <Text>Preload screen</Text>
      <LoadingIcon />
    </Container>
  );
};
