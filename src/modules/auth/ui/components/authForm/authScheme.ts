import * as yup from 'yup';

export const AuthSchema = yup.object({
  email: yup
    .string()
    .email('Введите корректный email')
    .required('Заполните поле'),
  password: yup
    .string()
    .min(6, 'Минимум 6 символов')
    .max(32, 'Максимум 32 символа')
    .required('Заполните поле'),
});
