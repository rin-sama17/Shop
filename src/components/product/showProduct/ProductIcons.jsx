import {
  TurnedInNot,
  StarBorder,
  AddShoppingCart,
  ReportGmailerrorred,
  // icon button active
  // WarningAmber, Star, TurnedIn ,Report
  ShoppingCart,
} from '@mui/icons-material'
import { Box } from '@mui/material'
import MainContext from '../../../context'
import { useContext } from 'react'
import { CustomLoading, CustomIconButton } from '../../common'
const ProductIcons = () => {
  return (
    <Box sx={{ mb: 1, display: 'flex' }}>
      <CustomIconButton
        title="امتیاز دادن"
        color="warning"
        icon={<StarBorder />}
      />

      <CustomIconButton
        title="علامت گذاری"
        color="info"
        icon={<TurnedInNot />}
      />
    </Box>
  )
}
export default ProductIcons
