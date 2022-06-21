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
  Linha,
} from './styles';
import {View, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {Loader} from '../../components/Loader';
import Icon from 'react-native-vector-icons/FontAwesome';

type EventsUserScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'EventsUser'
>;

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
  const navigation = useNavigation<EventsUserScreenProp>();

  const [events, setEvents] = useState([]);
  const [loaded, setLoaded] = useState<Boolean>(false);
  const [eventId, setEventId] = useState<String>();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://192.168.2.104:8000/events`);
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
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="calendar"
                size={20}
                color="#1c658c"
                style={{marginRight: 10}}
              />
              <Text>{data.name}</Text>
            </View>
            <Linha />
          </TouchableOpacity>
        </View>
      </ContainerEvent>
    );
  };

  return (
    <>
      <Header text="Eventos" />
      {!loaded ? (
        <Loader />
      ) : events.length ? (
        <>
          <View style={{flexGrow: 1}}>
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
          </View>
        </>
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
