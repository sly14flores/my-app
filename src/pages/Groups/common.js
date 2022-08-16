import * as Yup from 'yup'

export const initialValues = {
  record: {
    name: '',
    description: '',
  }
}

export const validationSchema = Yup.object({
  record: Yup.object({
    name: Yup.string().required('Name is required'),
    description: Yup.nullable().string(),
  })
})