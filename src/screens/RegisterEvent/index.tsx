import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../RootStackParams';
import {TouchableOpacity, View, Text, Modal} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Descripcion,
  ContainerModal,
  TextModal,
  CloseModal,
} from './styles';

type RegisterEventScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'RegisterEvent'
>;

const RegisterEvent: React.FC = () => {
  const navigation = useNavigation<RegisterEventScreenProp>();
  const [modalVisible, setModalVisible] = useState(false);
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
          <Button
            text="Salvar"
            variantColor="blue"
            onPress={() => setModalVisible(true)}
          />
        </View>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <ContainerModal>
            <TextModal>Cadastro salvo com sucesso!</TextModal>
            <TextModal>Erro ao criar evento</TextModal>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <CloseModal>Fechar</CloseModal>
            </TouchableOpacity>
          </ContainerModal>
        </Modal>
      </Container>
    </>
  );
};

export default RegisterEvent;
