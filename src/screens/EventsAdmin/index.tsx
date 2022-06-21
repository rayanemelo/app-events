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
import {View, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Loader} from '../../components/Loader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useIsFocused} from '@react-navigation/native';

type HomeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'EventsAdmin'
>;

export interface IEvents {
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

const EventsAdmin: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const isFocused = useIsFocused();

  const [events, setEvents] = useState([]);
  const [loaded, setLoaded] = useState<Boolean>(false);
  const [eventId, setEventId] = useState<String>();
  const [deleted, setDeleted] = useState<Boolean>(false);

  useEffect(() => {
    const getEvents = async () => {
      setDeleted(false);
      try {
        const response = await axios.get(`http://192.168.2.104:3006/events`);
        setEvents(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    };

    getEvents();
  }, [deleted, isFocused]);

  const deleteEvent = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://192.168.2.104:3006/delete-event/${id}`,
      );
    } catch (error) {
      console.log(error);
    } finally {
      setDeleted(true);
    }
  };

  const Item = ({data}: {data: IEvents}) => {
    return (
      <ContainerEvent>
        <View style={{width: '90%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Event', {eventId: data._id});
              setEventId(data._id);
            }}>
            <Text>{data.name}</Text>
          </TouchableOpacity>
        </View>
        <ContainerIcons>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterEvent', {data: data})}>
            <Icon
              name="edit"
              size={30}
              color="#7d7d7d"
              style={{marginRight: 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteEvent(data._id)}>
            <Icon
              name="trash-o"
              size={28}
              color="#7d7d7d"
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        </ContainerIcons>
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

              <View style={{marginTop: 20}}>
                <Button
                  text="Cadastrar Evento"
                  variantColor="blue"
                  onPress={() =>
                    navigation.navigate('RegisterEvent', {data: {}})
                  }
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

export default EventsAdmin;
