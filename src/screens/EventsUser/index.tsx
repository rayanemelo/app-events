import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../routes/RootStackParams';
import axios from 'axios';
import {
  Container,
  ContainerEvent,
  Text,
  ZeroEvent,
  ContainerEventZero,
  ContainerIcons,
} from './styles';
import {ScrollView, View, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

interface IEvents {
  _id: string;
  createdAt: string;
  date: string;
  description: string;
  info: string;
  location: string;
  name: string;
  price: number;
  updatedAt: string;
}

const EventsUser: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const [events, setEvents] = useState([]);
  const [loaded, setLoaded] = useState<Boolean>(false);
  const [admin, setAdmin] = useState<Boolean>(false);
  const [eventId, setEventId] = useState<String>();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://192.168.2.104:3006/events`);
        setEvents(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  const Item = ({data}: {data: IEvents}) => {
    return (
      <ContainerEvent>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Event', {eventId: data._id});
              setEventId(data._id);
            }}>
            <Text>{data.name}</Text>
          </TouchableOpacity>
        </View>
      </ContainerEvent>
    );
  };

  return (
    <>
      <Header text="Eventos" />
      {events.length ? (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Container>
            <View>
              <Input placeholder="Buscar..." />
            </View>
            <View>
              <FlatList
                data={events}
                renderItem={({item}) => <Item data={item} />}
                keyExtractor={(item: IEvents) => item._id}
              />
            </View>
          </Container>
        </ScrollView>
      ) : (
        <>
          <ContainerEventZero>
            <ZeroEvent>Nenhum evento cadastrado</ZeroEvent>
          </ContainerEventZero>
        </>
      )}
    </>
  );
};

export default EventsUser;
