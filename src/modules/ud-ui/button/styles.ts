import styled from '@emotion/native';
import {
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  HEIGHT_BTN,
  WIDTH_BTN,
} from '@src/modules/core/constants';
import { Pressable, Text } from 'react-native';

export const ButtonWrapper = styled(Pressable)`
  align-items: center;
  justify-content: center;
  height: ${() => `${HEIGHT_BTN}px`};
  width: ${() => `${WIDTH_BTN}px`};
  background-color: ${props => props.theme.color.blue};
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
`;
export const Button = styled(Text)`
  font-size: ${() => `${FONT_SIZE_MID}px`};
  font-weight: bold;
  color: white;
`;
