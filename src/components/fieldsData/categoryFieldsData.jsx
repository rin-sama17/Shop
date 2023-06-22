const categoryFieldsData = (formik) => {
  return [
    {
      sm: 6,
      formik,
      label: 'نام دسته بندی',
      name: 'name',
      addCategory: true,
    },
    {
      sm: 6,
      formik,
      category: true,
      categoryParents: true,
      name: 'category_id',
      customLabel: 'دسته بندی والد (برای ساخت زیرمجموعه)',
    },
    {
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}

export default categoryFieldsData
