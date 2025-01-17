import * as Yup from 'yup';

export const emailRegexp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

export const validateSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, 'Enter a valid Email*')
    .required('Enter a valid Email*'),
  password: Yup.string().min(8).required('Enter a valid Password*'),
});

export type ValidateLoginType = Yup.InferType<typeof validateSchemaLogin>;
