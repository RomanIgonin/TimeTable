import axios from 'axios';
import {URL} from '@src/modules/core/constants';
import {DatesType} from '@src/store/globalInterface';

class LessonsServices {
  // get dates with lessons for the current user
  public async getDates(userId: string | undefined) {
    return axios
      .get(URL + 'dates/' + `${userId}` + '/dates?userId=' + `${userId}`)
      .then(response => response.data)
      .catch(error => console.error('getDatesService: ' + error));
  }
  // patch Date object with new lessons
  public async postLesson(patchDate: DatesType) {
    return axios
      .patch(URL + 'dates/' + `${patchDate.id}`, patchDate)
      .then(response => response.data)
      .catch(error => console.error('postLessonService: ' + error));
  }
  public async postDateAndLesson(newDateAndLesson: DatesType) {
    return axios
      .post(URL + 'dates/', newDateAndLesson)
      .then(response => response.data)
      .catch(error => console.error('postDateAndLessonService: ' + error));
  }
  // toggle Date object without lesson being removed
  public async deleteLesson(patchDate: DatesType) {
    return axios
      .patch(URL + 'dates/' + `${patchDate.id}`, patchDate)
      .then(response => response.data)
      .catch(error => console.error('deleteLessonService: ' + error));
  }
  public async deleteDateAndLesson(patchDate: DatesType) {
    return axios
      .delete(URL + 'dates/' + `${patchDate.id}`)
      .then(response => response.data)
      .catch(error => console.error('deleteDateAndLessonService: ' + error));
  }
}

const lessonsServices = new LessonsServices();
export default lessonsServices;
