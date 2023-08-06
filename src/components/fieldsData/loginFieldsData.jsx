export const loginFieldsData = (formik) => {
  return [
    {
      phone: true,
      async: true,
      name: 'phone',

      formik,
      md: 6,
    },
    {
      md: 6,
      pwd: true,
      async: true,

      formik,
      name: 'password',
    },
    {
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}
