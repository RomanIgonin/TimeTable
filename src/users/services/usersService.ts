import axios from 'axios';
import {IP_USERS} from '../../core/constants';
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
}

const usersServices = new UsersServices();
export default usersServices;
