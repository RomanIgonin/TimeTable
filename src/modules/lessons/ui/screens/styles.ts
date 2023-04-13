import { StyleSheet, Text, View } from 'react-native';
import { FONT_SIZE_MID, FONT_SIZE_MIN } from '@src/modules/core/constants';
import styled from '@emotion/native';

export const LessonsStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  top: {
    // flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: FONT_SIZE_MID,
    fontWeight: 'bold',
  },
  addLessons: {
    // flex: 6,
    paddingBottom: 15,
  },
  lessonsList: {
    // flex: 20,
  },
});

export const Container = styled(View)`
  flex: 1;
  margin: 0 15px;
  //background: red;
`;

export const HeaderWrapper = styled(View)`
  align-items: center;
  margin: 10px 0;
`;

export const HeaderText = styled(Text)`
  color: ${props => props.theme.color.black};
  font-weight: bold;
  font-size: ${() => `${FONT_SIZE_MID}px`};
`;

export const LessonsList = styled(View)``;
