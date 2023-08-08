import Grid from '@mui/material/Unstable_Grid2'
import {
  CardActionArea,
  Box,
  Typography,
  Paper,
  CardMedia,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { AgencyLoading } from '../loading'
import { useGetAgencyQuery } from '../../api'
import { useTranslation } from 'react-i18next'

const Agency = ({ agencyId }) => {
  const { data = { agency: {} }, isSuccess } = useGetAgencyQuery(agencyId)
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation()
  const agency = data.agency
  if (!isSuccess) {
    return <AgencyLoading />
  }

  return (
    <Fade in={isSuccess}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3,
          width: { xs: '89%', sm: '85%', md: '74%' },
          m: '10px auto',
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: 1,
            borderRadius: '21px',
            bgcolor: '#068AD2',
          }}
        >
          <CardActionArea
            component={Link}
            to={`/agencies/${agency.id}`}
            sx={{
              borderRadius: '10%',
            }}
          >
            <Box>
              <Grid container sx={{ justifyContent: 'space-between' }}>
                <Grid xs={5.5} sm={5} md={5}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: { xs: 100, sm: 150, md: 200 },
                      width: { xs: 130, sm: 190, md: 250 },
                      borderRadius: '10%',
                      borderRight: downMd ? 6 : 13,
                      borderColor: '#FB9D23',
                    }}
                    alt={agency.name}
                    image={`https://api.labkhand-carpet.ir/${agency.image}`}
                  />
                </Grid>
                <Grid
                  xs={6.5}
                  sm={7}
                  md={7}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    justifyContent: 'space-between',
                    py: 1,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ color: 'white' }}
                      variant={downMd ? 'subtitle2' : 'h6'}
                      gutterBottom
                    >
                      {agency.name} :
                    </Typography>
                    <Typography
                      variant={downMd ? 'caption' : 'subtitle1'}
                      sx={{ color: 'whitesmoke' }}
                    >
                      {agency.address}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex' }}>
                    <Typography
                      variant={downMd ? 'caption' : 'subtitle1'}
                      sx={{
                        color: 'whitesmoke',
                      }}
                    >
                      {t('شماره تماس')}:
                    </Typography>
                    <Typography
                      variant={downMd ? 'caption' : 'subtitle1'}
                      sx={{
                        color: 'whitesmoke',
                        direction: 'rtl',
                        ml: 1,
                      }}
                    >
                      {agency.phone}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardActionArea>
        </Paper>
      </Box>
    </Fade>
  )
}

export default Agency
