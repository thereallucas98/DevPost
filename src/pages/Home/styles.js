import styled from 'styled-components/native';

export const ButtonPost = styled.TouchableOpacity`
  background-color: #202225;
  
  width: 60px;
  height: 60px;

  justify-content: center;
  align-items: center;

  border-radius: 30px;

  position: absolute;
  bottom: 6%;
  right: 6%;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #36393F;
`;

export const ListPosts = styled.FlatList`
  flex: 1;

  background-color: #F1F1F1;
`;