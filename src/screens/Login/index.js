import React from 'react';
import {Container, Button, Text, Image} from './styles';
import logo from '../../assets/logo.png';
const Home = ({navigation}) => {
  return (
    <Container>
      {/* <Image source={logo} /> */}

      <Button>
        <Text>Admin</Text>
      </Button>
    </Container>
  );
};

export default Home;
