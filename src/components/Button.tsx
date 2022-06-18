import React from 'react';
import {View} from 'react-native';
import {ButtonStyled, TextStyled} from './styles';

interface IButtonProps {
  onPress?: () => void;
  text: string;
  variantColor: string;
}

const Button: React.FC<IButtonProps> = ({onPress, text, variantColor}) => {
  return (
    <View>
      <ButtonStyled onPress={onPress} variantColor={variantColor}>
        <TextStyled variantColor={variantColor}>{text}</TextStyled>
      </ButtonStyled>
    </View>
  );
};

export default Button;
