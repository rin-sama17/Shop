const discountFieldsData = (formik) => {
  return [
    {
      formik,
      label: 'نام',
      name: 'name',
      md: 7,
    },

    {
      formik,
      label: 'تخفیف(به درصد)',
      name: 'discount',
      type: 'number',
      md: 5,
      helperText: formik.errors.discount ? formik.errors.discount : null,
    },
  ]
}
export default discountFieldsData
