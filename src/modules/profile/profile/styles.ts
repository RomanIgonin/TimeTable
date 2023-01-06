import {StyleSheet} from 'react-native';
import {
  BLUE,
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
  GRAY,
} from '@src/modules/core/constants';

export const ProfileStyle = StyleSheet.create({
  main: {
    flex: 1,
  },

  upTop: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upTopText: {
    fontSize: FONT_SIZE_MID,
    fontWeight: 'bold',
  },
  mainTop: {
    flex: 10,
    flexDirection: 'row',
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
  photoAndName: {
    flex: 6,
  },
  leftIndent: {
    flex: 1,
  },
  ImageProfile: {
    flex: 3,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageProfile: {
    width: 100,
    height: 100,
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
  },
  NameField: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NameText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  emailText: {
    marginVertical: 5,
  },

  edit: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 15,
  },
  editImage: {
    width: 25,
    height: 25,
  },

  mainMiddle: {
    flex: 18,
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
    padding: 12,
    borderBottomWidth: 0.5,
    borderColor: GRAY,
  },
  infoElementTitle: {
    flex: 2,
    paddingRight: 10,
    alignItems: 'flex-start',
  },
  infoElementTitleText: {
    fontSize: FONT_SIZE_MIN,
    fontWeight: 'bold',
  },
  infoElementTextRight: {
    flex: 3,
  },
  infoBottom: {
    flex: 6,
  },

  mainBottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
