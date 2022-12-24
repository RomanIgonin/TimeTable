import {StyleSheet} from 'react-native';
import {
  BLUE,
  BORDER_RADIUS_BTN,
  FONT_SIZE_MAX,
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
    fontSize: FONT_SIZE_MAX,
  },
  edit: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  editImage: {
    // flex: 1,
    width: 30,
    height: 30,
  },

  mainMiddle: {
    flex: 8,
  },
  ImageField: {
    flex: 2,
    flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: 'grey',
  },
  ImageProfile: {
    flex: 1,
    margin: 20,
  },
  imageProfile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'silver',
  },
  noImageProfile: {
    width: 35,
    height: 35,
    // opacity: 0.5,
  },
  NameField: {
    flex: 2,
    justifyContent: 'center',
    // backgroundColor: 'red',
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
    // backgroundColor: 'pink',
  },
  infoElementTitle: {
    flex: 2,
    // paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-end',
    // backgroundColor: 'grey',
  },
  infoElementTitleText: {
    fontSize: FONT_SIZE_MIN,
    fontWeight: 'bold',
  },
  infoElementTextRight: {
    flex: 3,
    // backgroundColor: 'silver',
  },
  infoBottom: {
    flex: 6,
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
