const categoryFieldsData = (formik) => {
  return [
    {
      formik,
      label: 'نام دسته بندی',
      name: 'name',
    },
    {
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}

export default categoryFieldsData
