const agencyFieldsData = (formik) => {
  return [
    {
      md: 3,
      formik,
      label: 'نام',
      name: 'name',
    },
    {
      md: 5,
      formik,
      label: 'ایمیل',
      name: 'email',
    },

    {
      phone: true,
      name: 'phone',
      formik,
      md: 4,
    },
    {
      formik,
      label: 'ادرس',
      name: 'address',
    },

    {
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}

export default agencyFieldsData
