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
  },

  main2: {
    flex: 30,
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
    flex: 2,
    alignItems: 'center',
    // marginTop: 10,
    justifyContent: 'center',
  },
  topText: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_MID,
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
    borderRadius: 60,
    borderWidth: 5,
    borderColor: GRAY,
    // backgroundColor: 'blue',
  },
  photoDownloadView: {
    width: 110,
    height: 110,
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
    flex: 14,
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
    paddingLeft: 5,
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

  selected: {
    borderRadius: BORDER_RADIUS_BTN,
    backgroundColor: BLUE,
    padding: 5,
    paddingHorizontal: 10,
  },
  unselected: {
    padding: 5,
    paddingHorizontal: 10,
  },
  genderTextSelect: {
    color: 'white',
  },
  genderTextUnselect: {
    color: 'black',
  },

  midBottom: {
    flex: 5,
  },

  bottom: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: GRAY,
  },
  bottomPaddingTop: {
    flex: 1,
  },
  bottomPaddingBottom: {
    flex: 5,
  },
  bottomSaveChanges: {
    flex: 8,
    justifyContent: 'center',
    // marginBottom: 15,
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
