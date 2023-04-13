import styled from '@emotion/native';
import { FONT_SIZE_MIN } from '@src/constants/index';

export const Main = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
  background: ${props => props.theme.color.white};
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
  color: ${props => props.theme.color.blue};
  text-decoration-line: underline;
`;
