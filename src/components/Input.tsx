import React from 'react';
import {View} from 'react-native';
import {InputStyled} from './styles';

interface IInputProps {
  placeholder: string;
  value?: string;
  onChange?: (e: any) => void;
  secureTextEntry?: boolean;
}

const Input: React.FC<IInputProps> = ({
  placeholder,
  value,
  onChange,
  secureTextEntry,
}) => {
  return (
    <View>
      <InputStyled
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
