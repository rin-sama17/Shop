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
      customLabel: 'ثبت موقت',
    },
  ]
}

export default tagFieldData
