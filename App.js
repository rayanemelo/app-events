import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Routes from './src/routes/index';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/screens/Home/index';

const Stack = createNativeStackNavigator();

const App = () => {
  return <Routes />;
};

export default App;
