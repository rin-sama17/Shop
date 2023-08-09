import { useDispatch } from 'react-redux'

const selectAll = ({ allItems, values, setFnc, clearFunc }) => {
  const dispatch = useDispatch()
  const handleCheckAll = (e) => {
    if (e.target.checked === true) {
      dispatch(setFnc(allItems))
    } else {
      dispatch(clearFunc())
    }
  }
  return {
    xs: 12,
    checkbox: true,
    checked: allItems.length == values.length,
    customLabel: 'انتخاب همه',
    onChange: (e) => handleCheckAll(e),
  }
}

export default selectAll
