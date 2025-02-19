import * as Yup from 'yup';

export const validateBody = Yup.object().shape({
  title: Yup.string().required('Specify a book name'),
  author: Yup.string().required('Specify the author of the book'),
  totalPages: Yup.number()
    .min(1, 'The total pages must be greater than or equal to 1.')
    .required('Specify the number of pages'),
});

export type TypeValidateBody = Yup.InferType<typeof validateBody>;
