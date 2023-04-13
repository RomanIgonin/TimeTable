import { Pressable, Text } from 'react-native';
import { BORDER_RADIUS_BTN, FONT_SIZE_MAX } from '@src/modules/core/constants';
import styled from '@emotion/native';

export const Container = styled(Pressable)`
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  background: ${props => props.theme.color.blue};
`;

export const ButtonText = styled(Text)`
  font-size: ${() => `${FONT_SIZE_MAX}px`};
  color: ${props => props.theme.color.white};
  font-weight: bold;
`;
