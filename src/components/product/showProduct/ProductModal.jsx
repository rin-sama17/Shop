import { useRef, useState } from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import {
  Box,
  Card,
  CardMedia,
  CardActionArea,
  Modal,
  useMediaQuery,
  AvatarGroup,
  Button,
} from '@mui/material'
import Slider from 'react-slick'
import { useTheme } from '@mui/styles'

import { CustomDivider } from '../../common'
import { useStyles } from '../../common/styles'

const ProductModal = ({ product }) => {
  const [open, setOpen] = useState(false)
  const slider = useRef(null)

  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))
  const classes = useStyles()

  const settings = {
    dots: false,
    arrows: false,
    rtl: true,
  }

  return (
    <>
      <AvatarGroup
        variant="rounded"
        max={downMd ? 2 : 3}
        sx={{ my: 2, px: 1, alignItems: 'center' }}
        slotProps={{
          additionalAvatar: {
            sx: {
              ml: '1px !important',
              bgcolor: 'secondary.main',
              height: 50,
              width: 50,
            },
            onClick: () => setOpen(true),
          },
        }}
      >
        {product.images &&
          product.images.map((item, index) => (
            <Button
              sx={{ p: 0, width: 60, height: 60, mr: 1 }}
              key={index}
              onClick={() => setOpen(true)}
            >
              <CardMedia
                component="img"
                alt={product.name}
                image={item}
                width={60}
                height={60}
              />
            </Button>
          ))}{' '}
      </AvatarGroup>
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
                          <CardMedia
                            component="img"
                            height="100"
                            width="200"
                            alt={product.name}
                            image={item}
                          />
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Modal>
    </>
  )
}

export default ProductModal
