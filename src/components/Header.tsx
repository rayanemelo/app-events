import React from 'react';
import {View} from 'react-native';
import {HeaderStyled, TextStyled} from './styles';

interface IHeaderProps {
  text: string;
}

const Header: React.FC<IHeaderProps> = ({text}) => {
  return (
    <View>
      <HeaderStyled>
        <TextStyled variantColor="blue">{text}</TextStyled>
      </HeaderStyled>
    </View>
  );
};

export default Header;
