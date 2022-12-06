import {TextInput} from 'react-native-paper';

export default function Cadastro() {
  return (
    <>
      <TextInput placeholder="Nome cliente" />
      <TextInput placeholder="Telefone" />
      <TextInput placeholder="CPF" />
      <TextInput placeholder="Rua" />
      <TextInput placeholder="Numero" keyboardType="number-pad" />
      <TextInput placeholder="Bairro" />
    </>
  );
}
