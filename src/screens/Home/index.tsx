import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../RootStackParams';
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

  const Item = ({data}: {data: IEvents}) => {
    return (
      <ContainerEvent>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Event')}>
            <Text>{data.name}</Text>
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
