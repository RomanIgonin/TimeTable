import {Text, View} from 'react-native';
import {ProfileStyle} from '@src/modules/profile/screens/profile/styles';

export default function ImageView() {
  // if (currentUser?.profileImage) {
  //   return (
  //     <View>{/*<Image source={require(currentUser.profileImage)} />*/}</View>
  //   );
  // } else {
  return (
    <View style={ProfileStyle.DownloadImageField}>
      <Text style={ProfileStyle.DownloadImageText}>Download</Text>
      <Text style={ProfileStyle.DownloadImageText}>image</Text>
    </View>
  );
  // }
}
