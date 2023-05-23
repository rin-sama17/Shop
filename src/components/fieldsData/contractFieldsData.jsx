const contractFieldsData = (formik) => {
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
      label: 'ادرس',
      name: 'address',
    },
    {
      md: 3,
      formik,
      label: 'شماره موبایل',
      name: 'phone',
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

export default contractFieldsData
