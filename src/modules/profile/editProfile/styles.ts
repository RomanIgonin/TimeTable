import { StyleSheet } from 'react-native';
import {
  BLUE,
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
  GRAY,
} from '@src/constants/index';

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
  },

  top: {
    flex: 6,
  },
  topTextView: {
    flex: 2,
    alignItems: 'center',
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
  },
  imageBackground: {
    flex: 1,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: GRAY,
  },
  photoDownloadView: {
    width: 110,
    height: 110,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: GRAY,
  },
  photoDownload: {
    alignSelf: 'center',
    width: 30,
    height: 30,
    opacity: 0.7,
  },

  mid: {
    flex: 14,
    margin: 10,
  },
  midTitleField: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    paddingLeft: 5,
    flexDirection: 'row',
  },
  midTitleTextField: {
    flex: 2,
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
