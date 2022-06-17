import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #1c658c;
  align-items: center;
  padding: 0 20px;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  background-color: #fff;
  margin: 5px 0;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Text = styled.Text`
  color: #1c658c;
  font-weight: 500;
  font-size: 16px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  margin-bottom: 40px;
`;
