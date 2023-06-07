const userFieldsData = (formik) => {
  return [
    {
      md: 5,
      name: 'name',
      label: 'عنوان',
      formik,
    },
    {
      md: 5,
      formik,
      name: 'description',
      label: 'توضیحات',
    },
    {
      md: 2,
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}
export default userFieldsData
