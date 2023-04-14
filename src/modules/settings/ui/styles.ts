import { Platform, Pressable, Text, View } from 'react-native';
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

export const ListWrapper = styled(View)`
  background: ${props => props.theme.color.white};
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  elevation: 5;
  ${Platform.OS === 'ios' ? `box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);` : ''}
  margin-bottom: 15px;
`;

export const ItemWrapper = styled(Pressable)`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  border-bottom-width: 0.5px;
  border-color: ${props => props.theme.color.gray};
`;

export const ItemTitle = styled(Text)`
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  font-weight: bold;
  color: ${props => props.theme.color.black};
`;

export const DarkModeSwitcher = styled(View)`
  justify-content: center;
  height: 5px;
  padding-top: 10px;
`;
