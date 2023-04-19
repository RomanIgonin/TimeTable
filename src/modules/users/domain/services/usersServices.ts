import axios from 'axios';
import Config from 'react-native-config';
import { User } from '@src/modules/users/domain/interfaces/User';

class UsersServices {
  public async getUser(id: string | undefined) {
    return axios
      .get(Config.API_URL + 'users/' + `${id}`)
      .then(response => response.data)
      .catch(error => console.error('getUser: ' + error));
  }
  public async postUser(newUser: User) {
    return axios
      .post(Config.API_URL + 'users/', newUser)
      .then(response => response.data)
      .catch(error => console.error('postUsers: ' + error));
  }
  public async patchUser(currentUser: User) {
    return axios
      .patch(Config.API_URL + 'users/' + `${currentUser.id}`, currentUser)
      .then(response => response.data)
      .catch(error => console.error('patchUser: ' + error));
  }
  public async deleteUser(currentUserId: string) {
    return axios
      .delete(Config.API_URL + 'users/' + `${currentUserId}`)
      .then(response => response.data)
      .catch(error => console.error('deleteUser: ' + error));
  }
}

const usersServices = new UsersServices();
export default usersServices;
