const checkoutFieldsData = (formik) => {
  return [
    {
      md: 6,
      formik,
      name: 'fullName',
      label: 'نام و نام خانوادگی',
    },

    {
      formik,
      name: 'phone',
      phone: true,
      md: 6,
    },
    {
      formik,
      name: 'address',
      label: 'ادرس',
      multiline: true,
      rows: 6,
    },
  ]
}

export default checkoutFieldsData
