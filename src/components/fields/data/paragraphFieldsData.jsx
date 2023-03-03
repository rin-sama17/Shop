export const paragraphFieldsData = (formik) => {
  return [
    {
      md: 4,
      name: 'title',
      formik,
      label: 'عنوان',
      sx: { mb: 2 },
    },

    {
      name: 'body',
      formik,
      multiline: true,
      rows: 6,
      label: 'توضیحات',
    },
  ]
}
