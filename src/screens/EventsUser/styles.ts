import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px 10px;
`;

export const ContainerEventZero = styled.View`
  height: 100%;
  justify-content: center;
  align-self: center;
`;

export const ZeroEvent = styled.Text`
  color:#222222, 
  font-size:16px;
`;

export const Text = styled.Text`
  color:#222222,
  font-weight: 400;
  font-size:18px;

`;

export const ContainerEvent = styled.View`
  flex-direction: row;
  padding: 15px 0;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  margin-left: auto;
`;
export const Linha = styled.View`
  width: ${windowWidth - 20}
  height: 1;
  background-color: #ccc;
  margin-top: 10px;
`;
