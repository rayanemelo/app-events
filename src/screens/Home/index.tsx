import React, {useState} from 'react';
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
type HomeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const [events, setEvents] = useState<Boolean>(false);

  const [admin, setAdmin] = useState<Boolean>(false);

  return (
    <>
      <Header text="Eventos" />
      {events ? (
        <>
          <ContainerEventZero>
            <ZeroEvent>Nenhum evento cadastrado</ZeroEvent>
          </ContainerEventZero>
        </>
      ) : (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Container>
            <View>
              <Input placeholder="Buscar..." />
            </View>
            <ContainerEvent>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                  <Text>Nome do evento</Text>
                </TouchableOpacity>
              </View>
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
            </ContainerEvent>
            <ContainerEvent>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                  <Text>Nome do evento</Text>
                </TouchableOpacity>
              </View>
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
            </ContainerEvent>
            {admin && (
              <View>
                <Button text="Cadastrar Evento" variantColor="blue" />
              </View>
            )}
          </Container>
        </ScrollView>
      )}
    </>
  );
};

export default Home;
