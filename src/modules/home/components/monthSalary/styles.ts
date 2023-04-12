import { FONT_SIZE_MIN } from '@src/modules/core/constants';
import { Text, View } from 'react-native';
import styled from '@emotion/native';

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const Month = styled(Text)`
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  font-weight: bold;
  color: ${props => props.theme.color.black};
`;

export const Rubles = styled(Text)`
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  color: ${props => props.theme.color.black};
`;
