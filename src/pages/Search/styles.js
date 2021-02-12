import styled from 'styled-components/native';

export const AreaInput = styled.View`
  flex-direction: row;
  margin: 10px;

  background-color: #F1F1F1;
  align-items: center;
  padding: 5px 10px;
  border-radius: 8px;
`;

export const Container = styled.View`
  flex: 1;
  
  padding-top: 15px;
  background-color: #353840;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;

  background-color: #F1F1F1;


  padding-left: 8px;

  font-size: 17px;
  color: #121212;
`;

export const List = styled.FlatList`
  flex: 1;
`;