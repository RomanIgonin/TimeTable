import {Image, Text, View} from 'react-native';
import {ProfileStyle} from '@src/modules/profile/screens/profile/styles';

export default function ImageView() {
  // if (currentUser?.profileImage) {
  //   return (
  //     <View>{/*<Image source={require(currentUser.profileImage)} />*/}</View>
  //   );
  // } else {
  return (
    <View style={ProfileStyle.Image}>
      <View style={ProfileStyle.DownloadImageField}>
        <Image
          style={ProfileStyle.photoDownload}
          source={require('@src/assets/icons/photoDownload.png')}
        />
      </View>
    </View>
  );
  // }
}
