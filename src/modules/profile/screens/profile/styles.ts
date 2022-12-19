import {StyleSheet} from 'react-native';
import {
  BLUE,
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
} from '@src/core/constants';

export const ProfileStyle = StyleSheet.create({
  main: {
    flex: 1,
  },

  mainTop: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    flex: 4,
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  TitleText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  edit: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  editImage: {
    // flex: 1,
    width: 40,
    height: 40,
  },

  mainMiddle: {
    flex: 7,
  },
  ImageField: {
    flex: 2,
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: 'grey',
  },
  Image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 100,
    // backgroundColor: 'green',
  },
  DownloadImageField: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DownloadImageText: {
    // fontSize: 12,
  },
  NameField: {
    flex: 2,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  NameText: {
    padding: '5%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  InfoField: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoElement: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'pink',
  },
  infoElementTitle: {
    flex: 1,
    // paddingLeft: 10,
    marginRight: 10,
    alignItems: 'flex-end',
  },
  infoElementTitleText: {
    fontSize: FONT_SIZE_MIN,
    fontWeight: 'bold',
  },
  infoElementTextRight: {
    flex: 2,
    // backgroundColor: 'purple',
  },
  infoBottom: {
    flex: 4,
  },

  mainBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver',
  },
  bottomSignOut: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    paddingHorizontal: 20,
    borderRadius: BORDER_RADIUS_BTN,
    backgroundColor: BLUE,
  },
  bottomSignOutText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: FONT_SIZE_MID,
  },
});
