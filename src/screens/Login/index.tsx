import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../routes/RootStackParams';
import {Container, Text, Image} from './styles';
import {View, Alert} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../assets/logo.png';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Login'>;

const users = {
  admin: {
    email: 'admin@admin.com',
    password: 'admin',
  },
  user: {
    email: 'user@user.com',
    password: 'user',
  },
};

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenProp>();
  const [userCredentials, setUserCredentials] = useState({
    email: 'admin@admin.com',
    password: 'admin',
  });

  const handleLogin = () => {
    if (
      userCredentials.email === users.admin.email &&
      userCredentials.password === users.admin.password
    ) {
      navigation.navigate('EventsAdmin', {reload: false});
    } else if (
      userCredentials.email === users.user.email &&
      userCredentials.password === users.user.password
    ) {
      navigation.navigate('EventsUser');
    } else {
      // Alert('Usuário ou senha inválidos');
    }
  };

  useEffect(() => {
    console.log(userCredentials.email);
  }, [userCredentials.email]);

  return (
    <Container>
      <View>
        <Image source={logo} />
        <Text>Seja bem-vindo!</Text>
      </View>
      <View>
        <Input
          placeholder="Email"
          value={userCredentials.email}
          onChange={e =>
            setUserCredentials({
              ...userCredentials,
              email: e.nativeEvent.text,
            })
          }
        />
        <Input
          placeholder="Password"
          value={userCredentials.password}
          secureTextEntry
          onChange={e =>
            setUserCredentials({
              ...userCredentials,
              password: e.nativeEvent.text,
            })
          }
        />
      </View>
      <View>
        <Button
          text="Acessar"
          variantColor="white"
          onPress={() => handleLogin()}
        />
      </View>
    </Container>
  );
};

export default Login;
