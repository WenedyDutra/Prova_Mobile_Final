import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Hello world Home</Text>
      <Button
        onPress={() => {
          navigation.navigate('Cadastro' as never);
        }}>
        Cadastro
      </Button>
    </View>
  );
}
