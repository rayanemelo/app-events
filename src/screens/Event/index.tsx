import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../RootStackParams';
import {View, Text} from 'react-native';
import Header from '../../components/Header'; 

type EventScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Event'>;

const Event: React.FC = () => {
  const navigation = useNavigation<EventScreenProp>();

  return (
    <>
      <Header text="Nome do evento" /> 
    </>
  );
};

export default Event;
