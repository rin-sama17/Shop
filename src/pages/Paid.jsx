import { Typography } from '@mui/material'
import { CustomMassage } from '../components/common'
import { useParams } from 'react-router-dom'
const Paid = () => {
  const { cartId } = useParams()
  return (
    <CustomMassage
      text={
        <>
          <Typography variant="h4" sx={{ mb: 3, color: 'success.main' }}>
            سفارش شما ثبت شد
          </Typography>
          <Typography variant="body1" color="text.secondary">
            کد پیگیری:
            <Typography variant="body1" color="text.primary">
              {cartId}
            </Typography>
          </Typography>
        </>
      }
      btnLabel="بازگشت به خانه"
      to="/"
    />
  )
}

export default Paid
