import styled from '@emotion/native';
import {
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
  HEIGHT_INPUT,
} from '@src/modules/core/constants';

export const TextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextError = styled.Text`
  color: rgba(255, 0, 0, 0.74);
  font-size: ${() => `${FONT_SIZE_MIN}px`};
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: ${() => `${FONT_SIZE_MID}px`};
  margin: 5px 0 5px 45px;
`;

export const TextInput = styled.TextInput`
  height: ${() => `${HEIGHT_INPUT}px`};
  margin: 0 30px 0 30px;
  padding-left: 15px;
  padding-right: 10px;
  border-width: 1px;
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  font-size: ${() => `${FONT_SIZE_MIN}px`};
`;
