import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../RootStackParams';
import {
  Container,
  ContainerEvent,
  Text,
  ZeroEvent,
  ContainerEventZero,
  ContainerIcons,
} from './styles';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

interface IEvent {
  _id: number;
  createdAt: string;
  date: string;
  description: string;
  info: string;
  location: string;
  name: string;
  price: number;
  updatedAt: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const [events, setEvents] = useState([]);
  const [loaded, setLoaded] = useState<Boolean>(false);

  const [admin, setAdmin] = useState<Boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://192.168.2.104:3006/events');

        setEvents(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return (
    <>
      <Header text="Eventos" />
      {events.length ? (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Container>
            <View>
              <Input placeholder="Buscar..." />
            </View>
            {events?.map((event: IEvent) => (
              <ContainerEvent>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Event')}>
                    <Text>{event.name}</Text>
                  </TouchableOpacity>
                </View>
                {!admin && (
                  <ContainerIcons>
                    <TouchableOpacity>
                      <Icon
                        name="edit"
                        size={30}
                        color="#7d7d7d"
                        style={{marginRight: 15}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Icon
                        name="trash-o"
                        size={28}
                        color="#7d7d7d"
                        style={{marginRight: 10}}
                      />
                    </TouchableOpacity>
                  </ContainerIcons>
                )}
              </ContainerEvent>
            ))}

            {!admin && (
              <View style={{marginTop: 20}}>
                <Button
                  text="Cadastrar Evento"
                  variantColor="blue"
                  onPress={() => navigation.navigate('RegisterEvent')}
                />
              </View>
            )}
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

export default Home;
