const postFieldsData = (formik) => {
  return [
    {
      sm: 8,
      name: 'heading',
      formik,
      label: 'عنوان',
    },
    {
      md: 4,
      category: true,
      name: 'category',
      formik,
    },
    {
      sm: 12,
      name: 'tags',
      formik,
      label: 'برچسب ها',
      helperText: 'برچسب ها را با / از هم جدا کنید',
      type: 'number',
      multiline: true,
    },
  ]
}
export default postFieldsData
