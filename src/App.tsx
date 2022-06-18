import {Node} from '@babel/core';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Routes from './routes';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;
