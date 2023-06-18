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
      label: 'شماره موبایل',
      formik,
      md: 4,
    },
    {
      sm: 12,
      name: 'description',
      formik,
      label: 'توضیحات',
      multiline: true,
      rows: 3,
    },
    {
      md: 10,
      formik,
      label: 'ادرس',
      name: 'address',
    },

    {
      md: 2,
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}

export default agencyFieldsData
