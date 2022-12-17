import {StyleSheet} from 'react-native';

export const ProfileStyle = StyleSheet.create({
  main: {
    flex: 1,
  },

  mainTop: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleText: {
    fontWeight: 'bold',
    fontSize: 30,
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
    backgroundColor: 'green',
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
  },

  mainBottom: {
    flex: 1,
    backgroundColor: 'blue',
  },
  SignOut: {},
});
