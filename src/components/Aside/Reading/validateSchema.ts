import * as Yup from 'yup';

export const validateReadingPage = (totalPages: number) =>
  Yup.object().shape({
    page: Yup.number()
      .required()
      .max(totalPages, `The book has only ${totalPages} pages.`),
  });
