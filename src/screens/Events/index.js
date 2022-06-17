import React from 'react';
import {Container, Button, Text, Image} from './styles';
import logo from '../../assets/logo.png';
const Events = ({navigation}) => {
  return (
    <Container>
      {/* <Image source={logo} /> */}

      <Button>
        <Text>Usuário</Text>
      </Button>
    </Container>
  );
};

export default Events;
