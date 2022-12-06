import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Card, Button, Title, Paragraph} from 'react-native-paper';

export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <Button onPress={() => navigation.navigate('Cadastro' as never)}>
        Cadastrar novo
      </Button>
    </>
  );
}
