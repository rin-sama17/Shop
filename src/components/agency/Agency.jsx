import React, { useEffect, useState } from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import {
  CardActionArea,
  Box,
  CardContent,
  Typography,
  Paper,
  InputAdornment,
  TextField,
  Fade,
  Collapse,
  CardMedia,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import { AgencyLoading } from '../loading'
import { useGetAgencyQuery } from '../../api'
import { useTranslation } from 'react-i18next'

const Agency = ({ agencyId }) => {
  const { data = { agency: [] }, isSuccess } = useGetAgencyQuery(agencyId)
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation()
  const agency = data.agency
  if (!isSuccess) {
    return <AgencyLoading />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 3,
        width: downMd ? '95%' : '80%',
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
              <Grid xs={5.5} sm={5} md={4.5}>
                <CardMedia
                  component="img"
                  sx={{
                    height: downMd ? 100 : 200,
                    width: downMd ? 130 : 250,
                    borderRadius: '10%',
                    borderRight: downMd ? 6 : 13,
                    borderColor: '#FB9D23',
                  }}
                  alt={agency.name}
                  image={`http://localhost:8000/${agency.image}`}
                />
              </Grid>
              <Grid
                xs={6.5}
                sm={5}
                md={7.5}
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
  )
}

export default Agency
