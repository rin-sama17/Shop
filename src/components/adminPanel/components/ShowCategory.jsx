import { useSelector } from 'react-redux'
import { selectCategoryById } from '../../../reducers/categorySlice'

export const showCategory = (params) => {
  const category = useSelector((state) =>
    selectCategoryById(state, params.value),
  )
  return category.name
}
