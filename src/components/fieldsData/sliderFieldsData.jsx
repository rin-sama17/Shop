const sliderFieldsData = (formik, type) => {
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
      sm: 12,
      name: 'description',
      formik,
      disabled: Boolean(type === 0),
      helperText:
        type === 0 ? 'تنها در اسلایدر اینه ای قابل استفاده است' : null,

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
