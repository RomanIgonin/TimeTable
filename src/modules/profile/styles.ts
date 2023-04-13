import { Image, Platform, Pressable, Text, View } from 'react-native';
import {
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
} from '@src/constants';
import styled from '@emotion/native';

export const Container = styled(View)`
  margin: 0 15px;
`;

export const Header = styled(Text)`
  text-align: center;
  padding: 7px 0;
  font-size: ${() => `${FONT_SIZE_MID}px`};
  font-weight: bold;
  color: ${props => props.theme.color.black};
`;

export const TopInfoContainer = styled(View)`
  background: ${props => props.theme.color.white};
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  elevation: 5;
  ${Platform.OS === 'ios' ? `box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);` : ''}
  margin-bottom: 15px;
`;

export const PhotoWrapper = styled(View)`
  margin: 15px 0 5px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const PhotoProfileWrapper = styled(View)`
  border-radius: 60px;
  border-width: 5px;
  border-color: ${props => props.theme.color.gray};
`;

export const PhotoProfile = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 60px;
`;

export const EmptyField = styled(View)`
  width: 40px;
`;

export const EditImageWrapper = styled(Pressable)`
  margin-right: 15px;
`;

export const EditImage = styled(Image)`
  width: 25px;
  height: 25px;
`;

export const NameText = styled(Text)`
  font-weight: bold;
  font-size: ${() => `${FONT_SIZE_MID}px`};
  color: ${props => props.theme.color.black};
  text-align: center;
`;

export const EmailText = styled(Text)`
  color: ${props => props.theme.color.black};
  margin: 5px 0 10px 0;
  text-align: center;
`;

export const BottomInfoContainer = styled(View)`
  background: ${props => props.theme.color.white};
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  elevation: 5;
  ${Platform.OS === 'ios' ? `box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);` : ''}
  margin-bottom: 15px;
`;

export const BottomInfoWrapper = styled(View)`
  flex-direction: row;
  padding: 12px;
  border-bottom-width: 0.5px;
  border-color: ${props => props.theme.color.gray};
`;

export const BottomInfoTitleText = styled(Text)`
  flex: 1;
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  font-weight: bold;
  color: ${props => props.theme.color.black};
`;

export const BottomInfoText = styled(Text)`
  flex: 1;
  justify-self: flex-start;
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  color: ${props => props.theme.color.black};
`;
