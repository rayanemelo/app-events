import React from 'react';
import {View} from 'react-native';
import {InputStyled} from './styles';

interface IInputProps {
  placeholder: string;
}

const Input: React.FC<IInputProps> = ({placeholder}) => {
  return (
    <View>
      <InputStyled placeholder={placeholder} />
    </View>
  );
};

export default Input;
