import { Card, Stack, Skeleton } from '@mui/material'
const CartProductLoading = () => {
  return (
    <Card sx={{ mb: 2, p: 2 }}>
      <Stack justifyContent="space-between" direction="row">
        <Stack direction="row">
          <Skeleton
            sx={{ height: 60, width: 60 }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" width={60} height={30} sx={{ ml: 2 }} />
        </Stack>
        <Skeleton animation="wave" width="20%" height={60} />
      </Stack>
    </Card>
  )
}

export default CartProductLoading
