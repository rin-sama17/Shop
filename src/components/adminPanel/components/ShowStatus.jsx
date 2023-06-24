import { Done, Close } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import ChangeStatus from './ChangeStatus'

export const showStatus = (params, editItem) => {
  const item = params.row
  let content
  if (item.status == 1) {
    content = <Done />
  } else {
    content = <Close />
  }
  return [
    <ChangeStatus item={item} editItem={editItem} />,
    <GridActionsCellItem icon={content} />,
  ]
}
