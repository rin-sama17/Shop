import {
  Box,
  Typography,
  ImageListItem,
  CardActionArea,
  Card,
  Paper,
} from '@mui/material'
import Slider from 'react-slick'
import Grid from '@mui/material/Unstable_Grid2'
import { category01, category02, category03, category04 } from '../../assets'
const HomeCategorys = () => {
  const categorys = [
    {
      name: 'صنایع دستی',
      photo: category01,
    },
    {
      name: 'تابلو فرش دستبافت',
      photo: category02,
    },
    {
      name: 'فرش ماشینی',
      photo: category03,
    },
    {
      name: 'فرش دستبافت',
      photo: category04,
    },
  ]

  return (
    <>
      <Typography variant="h6" sx={{ color: 'gray', my: 3 }}>
        دسته بندی
      </Typography>
      <Grid container spacing={2} sx={{ width: 1, mb: 10 }}>
        {categorys.length > 0 &&
          categorys.map((slide, index) => (
            <Grid
              xs={12}
              md={3}
              component="div"
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              {' '}
              <CardActionArea>
                <Paper elevation={8} sx={{ p: 1 }}>
                  <img
                    src={slide.photo}
                    srcSet={slide.photo}
                    alt=""
                    style={{ width: '250px', height: '250px' }}
                  />

                  <Typography variant="h6" sx={{ color: 'gray', my: 2 }}>
                    {slide.name}
                  </Typography>
                </Paper>
              </CardActionArea>
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default HomeCategorys
