import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Card } from '@mui/material'
import { CustomDivider, CustomLoading } from '../../common'
import { useContext } from 'react'
import MainContext from '../../../context'
const ProductComments = () => {
  const { loading, productComments } = useContext(MainContext)
  console.log(productComments)
  return (
    <>
      {loading ? null : <CustomDivider label="کامنت ها" />}
      {productComments &&
        productComments.map((comment, index) => (
          <Card sx={{ display: 'flex', p: 4, mb: 3 }} key={index}>
            <Grid container sx={{ width: 1 }}>
              <Grid
                xs={12}
                md={1}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                {/* user profile */}
                {/* <CustomLoading
                  loading={loading}
                  variant="circular"
                  width={60}
                  height={60}
                >
                  <Avatar
                    src={product.images[0]}
                    sx={{ width: 60, height: 60, mb: 2 }}
                  >
                    {' '}
                    {comment.user.username}
                  </Avatar>
                </CustomLoading> */}
              </Grid>
              <Grid
                xs={12}
                md={10}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                  px: 2,
                }}
              >
                {/* user name */}

                <CustomLoading loading={loading} variant="text" width={100}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {comment.user.username}
                  </Typography>
                </CustomLoading>

                <CustomLoading loading={loading} variant="text">
                  <Typography variant="body1" color="text.primary">
                    {comment.body}
                  </Typography>
                </CustomLoading>
              </Grid>
              <Grid xs={12} md={1}>
                {/* date of comment */}
                <CustomLoading loading={loading} variant="text">
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    textAlign="center"
                  >
                    {1402 / 1 / 1}
                  </Typography>
                </CustomLoading>
              </Grid>
            </Grid>
          </Card>
        ))}
    </>
  )
}
export default ProductComments
