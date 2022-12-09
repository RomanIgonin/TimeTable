import axios from 'axios';
import {IP_USERS, IP_CURRENT_USER} from '../../core/constants';
import {UserType} from '../store';

class UsersServices {
  // public async getUsersService() {
  //   return axios
  //     .get(IP_USERS)
  //     .then(response => response.data)
  //     .catch(error => console.error('getUsersService: ' + error));
  // }
  public async postUserService(newUser: UserType) {
    return axios
      .post(IP_USERS, newUser)
      .then(response => response.data)
      .catch(error => console.error('postUsersService: ' + error));
  }
  public async postCurrentUserService(currentUser: UserType) {
    return axios
      .post(IP_CURRENT_USER, currentUser)
      .then(response => response.data)
      .catch(error => console.error('postCurrentUsersService: ' + error));
  }
  public async deleteCurrentUserService(currentUser: UserType) {
    return axios
      .delete(IP_CURRENT_USER + '/' + `${currentUser.id}`)
      .then(response => response.data)
      .catch(error => console.error('deleteCurrentUsersService: ' + error));
  }
}

const usersServices = new UsersServices();
export default usersServices;
