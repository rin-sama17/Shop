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
  const { loading } = useContext(MainContext)
  return (
    <Box sx={{ mb: 1, display: 'flex' }}>
      <CustomLoading
        loading={loading}
        height="30px"
        width="30px"
        variant="circular"
        sx={{ mr: 1 }}
      >
        <CustomIconButton
          title="امتیاز دادن"
          color="warning"
          icon={<StarBorder />}
        />
      </CustomLoading>

      <CustomLoading
        loading={loading}
        height="30px"
        width="30px"
        variant="circular"
        sx={{ mr: 1 }}
      >
        <CustomIconButton
          title="علامت گذاری"
          color="info"
          icon={<TurnedInNot />}
        />
      </CustomLoading>

      <CustomLoading
        loading={loading}
        height="30px"
        width="30px"
        variant="circular"
        sx={{ mr: 1 }}
      >
        <CustomIconButton
          title="افزودن به سبد خرید"
          color="secondary"
          icon={<AddShoppingCart />}
        />
      </CustomLoading>
    </Box>
  )
}
export default ProductIcons
