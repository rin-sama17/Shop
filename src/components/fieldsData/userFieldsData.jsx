const userFieldsData = (formik) => {
  return [
    {
      md: 3.5,
      name: 'firstname',
      label: 'نام',
      formik,
    },
    {
      md: 3.5,
      name: 'lastname',
      label: 'نام خانوادگی',
      formik,
    },
    {
      md: 5,
      name: 'email',
      label: 'ایمیل',
      formik,
    },
    {
      phone: true,
      name: 'phone',
      formik,
      md: 5,
    },
    {
      md: 5,
      pwd: true,
      formik,
      name: 'password',
    },

    {
      md: 2,
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}
export default userFieldsData
