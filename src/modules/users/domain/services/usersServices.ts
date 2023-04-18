import axios from 'axios';
import { URL } from '@src/constants';
import { User } from '@src/store/globalInterface';

class UsersServices {
  public async getUser(id: string) {
    return axios
      .get(URL + 'users/' + `${id}`)
      .then(response => response.data)
      .catch(error => console.error('getUser: ' + error));
  }
  public async postUser(newUser: User) {
    return axios
      .post(URL + 'users/', newUser)
      .then(response => response.data)
      .catch(error => console.error('postUsers: ' + error));
  }
  public async patchUser(currentUser: User) {
    return axios
      .patch(URL + 'users/' + `${currentUser.id}`, currentUser)
      .then(response => response.data)
      .catch(error => console.error('patchUser: ' + error));
  }
  public async deleteUser(currentUserId: string) {
    return axios
      .delete(URL + 'users/' + `${currentUserId}`)
      .then(response => response.data)
      .catch(error => console.error('deleteUser: ' + error));
  }
}

const usersServices = new UsersServices();
export default usersServices;
