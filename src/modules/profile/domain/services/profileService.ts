import { User } from '@src/modules/users/domain/interfaces/User';

class ProfileService {
  public getName(currentUser: User | undefined) {
    if (currentUser?.firstName || currentUser?.lastName) {
      return currentUser?.firstName + ' ' + currentUser?.lastName;
    } else {
      return 'No name';
    }
  }

  public createProfileInfoList(currentUser: User | undefined) {
    return [
      { title: 'Phone number:', body: currentUser?.phoneNumber, key: '1' },
      { title: 'Gender:', body: currentUser?.gender, key: '2' },
    ];
  }
}

const profileService = new ProfileService();
export default profileService;
