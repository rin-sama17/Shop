const commentFieldData = (formik) => {
  return [
    {
      md: 6,
      name: 'name',
      formik,
      label: 'نام شما (اختیاری)',
    },

    {
      name: 'body',
      formik,
      multiline: true,
      rows: 6,
      label: 'نظر شما',
    },
    {
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}
export default commentFieldData
