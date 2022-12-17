import axios from 'axios';
import {LessonsType} from '@src/core/store/globalTypes';
import {IP_LESSONS, IP_USERS} from '@src/core/constants';
import {useAppSelector} from '@src/hooks';
import {currentUserSelector} from '@src/users/store/selectors';

class LessonsService {
  // public async postLessonService(newLesson: LessonsType) {
  //   return axios
  //     .post(IP_LESSONS, newLesson)
  //     .then(response => response.data)
  //     .catch(error => console.error('postLessonService: ' + error));
  // }
  // public async postDateAndLessonService(newDateAndLesson: LessonsType) {
  //   console.log('in service, begin post');
  //   const CurrentUser = () => {
  //     return useAppSelector(currentUserSelector);
  //   };
  //   const currentUser = CurrentUser();
  //   console.log('current user in service: ' + currentUser);
  //   if (currentUser) {
  //     console.log(IP_USERS + '/' + `${currentUser.id}` + '/lessons');
  //
  //     return axios
  //       .post(
  //         IP_USERS + '/' + `${currentUser.id}` + '/lessons',
  //         newDateAndLesson,
  //       )
  //       .then(response => response.data)
  //       .catch(error => console.error('postDateAndLessonService: ' + error));
  //   }
  // }
}

const lessonsService = new LessonsService();
export default lessonsService;
