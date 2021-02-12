import styled from 'styled-components/native';

export const Actions = styled.View`
  flex-direction: row;

  align-items: baseline;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;
  margin-right: 6px;
`;

export const Container = styled.View`
  margin-top: 8px;
  margin: 8px 2%;
  padding: 10px;

  background-color: #FFF;

  border-radius: 8px;
  
  box-shadow: 1px 1px 3px rgba(18, 18, 18, 0.2);
  elevation: 3;
`;

export const Content = styled.Text`
  color: #353440;
`;

export const ContentView = styled.View``;

export const Header = styled.TouchableOpacity`
  width: 100%;
  
  flex-direction: row;
  
  align-items: center;
  /* justify-content: space-around; */
  margin-bottom: 5px;
`;

export const Like = styled.Text`
  color: #E52246;
  margin-left: 6px;
  margin-right: 6px;
`;

export const LikeButton = styled.TouchableOpacity`
  width: 55px;
  margin-top: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Name = styled.Text`
  color: #353840;
  font-size: 20px;
  font-weight: bold;
  /* text-align: flex-end; */
`;

export const TimePost = styled.Text`
  margin-right: 6px;
`;
