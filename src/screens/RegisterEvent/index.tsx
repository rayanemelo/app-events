import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../RootStackParams';
import {TouchableOpacityBase, View} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, Descripcion, Date} from './styles';
import DatePicker from 'react-native-date-picker';

type RegisterEventScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'RegisterEvent'
>;

interface IDatePicker {
  date: Date;
}

const RegisterEvent: React.FC = () => {
  const navigation = useNavigation<RegisterEventScreenProp>();
  // const [date, setDate] = useState(new Date());
  return (
    <>
      <Header text="Cadastrar Evento" hasIcon={true} />
      <Container>
        <View>
          <Input placeholder="Nome do evento" />
          <Descripcion placeholder="Descrição" />
          <Input placeholder="Data" />
          <Input placeholder="Horário" />
          <Input placeholder="Localização" />
          <Input placeholder="Valor do ingresso" />
          <Input placeholder="Informações de contato" />
        </View>
        <View>
          <Button text="Salvar" variantColor="blue" />
        </View>
      </Container>
    </>
  );
};

export default RegisterEvent;
