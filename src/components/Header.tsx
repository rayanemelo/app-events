import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {HeaderStyled, TextStyled} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
interface IHeaderProps {
  text: string;
  hasIcon?: boolean;
  onPress?: () => void;
}

const Header: React.FC<IHeaderProps> = ({text, hasIcon = false, onPress}) => {
  return (
    <View>
      <HeaderStyled>
        <TouchableOpacity onPress={onPress}>
          {hasIcon && (
            <Icon
              name="angle-left"
              size={30}
              color="#fff"
              style={{marginRight: 15}}
            />
          )}
        </TouchableOpacity>

        <TextStyled variantColor="blue">{text}</TextStyled>
      </HeaderStyled>
    </View>
  );
};

export default Header;
