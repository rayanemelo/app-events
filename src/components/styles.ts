import styled from 'styled-components/native';

const blue = '#1c658c';

interface IColorsProps {
  variantColor: string;
}

export const HeaderStyled = styled.View`
  height: 55px;
  background-color: ${blue};
  padding-left: 15px;
  flex-direction: row;
  align-items: center;
`;

export const TextStyled = styled.Text<IColorsProps>`
  color: ${props => (props.variantColor == 'blue' ? '#fff' : blue)};
  font-weight: 500;
  font-size: 16px;
`;

export const ButtonStyled = styled.TouchableOpacity<IColorsProps>`
  width: 100%;
  height: 50px;
  background-color: ${props => (props.variantColor == 'blue' ? blue : '#fff')};
  margin: 5px 0;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const InputStyled = styled.TextInput`
  width: 100%;
  height: 48px;
  background-color: #fff;
  border: 2px solid #1c658c
  margin: 5px 0; 
  border-radius:8px;
  padding-left:10px
`;
