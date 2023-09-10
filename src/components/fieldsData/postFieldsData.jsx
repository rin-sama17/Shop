const postFieldsData = (formik, isEdit) => {
  return [
    {
      xs: 12,
      sm: 8,
      name: 'name',
      formik,
      label: 'عنوان',
    },
    {
      sm: 4,
      category: true,
      name: 'category_id',
      formik,
    },
    {
      xs: 12,
      name: 'tags',
      formik,
      display: !isEdit ? 'none' : null,
      selectTag: true,
    },
    {
      xs: 12,
      name: 'summary',
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
export default postFieldsData
