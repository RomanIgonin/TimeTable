import axios from 'axios';
import {IP_USERS, IP_DATES} from '../../core/constants';
import {UserType, DatesType} from '@src/core/store/globalTypes';

class UsersServices {
  public async getUserService(id: string) {
    return axios
      .get(IP_USERS + '/' + `${id}`)
      .then(response => response.data)
      .catch(error => console.error('getUserService: ' + error));
  }
  // get dates with lessons for the current user
  public async getDatesService(userId: string | undefined) {
    return axios
      .get(IP_USERS + `/${userId}` + '/dates?userId=' + `${userId}`)
      .then(response => response.data)
      .catch(error => console.error('getDatesService: ' + error));
  }
  public async postUserService(newUser: UserType) {
    return axios
      .post(IP_USERS, newUser)
      .then(response => response.data)
      .catch(error => console.error('postUsersService: ' + error));
  }
  // patch Date object with new lessons
  public async postLessonService(patchDate: DatesType) {
    return axios
      .patch(IP_DATES + `/${patchDate.id}`, patchDate)
      .then(response => response.data)
      .catch(error => console.error('postLessonService: ' + error));
  }
  public async postDateAndLessonService(newDateAndLesson: DatesType) {
    return axios
      .post(IP_DATES, newDateAndLesson)
      .then(response => response.data)
      .catch(error => console.error('postDateAndLessonService: ' + error));
  }
  // toggle Date object without lesson being removed
  public async deleteLessonService(patchDate: DatesType) {
    return axios
      .patch(IP_DATES + `/${patchDate.id}`, patchDate)
      .then(response => response.data)
      .catch(error => console.error('deleteLessonService: ' + error));
  }
  public async deleteDateAndLessonService(patchDate: DatesType) {
    return axios
      .delete(IP_DATES + `/${patchDate.id}`)
      .then(response => response.data)
      .catch(error => console.error('deleteDateAndLessonService: ' + error));
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
  // public async postCurrentUserService(currentUser: UserType) {
  //   return axios
  //     .post(IP_CURRENT_USER, currentUser)
  //     .then(response => response.data)
  //     .catch(error => console.error('postCurrentUsersService: ' + error));
  // }
  // public async deleteCurrentUserService(currentUser: UserType) {
  //   return axios
  //     .delete(IP_CURRENT_USER + '/' + `${currentUser.id}`)
  //     .then(response => {
  //       response.data;
  //       console.log(response.data);
  //       console.log('current user DELETE');
  //     })
  //     .catch(error => console.error('deleteCurrentUsersService: ' + error));
  // }
}

const usersServices = new UsersServices();
export default usersServices;
