import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material'
import { CustomLoading } from '../common'
import Grid from '@mui/material/Unstable_Grid2'
import { Link as RouterLink } from 'react-router-dom'
import { useContext } from 'react'
import MainContext from '../../context'
import { ToRial } from '../common'

const Product = ({ product, loading, maxWidth, ...props }) => {
  // const { ToRial } = useContext(MainContext)
  return (
    <Grid
      xs={12}
      sx={{ display: 'flex', justifyContent: 'center', mb: 2, width: 1 }}
      {...props}
    >
      <Card sx={{ maxWidth: maxWidth }}>
        <CardActionArea component={RouterLink} to={`/product/${product.id}`}>
          <CustomLoading
            loading={loading}
            height={maxWidth}
            width={maxWidth}
            variant="rectangular"
          >
            <CardMedia
              component="img"
              sx={{ height: 240, width: 240 }}
              alt={product.name}
              image={product.thumbnail}
            />
          </CustomLoading>

          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <CustomLoading
                loading={loading}
                height={30}
                width="30%"
                style={{ marginBottom: 6 }}
              >
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  textAlign="left"
                  gutterBottom
                >
                  {product.name}
                </Typography>
              </CustomLoading>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <CustomLoading
                loading={loading}
                height={20}
                width="50%"
                style={{ marginBottom: 6 }}
              >
                {' '}
                <ToRial price={product.price} gutterBottom />
              </CustomLoading>

              <CustomLoading
                loading={loading}
                height="30px"
                width="40px"
                style={{ marginBottom: 6 }}
              >
                {' '}
                <Typography
                  color="secondary"
                  variant="body1"
                  textAlign="left"
                  gutterBottom
                >
                  تومان{' '}
                </Typography>
              </CustomLoading>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
export default Product
