import { User } from '@src/modules/users/domain/interfaces/User';

export interface UserInitialState {
  currentUser: undefined | User;
  isUserLoading: boolean;
}
