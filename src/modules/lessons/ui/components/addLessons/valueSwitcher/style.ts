import { Pressable, Text, View } from 'react-native';
import { BORDER_RADIUS_BTN, FONT_SIZE_MIN } from '@src/constants/index';
import styled from '@emotion/native';

export const Container = styled(Pressable)`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  align-self: stretch;
  padding: 7px 0;
`;

export const TypeText = styled(Text)`
  color: ${props => props.theme.color.black};
  font-weight: bold;
  margin-bottom: 5px;
`;

interface SwitcherProps {
  type: string;
}
export const SwitcherWrapper = styled(View)<SwitcherProps>`
  align-items: center;
  width: ${props => (props.type === 'language' ? '140px' : '70px')};
`;

export const SwitcherText = styled(Text)`
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  color: ${props => props.theme.color.black};
`;
