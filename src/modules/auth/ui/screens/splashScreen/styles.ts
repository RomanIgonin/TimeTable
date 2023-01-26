import styled from '@emotion/native';
import { FONT_SIZE_MIN } from '@src/modules/core/constants';

export const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  margin-top: 10px;
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  font-weight: bold;
`;
