import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../RootStackParams';
import {Container} from './styles';
import Header from '../../components/Header';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <Container>
      <Header text="Eventos" />
    </Container>
  );
};

export default Home;
