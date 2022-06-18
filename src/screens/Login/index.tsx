import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../RootStackParams';
import {Container, Text, Image} from './styles';
import {View} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../assets/logo.png';
type LoginScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Login'>;

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenProp>();
  return (
    <Container>
      <View>
        <Image source={logo} />
        <Text>Seja bem-vindo!</Text>
      </View>
      <View>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </View>
      <View>
        <Button
          text="Acessar"
          variantColor="white"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </Container>
  );
};

export default Login;
