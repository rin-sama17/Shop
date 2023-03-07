const sliderFieldsData = (formik) => {
  return [
    {
      name: 'title',
      formik,
      label: 'عنوان',
      multiline: true,
      rows: 6,
    },

    {
      name: 'link',
      formik,

      label: 'لینک',
    },
  ]
}
export default sliderFieldsData
