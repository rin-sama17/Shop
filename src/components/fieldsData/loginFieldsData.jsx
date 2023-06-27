export const loginFieldsData = (formik) => {
  return [
    {
      phone: true,
      name: 'phone',

      formik,
      md: 6,
    },
    {
      md: 6,
      pwd: true,
      formik,
      name: 'password',
    },
    {
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}
