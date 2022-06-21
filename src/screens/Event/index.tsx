import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../routes/RootStackParams';
import {View} from 'react-native';
import {Container, Title, Text, Bold} from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';
import axios from 'axios';
// type EventScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Event'>;

interface IEvent {
  _id: string;
  createdAt: string;
  date: string;
  description: string;
  info: string;
  location: string;
  name: string;
  price: number;
  hours: string;
  updatedAt: string;
}

const Event: React.FC = ({route}: any) => {
  // const navigation = useNavigation<EventScreenProp>();
  const {eventId} = route.params;
  console.log('eventId: ', eventId);

  const [event, setEvent] = useState({} as IEvent);
  console.log('event: ', event);
  const [loaded, setLoaded] = useState<Boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `http://192.168.2.104:3006/event/${eventId}`,
        );
        setEvent(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return (
    <>
      <Header text={event?.name} hasIcon={true} />
      <Container>
        <View>
          <Title>{event?.name}</Title>
          <Text>{event?.description}</Text>
          <Bold>Data</Bold>
          <Text>{event?.date}</Text>
          <Bold>Horário</Bold>
          <Text>{event?.hours}</Text>
          <Bold>Localização</Bold>
          <Text>{event?.location}</Text>
          <Bold>Valor do ingresso</Bold>
          <Text>R${event?.price}</Text>
          <Bold>Informações de contato</Bold>
          <Text>{event?.info}</Text>
        </View>
        <View>
          <Button text="Comprar ingresso" variantColor="blue" />
        </View>
      </Container>
    </>
  );
};

export default Event;
