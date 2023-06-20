const tagFieldData = (formik) => {
  return [
    {
      md: 9,
      name: 'name',
      label: 'عنوان',
      formik,
    },

    {
      md: 3,
      submit: true,
      customLabel: 'ثبت تغییرات',
    },
  ]
}

export default tagFieldData
