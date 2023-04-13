import * as S from '@src/modules/ud-ui/button/styles';

interface Props {
  label: string;
  onPress: () => void;
}

export default function UDButton(props: Props) {
  const { label, ...otherProps } = props;
  return (
    <S.ButtonWrapper {...otherProps}>
      <S.Button>{label}</S.Button>
    </S.ButtonWrapper>
  );
}
