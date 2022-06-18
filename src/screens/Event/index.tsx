import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../RootStackParams';
import {View} from 'react-native';
import {Container, Title, Text, Bold} from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';

type EventScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Event'>;

const Event: React.FC = () => {
  const navigation = useNavigation<EventScreenProp>();

  return (
    <>
      <Header text="Nome do evento" hasIcon={true} />
      <Container>
        <View>
          <Title>Nome do evento</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Bold>Data</Bold>
          <Text>20/05/2022</Text>
          <Bold>Horário</Bold>
          <Text>20h30</Text>
          <Bold>Localização</Bold>
          <Text>
            Theatro São Pedro - Praça Mal. Deodoro, S/N - Centro Histórico,
            Porto Alegre - RS, 90010-300
          </Text>
          <Bold>Valor do ingresso</Bold>
          <Text>R$130,00</Text>
          <Bold>Informações de contato</Bold>
          <Text>(51) 355496555, email@email.com </Text>
        </View>
        <View>
          <Button text="Comprar ingresso" variantColor="blue" />
        </View>
      </Container>
    </>
  );
};

export default Event;
