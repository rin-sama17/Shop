const premissionFieldsData = (formik) => {
  return [
    {
      md: 5,
      name: 'title',
      label: 'عنوان',
      formik,
    },
    {
      md: 5,
      formik,
      name: 'details',
      label: 'توضیحات',
    },
    {
      md: 2,
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}

export default premissionFieldsData
