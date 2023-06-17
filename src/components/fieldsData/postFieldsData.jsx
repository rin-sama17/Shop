import { useTranslation } from 'react-i18next'

const postFieldsData = (formik) => {
  const { t } = useTranslation()
  return [
    {
      sm: 8,
      name: 'name',
      formik,
      label: 'عنوان',
    },
    {
      md: 4,
      category: true,
      name: 'category_id',
      formik,
    },
    {
      sm: 12,
      name: 'tags',
      formik,
      selectTag: true,
    },
    {
      sm: 12,
      name: 'summary',
      formik,
      label: 'توضیحات',
      multiline: true,
      rows: 3,
    },
    { sm: 12, formik, name: 'description', textEditor: true },
    {
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}
export default postFieldsData
