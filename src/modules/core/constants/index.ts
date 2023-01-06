import {useAppSelector} from '@src/hooks';
import {currentUserSelector} from '@src/modules/users/store/selectors';

export const IP_USERS = 'http://192.168.8.112:3002/users';
export const IP_DATES = 'http://192.168.8.112:3002/dates';

export const IP_CURRENT_USER = 'http://192.168.8.112:3002/currentUser';

export const BLUE = '#156ed3';
export const GRAY = '#b9b9b9';
export const VIOLENT_LIGHT = '#bdb3e0';

export const BORDER_RADIUS_BTN = 10;

export const FONT_SIZE_MAX = 25;
export const FONT_SIZE_MID = 20;
export const FONT_SIZE_MIN = 15;

export const MONTHS = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const PRICES = ['500', '600', '700', '800', '900', '1000'];
