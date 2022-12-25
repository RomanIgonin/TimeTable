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
    backgroundColor: 'white',
    margin: 15,
    borderRadius: BORDER_RADIUS_BTN,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 7,
    shadowOpacity: 0.2,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  top: {
    flex: 6,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'green',
  },
  topTextView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  topText: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_MID,
  },
  topImage: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // margin: 20,
  },
  imageBackground: {
    flex: 1,
    // alignContent: 'center',
    // justifyContent: 'center',
    borderRadius: 60,
    borderWidth: 5,
    borderColor: GRAY,
    // backgroundColor: 'blue',
  },
  photoDownloadView: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: GRAY,
  },
  photoDownload: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
    // marginVertical: 35,
    width: 30,
    height: 30,
    opacity: 0.7,
  },

  mid: {
    flex: 13,
    margin: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'blue',
  },
  midTitleField: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    margin: 5,
    paddingLeft: 15,
    flexDirection: 'row',
    // backgroundColor: 'silver',
  },
  midTitleTextField: {
    flex: 2,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  midTitleText: {
    justifyContent: 'center',
    fontSize: FONT_SIZE_MIN,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 6,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS_BTN,
    padding: 7,
    paddingLeft: 10,
    fontSize: FONT_SIZE_MIN,
  },
  midBottom: {
    flex: 5,
  },

  bottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: GRAY,
  },
  bottomSaveChanges: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 15,
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
