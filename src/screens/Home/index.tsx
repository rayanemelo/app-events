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
} from './styles';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const [events, setEvents] = useState<Boolean>(false);

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
        <>
          <Container>
            <View>
              <Input placeholder="Buscar..." />
            </View>

            <ContainerEvent>
              <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                <Text>Nome do evento</Text>
              </TouchableOpacity>
            </ContainerEvent>
            {/* Se o login for adiministrativo */}
            <View>
              <Button text="Cadastrar Evento" variantColor="blue" />
            </View>
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
