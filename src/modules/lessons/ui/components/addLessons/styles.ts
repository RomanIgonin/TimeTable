import { Platform, View } from 'react-native';
import { BORDER_RADIUS_BTN } from '@src/modules/core/constants';
import styled from '@emotion/native';

export const Container = styled(View)``;

export const AllInputsWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  background: ${props => props.theme.color.white};
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  elevation: 5;
  ${Platform.OS === 'ios' ? `box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);` : ''}
  padding: 15px;
  margin-bottom: 15px;
`;

export const ButtonWrapper = styled(View)`
  align-items: center;
  justify-content: center;
`;
