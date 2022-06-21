import React from 'react';
import {Container, Button, Text, Image} from './styles';
import logo from '../../assets/logo.png';

const Home = ({navigation}) => {
  return (
    <Container>
      {/* <Image source={logo} /> */}

      <Button onPress={() => navigation.navigate('Events')}>
        <Text>Usuário</Text>
      </Button>
      <Button onPress={() => navigation.navigate('Login')}>
        <Text>Administrativo</Text>
      </Button>
    </Container>
  );
};

export default Home;
