import * as Yup from 'yup';
import { emailRegexp } from '../Login/validateSchema';

export const validateRegisterSchema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  email: Yup.string()
    .matches(emailRegexp, 'Enter a valid Email*')
    .required('Enter a valid Email*'),
  password: Yup.string().min(8).required('Enter a valid Password*'),
});
export type TypeValidateRegister = Yup.InferType<typeof validateRegisterSchema>;
