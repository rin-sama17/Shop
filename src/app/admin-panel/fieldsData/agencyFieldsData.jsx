const agencyFieldsData = (formik) => {
  return [
    {
      md: 3,
      formik,
      label: 'نام',
      name: 'name',
    },
    {
      md: 6,
      formik,
      label: 'ایمیل',
      name: 'email',
    },

    {
      md: 3,
      formik,
      label: 'شماره موبایل',
      name: 'phone',
    },
    {
      formik,
      label: 'ادرس',
      name: 'address',
    },
    {
      multiline: true,
      rows: 3,
      formik,
      label: 'توضیحات',
      name: 'discription',
    },

    {
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}

export default agencyFieldsData
