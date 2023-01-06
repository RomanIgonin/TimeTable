import axios from 'axios';
import {IP_USERS, IP_DATES} from '@src/modules/core/constants';
import {DatesType} from '@src/store/globalTypes';

class LessonsServices {
  // get dates with lessons for the current user
  public async getDatesService(userId: string | undefined) {
    return axios
      .get(IP_USERS + `/${userId}` + '/dates?userId=' + `${userId}`)
      .then(response => response.data)
      .catch(error => console.error('getDatesService: ' + error));
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
}

const lessonsServices = new LessonsServices();
export default lessonsServices;
