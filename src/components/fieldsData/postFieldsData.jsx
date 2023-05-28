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
      name: 'category_id',
      formik,
    },
    {
      sm: 12,
      name: 'tags',
      formik,
      label: 'برچسب ها',
      helperText: 'برچسب ها را با / از هم جدا کنید',
      multiline: true,
    },
    {
      sm: 12,
      name: 'introduction',
      formik,
      label: 'توضیحات',
      multiline: true,
      rows: 3,
    },
    { sm: 12, formik, name: 'paragraphs', textEditor: true },
    {
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}
export default postFieldsData
