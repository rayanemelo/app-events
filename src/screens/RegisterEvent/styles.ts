import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

export const Descripcion = styled.TextInput`
  width: 100%;
  height:100px;
  background-color: #fff;
  border: 2px solid #1c658c
  margin: 5px 0; 
  border-radius:8px;
  padding-left:10px
`;

export const ContainerModal = styled.View`
  padding: 10px;
  width: 80%;
  background-color: #1c658c;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin: 150px auto;
  elevation: 5;
`;

export const TextModal = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0 25px;
`;
