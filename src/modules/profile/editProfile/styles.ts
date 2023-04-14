import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import {
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
} from '@src/constants/index';
import styled from '@emotion/native';

export const Container = styled(View)`
  flex: 1;
  margin: 0 15px;
`;

export const Header = styled(Text)`
  text-align: center;
  padding: 7px 0;
  font-size: ${() => `${FONT_SIZE_MID}px`};
  font-weight: bold;
  color: ${props => props.theme.color.black};
`;

export const BodyContainer = styled(View)`
  background: ${props => props.theme.color.white};
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  elevation: 5;
  ${Platform.OS === 'ios' ? `box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);` : ''}
  margin-bottom: 15px;
`;

export const PhotoWrapper = styled(Pressable)`
  margin: 15px 0 15px 0;
  align-items: center;
`;

export const ImagePhotoWrapper = styled(ImageBackground)`
  width: 110px;
  height: 110px;
`;

export const ImagePhotoDownload = styled(Image)`
  align-self: center;
  width: 45px;
  height: 45px;
  opacity: 0.7;
  margin-top: 32.5px;
`;

export const ItemListWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  margin: 0 15px 15px 0;
`;

export const ItemListTitle = styled(Text)`
  text-align: center;
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  font-weight: bold;
  color: ${props => props.theme.color.black};
  width: 65px;
  margin: 0 10px;
`;

export const ItemListValue = styled(View)`
  flex: 1;
`;

export const RadioContainer = styled(View)`
  flex-direction: row;
`;

interface GenderProps {
  isSelectGender?: boolean;
}
export const GenderWrapper = styled(Pressable)<GenderProps>`
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  background-color: ${props =>
    props.isSelectGender ? props.theme.color.blue : props.theme.color.white};
  padding: 10px 10px;
  margin-right: 15px;
`;

export const GenderText = styled(Text)<GenderProps>`
  color: ${props =>
    props.isSelectGender ? props.theme.color.white : props.theme.color.black};
`;

export const ButtonWrapper = styled(View)`
  align-items: center;
`;
