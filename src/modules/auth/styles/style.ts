import styled from '@emotion/native';
import { BLUE, FONT_SIZE_MIN } from '@src/modules/core/constants';

export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;

export const QuestionWrapper = styled.View`
  align-items: center;
`;
export const Question = styled.Text`
  margin: 10px 0 0 0;
`;

export const LinkWrapper = styled.Pressable`
  align-items: center;
`;
export const Link = styled.Text`
  font-size: ${() => `${FONT_SIZE_MIN}px`};
  color: ${() => `${BLUE}`};
  text-decoration-line: underline;
`;
