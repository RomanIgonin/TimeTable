import axios from 'axios';
import Config from 'react-native-config';
import { Dates } from '@src/modules/lessons/domain/interfaces/Dates';

class LessonsServices {
  public async getDates(userId: string | undefined) {
    return axios
      .get(
        Config.API_URL +
          'dates/' +
          `${userId}` +
          '/dates?userId=' +
          `${userId}`,
      )
      .then(response => response.data)
      .catch(error => console.error('getDatesService: ' + error));
  }
  public async postLesson(patchDate: Dates) {
    return axios
      .patch(Config.API_URL + 'dates/' + `${patchDate.id}`, patchDate)
      .then(response => response.data)
      .catch(error => console.error('postLessonService: ' + error));
  }
  public async postDateAndLesson(newDateAndLesson: Dates) {
    return axios
      .post(Config.API_URL + 'dates/', newDateAndLesson)
      .then(response => response.data)
      .catch(error => console.error('postDateAndLessonService: ' + error));
  }
  public async deleteLesson(patchDate: Dates) {
    return axios
      .patch(Config.API_URL + 'dates/' + `${patchDate.id}`, patchDate)
      .then(response => response.data)
      .catch(error => console.error('deleteLessonService: ' + error));
  }
  public async deleteDateAndLesson(patchDate: Dates) {
    return axios
      .delete(Config.API_URL + 'dates/' + `${patchDate.id}`)
      .then(response => response.data)
      .catch(error => console.error('deleteDateAndLessonService: ' + error));
  }
  // Даты принадлежащие данному юзеру удаляются сами, как?
  // public async deleteAllDatesForUserId(userId: string) {
  //   return axios
  //     .delete(Config.API_URL + 'dates?userId=' + `${userId}`)
  //     .then(response => response.data)
  //     .catch(error => console.error('deleteAllDatesForUserId: ' + error));
  // }
}

const lessonsServices = new LessonsServices();
export default lessonsServices;
