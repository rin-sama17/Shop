const headerFieldsData = (formik, isEdit) => {
  return [
    {
      sm: 6,
      name: 'name',
      formik,
      label: 'نام',
    },
    {
      sm: 6,
      name: 'url',
      formik,
      label: 'لینک',
    },
    {
      sm: isEdit ? 6 : 12,
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}
export default headerFieldsData
