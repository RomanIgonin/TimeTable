import axios from 'axios';
import {IP_USERS} from '../../core/constants';
import {UserType} from '@src/store/globalTypes';

class UsersServices {
  public async getUserService(id: string) {
    return axios
      .get(IP_USERS + '/' + `${id}`)
      .then(response => response.data)
      .catch(error => console.error('getUserService: ' + error));
  }
  public async postUserService(newUser: UserType) {
    return axios
      .post(IP_USERS, newUser)
      .then(response => response.data)
      .catch(error => console.error('postUsersService: ' + error));
  }
  public async patchUserService(currentUser: UserType) {
    // console.log('4: ' + currentUser.profileImage);
    return axios
      .patch(IP_USERS + `/${currentUser.id}`, currentUser)
      .then(response => response.data)
      .catch(error => console.error('patchUserService: ' + error));
  }
  public async deleteUserService(currentUserId: string) {
    console.log('5: ' + JSON.stringify(currentUserId));
    return axios
      .delete(IP_USERS + `/${currentUserId}`)
      .then(response => response.data)
      .catch(error => console.error('deleteUserService: ' + error));
  }
}

const usersServices = new UsersServices();
export default usersServices;
