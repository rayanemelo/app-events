import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../routes/RootStackParams';
import axios from 'axios';
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

interface IRegisterEvent {
  name: string;
  description: string;
  date: string;
  hours: string;
  location: string;
  price: string;
  info: string;
}

const RegisterEvent: React.FC = () => {
  const navigation = useNavigation<RegisterEventScreenProp>();
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({} as IRegisterEvent);

  // const handleUpdate;

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://192.168.2.104:3006/register-event',
        form,
      );
      setModalVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setForm({} as IRegisterEvent);
  };

  return (
    <>
      <Header
        text="Cadastrar Evento"
        hasIcon={true}
        onPress={() => navigation.navigate('EventsAdmin', {reload: true})}
      />
      <Container>
        <View>
          <Input
            placeholder="Nome do evento"
            value={form?.name}
            onChange={e =>
              setForm({
                ...form,
                name: e.nativeEvent.text,
              })
            }
          />
          <Descripcion
            placeholder="Descrição"
            value={form?.description}
            onChange={e =>
              setForm({
                ...form,
                description: e.nativeEvent.text,
              })
            }
          />
          <Input
            placeholder="Data"
            value={form?.date}
            onChange={e =>
              setForm({
                ...form,
                date: e.nativeEvent.text,
              })
            }
          />
          <Input
            placeholder="Horário"
            value={form?.hours}
            onChange={e =>
              setForm({
                ...form,
                hours: e.nativeEvent.text,
              })
            }
          />
          <Input
            placeholder="Localização"
            value={form?.location}
            onChange={e =>
              setForm({
                ...form,
                location: e.nativeEvent.text,
              })
            }
          />
          <Input
            placeholder="Valor do ingresso"
            value={form?.price}
            onChange={e =>
              setForm({
                ...form,
                price: e.nativeEvent.text,
              })
            }
          />
          <Input
            placeholder="Informações de contato"
            value={form?.info}
            onChange={e =>
              setForm({
                ...form,
                info: e.nativeEvent.text,
              })
            }
          />
        </View>
        <View>
          <Button
            text="Salvar"
            variantColor="blue"
            onPress={() => handleSubmit()}
          />
        </View>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <ContainerModal>
            <TextModal>Cadastro salvo com sucesso!</TextModal>
            <TouchableOpacity onPress={() => handleCloseModal()}>
              <CloseModal>Fechar</CloseModal>
            </TouchableOpacity>
          </ContainerModal>
        </Modal>
      </Container>
    </>
  );
};

export default RegisterEvent;
