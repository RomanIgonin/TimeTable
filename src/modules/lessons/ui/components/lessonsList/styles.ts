import { Platform, Pressable, Text, View } from 'react-native';
import { BORDER_RADIUS_BTN, FONT_SIZE_MIN } from '@src/constants/index';
import styled from '@emotion/native';

export const Container = styled(View)`
  margin-bottom: 25px;
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  background: ${props => props.theme.color.white};
  elevation: 5;
  ${Platform.OS === 'ios' ? `box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);` : ''}
`;

export const ContainerItem = styled(Pressable)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
  border-bottom-width: 0.5px;
  border-color: ${props => props.theme.color.gray};
`;

interface ItemProps {
  isLanguage?: boolean;
  isNoLessons?: boolean;
}
export const ItemText = styled(Text)<ItemProps>`
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  color: ${props => props.theme.color.black};
  font-weight: ${props => (props.isLanguage ? 'bold' : '')};
  width: ${props => (props.isNoLessons ? '100%' : '80px')};
  text-align: center;
`;
