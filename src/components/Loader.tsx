import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Loader = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator size="large" color="#1c658c" />
  </View>
);
