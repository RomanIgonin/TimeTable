import * as Style from '@src/modules/auth/ui/screens/splashScreen/styles';
import { ActivityIndicator } from 'react-native';
import { BLUE } from '@src/modules/core/constants';

export default function SplashScreen() {
  return (
    <Style.Main>
      <ActivityIndicator size="large" color={BLUE} />
      <Style.Text>Loading</Style.Text>
    </Style.Main>
  );
}
