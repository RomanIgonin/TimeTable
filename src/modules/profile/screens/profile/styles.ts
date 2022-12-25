import {StyleSheet} from 'react-native';
import {
  BLUE,
  BORDER_RADIUS_BTN,
  FONT_SIZE_MAX,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
  GRAY,
} from '@src/core/constants';

export const ProfileStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },

  upTop: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: GRAY,
  },
  upTopText: {
    fontSize: FONT_SIZE_MID,
    fontWeight: 'bold',
  },
  mainTop: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor: 'white',
    // alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: BORDER_RADIUS_BTN,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 7,
    shadowOpacity: 0.2,
    // justifyContent: 'center',
  },
  photoAndName: {
    flex: 6,
    // backgroundColor: 'green',
    // alignItems: 'center',
  },
  leftIndent: {
    flex: 1,
  },
  ImageProfile: {
    flex: 3,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },
  imageProfile: {
    // flex: 1,
    // width: '40%',
    // height: '100%',
    width: 100,
    height: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 60,
    borderWidth: 5,
    borderColor: GRAY,
  },
  noImageProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: GRAY,
    // opacity: 0.5,
  },
  NameField: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  NameText: {
    // padding: '5%',
    fontWeight: 'bold',
    fontSize: 20,
    // backgroundColor: 'red',
  },
  emailText: {
    // backgroundColor: 'red',
    marginVertical: 5,
  },

  edit: {
    flex: 1,
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 15,
    // paddingRight: 10,
    // backgroundColor: 'blue',
  },
  editImage: {
    // flex: 1,
    width: 25,
    height: 25,
  },

  mainMiddle: {
    flex: 11,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: BORDER_RADIUS_BTN,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 7,
    shadowOpacity: 0.2,
  },
  infoElement: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: GRAY,
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'silver',
  },
  bottomSignOut: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10,
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
