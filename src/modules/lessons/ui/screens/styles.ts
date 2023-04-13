import { Image, Pressable, Text, View } from 'react-native';
import { FONT_SIZE_MID } from '@src/constants/index';
import styled from '@emotion/native';

export const Container = styled(View)`
  flex: 1;
  margin: 0 15px;
`;

export const HeaderWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const ArrowWrapper = styled(Pressable)``;

export const ArrowBack = styled(Image)`
  width: 30px;
  height: 30px;
`;

export const HeaderText = styled(Text)`
  color: ${props => props.theme.color.black};
  font-weight: bold;
  font-size: ${() => `${FONT_SIZE_MID}px`};
  line-height: 30px;
`;

export const EmptyField = styled(View)`
  width: 30px;
`;
