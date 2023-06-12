const sliderFieldsData = (formik) => {
  return [
    {
      sm: 6,
      name: 'name',
      formik,
      label: 'عنوان',
    },
    {
      sm: 6,
      name: 'url',
      formik,
      label: 'لینک',
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
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}
export default sliderFieldsData
