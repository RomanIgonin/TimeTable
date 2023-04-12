import { View, Platform } from 'react-native';
import { BORDER_RADIUS_BTN } from '@src/modules/core/constants';
import styled from '@emotion/native';

export const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.color.white};
  margin: 10px;
  border-radius: ${() => `${BORDER_RADIUS_BTN}px`};
  elevation: 5;
  ${Platform.OS === 'ios' ? `box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);` : ''}
`;

export const Salary = styled(View)`
  margin: 0 20px 20px 20px;
`;
