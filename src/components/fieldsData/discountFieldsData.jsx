const discountFieldsData = (formik) => {
  return [
    {
      formik,
      label: 'نام',
      name: 'name',
      sm: 7,
    },
    {
      formik,
      label: 'تخفیف(به درصد)',
      name: 'discount',
      type: 'number',
      sm: 5,
      helperText: formik.errors.discount ? formik.errors.discount : null,
    },
    {
      sm: 7,
      category: true,
      formik,
      name: 'category_id',
    },
    {
      sm: 5,
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}
export default discountFieldsData
