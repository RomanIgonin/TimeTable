import * as S from '@src/modules/auth/ui/screens/splashScreen/styles';
import { ActivityIndicator } from 'react-native';
import { BLUE } from '@src/constants/index';

export default function SplashScreen() {
  return (
    <S.Main>
      <ActivityIndicator size={'large'} color={BLUE} />
      <S.Text>Loading</S.Text>
    </S.Main>
  );
}
