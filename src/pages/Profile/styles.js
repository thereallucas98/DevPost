import styled from 'styled-components/native';

export const Avatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;

  opacity: 0.9;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bg};
  width: 80%;
  height: 50px;

  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  color: ${props => props.color};
  font-style: italic;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  left: 25px;

  flex-direction: row;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #353640;
`;

export const Email = styled.Text`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;

  color: #DDD;
  font-size: 20px;
  font-style: italic;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;

  background-color: #DDD;
  border-radius: 8px;

  padding: 10px;
  
  font-size: 20px;
  text-align: center;
`;


export const ModalContainer = styled.KeyboardAvoidingView`
  width: 100%;
  height: 60%;

  background-color: #FFF;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
`;

export const Name = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;

  font-size: 28px;
  color: #FFF;
  font-weight: bold;
`;

export const UploadButton = styled.TouchableOpacity`
  margin-top: 20%;
  background-color: #FFF;
  width: 165px;
  height: 165px;

  border-radius: 90px;

  align-items: center;
  justify-content: center;

  z-index: 5;
`;

export const UploadText = styled.Text`
  z-index: 9;
  position: absolute;
  font-size: 55px;
  color: #E52246;
  opacity: 0.4;
`;