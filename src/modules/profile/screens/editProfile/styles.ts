import {StyleSheet} from 'react-native';
import {
  BLUE,
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
  GRAY,
} from '@src/core/constants';

export const EditProfileStyle = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  top: {
    flex: 3,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'green',
  },
  topImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // margin: 20,
  },
  imageBackground: {
    flex: 1,
    // alignContent: 'center',
    // justifyContent: 'center',
    borderRadius: 50,
  },
  photoDownload: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 35,
    width: 30,
    height: 30,
    opacity: 0.7,
  },

  mid: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  midFirstNameField: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 15,
    flexDirection: 'row',
    // backgroundColor: 'silver',
  },
  midFirstNameText: {
    flex: 2,
    fontSize: FONT_SIZE_MIN,
    fontWeight: 'bold',
  },
  midLastNameField: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    // backgroundColor: 'pink',
  },
  midLastNameText: {
    flex: 2,
    fontSize: FONT_SIZE_MIN,
    fontWeight: 'bold',
  },
  midPhoneField: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 15,
    flexDirection: 'row',
    // backgroundColor: 'silver',
  },
  midPhoneText: {
    flex: 2,
    fontSize: FONT_SIZE_MIN,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 5,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS_BTN,
    marginHorizontal: 10,
    padding: 10,
    fontSize: FONT_SIZE_MIN,
  },
  midBottom: {
    flex: 4,
  },

  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GRAY,
  },
  bottomSaveChanges: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    paddingHorizontal: 20,
    borderRadius: BORDER_RADIUS_BTN,
    backgroundColor: BLUE,
  },
  bottomSaveChangesText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: FONT_SIZE_MID,
  },
});
