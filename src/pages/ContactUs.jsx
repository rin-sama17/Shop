import { Box, Typography, CardMedia, CardActionArea } from '@mui/material'

import { useTranslation } from 'react-i18next'
import Grid from '@mui/material/Unstable_Grid2'
import { contactUs, eitaaActive } from '../assets'
import { Instagram, Telegram, LinkedIn } from '@mui/icons-material'

const chats = [
  {
    image: true,
    name: 'ایتا',
    icon: eitaaActive,
    filter:
      'invert(42%) sepia(93%) saturate(600%) hue-rotate(347deg) brightness(110%) contrast(110%)',
  },
  {
    name: 'تلگرام',
    icon: <Telegram />,
    to: 'https://t.me/rin_sama',
    color: 'info',
  },
  {
    name: 'اینستاگرام',
    icon: <Instagram />,
    to: 'https://t.me/rin_sama',
    color: 'primary',
  },

  {
    name: 'لینکدین',
    icon: <LinkedIn />,
    to: 'https://t.me/rin_sama',
    color: 'info',
  },
]

const ContactUs = () => {
  const { t } = useTranslation()
  return (
    <>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ mt: 2, mb: 1 }}
        textAlign="center"
      >
        {t('راه های ارتباطی')}
      </Typography>
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={contactUs}
              alt="not found"
              style={{
                height: '200px',
                width: '200px',
              }}
            />
          </Box>
        </Grid>
        <Grid
          xs={12}
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box>
            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {chats.map((item, index) => (
                <Grid xs={6} md={3} key={index}>
                  {item.image ? (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { md: 'flex-end', xs: 'flex-start' },
                      }}
                    >
                      <CardActionArea
                        sx={{
                          height: 50,
                          width: 50,
                          bgcolor: '#E0E8F6',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          transition: 'transform 0.2s ease-in-out',
                          ':hover': {
                            transform: 'scale(1.2)',
                          },
                        }}
                      >
                        <CardMedia
                          image={item.icon}
                          alt=""
                          sx={{
                            height: 25,
                            width: 25,
                            m: 'auto',
                            filter: item.filter,
                          }}
                        />
                      </CardActionArea>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{ mr: 2, ml: 1 }}
                      >
                        {t(item.name)}
                      </Typography>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { md: 'flex-end', xs: 'flex-start' },
                      }}
                      component="a"
                      href={item.to}
                      target="_blank"
                    >
                      <CardActionArea
                        sx={{
                          height: 50,
                          width: 50,
                          bgcolor: '#E0E8F6',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          transition: 'transform 0.2s ease-in-out',
                          color: `${item.color}.main`,
                          ':hover': {
                            transform: 'scale(1.2)',
                          },
                        }}
                      >
                        {item.icon}
                      </CardActionArea>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{ mr: 2, ml: 1 }}
                      >
                        {t(item.name)}
                      </Typography>
                    </Box>
                  )}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default ContactUs
