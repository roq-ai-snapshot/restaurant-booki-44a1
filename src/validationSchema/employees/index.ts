import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  salary: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  restaurant_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
