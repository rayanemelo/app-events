import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {HeaderStyled, TextStyled} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
interface IHeaderProps {
  text: string;
  hasIcon?: boolean;
}

const Header: React.FC<IHeaderProps> = ({text, hasIcon = false}) => {
  const navigation = useNavigation();
  return (
    <View>
      <HeaderStyled>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
