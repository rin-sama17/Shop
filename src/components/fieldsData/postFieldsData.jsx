import { useTranslation } from 'react-i18next'

const postFieldsData = (formik, isEdit) => {
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
      display: !isEdit ? 'none' : null,
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
  ]
}
export default postFieldsData
