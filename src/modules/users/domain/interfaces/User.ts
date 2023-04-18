import { GenderType } from '@src/modules/users/domain/types/GenderType';

export interface User {
  id: string | undefined;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: GenderType;
  phoneNumber: string;
  profileImage: any;
}
