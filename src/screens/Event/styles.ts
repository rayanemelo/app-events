import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #222;
  text-align: center;
  margin-bottom: 10px;
`;

export const Bold = styled.Text`
  font-size: 16px;
  color: #222;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #222;
  text-align: justify;
  margin-bottom: 10px;
`;

export const ContainerModal = styled.View`
  padding: 10px;
  width: 65%;
  background-color: #fff;
  border-radius: 8px;
  margin: 200px auto 0;
  elevation: 10;
`;
export const TextModal = styled.Text`
  font-size: 16px;
  text-align: justify;
  margin: 10px auto 15px;
  text-align: center;
`;
