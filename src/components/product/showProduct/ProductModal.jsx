import { useRef, useContext } from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import { Box, Card, CardMedia, CardActionArea, Modal } from '@mui/material'
import Slider from 'react-slick'
import { CustomDivider, CustomLoading } from '../../common'
import MainContext from '../../../context'
import { useStyles } from '../../common/styles'
const ProductModal = ({ open, setOpen }) => {
  const { product, loading } = useContext(MainContext)

  const classes = useStyles()
  const slider = useRef(null)
  const settings = {
    dots: false,
    arrows: false,
    rtl: true,
  }
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <CustomDivider label="عکس های بیشتر" />
        <Grid container>
          <Grid
            xs={12}
            md={5}
            sx={{ display: 'flex', alignItems: 'center', px: 1 }}
          >
            <Box sx={{ width: 1 }}>
              <Slider {...settings} ref={slider}>
                {product.images &&
                  product.images.map((item, index) => (
                    <Box component="div" key={index} sx={{ width: 1 }}>
                      <CardMedia
                        component="img"
                        alt={product.name}
                        image={item}
                        sx={{ width: 1 }}
                      />
                    </Box>
                  ))}
              </Slider>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={7}
            sx={{
              overflowY: 'auto',
              mt: 2,
            }}
          >
            <Grid container className={classes.sliderDot}>
              {product.images &&
                product.images.map((item, index) => (
                  <Grid xs={12} md={3} lg={2} sx={{ p: 1 }} key={index}>
                    <Card
                      sx={{
                        maxWidth: 345,
                      }}
                    >
                      <CardActionArea
                        onClick={() => slider.current.slickGoTo(index)}
                      >
                        <CustomLoading
                          loading={loading}
                          height="100"
                          width="200"
                        >
                          <CardMedia
                            component="img"
                            height="100"
                            width="200"
                            alt={product.name}
                            image={item}
                          />
                        </CustomLoading>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Modal>
  )
}

export default ProductModal
