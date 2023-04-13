import styled from '@emotion/native';
import {
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
  HEIGHT_INPUT,
} from '@src/constants/index';
import { View, Text, TextInput } from 'react-native';

export const TextWrapper = styled(View)`
  margin: 0 15px;
`;

export const TextError = styled(Text)`
  color: rgba(255, 0, 0, 0.74);
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  margin: 0 0 5px 0;
`;

export const TextStyled = styled(Text)`
  font-weight: bold;
  font-size: ${() => `${FONT_SIZE_MID}px`};
  margin: 5px 0 5px 0;
  color: ${props => props.theme.color.black};
`;

export const TextInputStyled = styled(TextInput)`
  height: ${() => `${HEIGHT_INPUT}px`};
  padding-left: 15px;
  padding-right: 10px;
  border-width: 1px;
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  color: ${props => props.theme.color.black};
`;
