import * as Style from '@src/modules/form/formButton/styles';

interface Props {
  label: string;
  onPress: () => void;
}

export default function FormButton(props: Props) {
  const { label, ...otherProps } = props;
  return (
    <Style.ButtonWrapper {...otherProps}>
      <Style.Button>{label}</Style.Button>
    </Style.ButtonWrapper>
  );
}
