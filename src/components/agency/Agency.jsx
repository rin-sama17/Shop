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
} from '@mui/material'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import { AgencyLoading } from '../loading'
import { useGetAgencyQuery } from '../../api'

const Agency = ({ agencyId }) => {
  const { data = { agency: [] }, isSuccess } = useGetAgencyQuery(agencyId)
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
        width: '80%',
        m: '10px auto',
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: 1,
          borderRadius: 10,
          bgcolor: '#068AD2',
        }}
      >
        <CardActionArea
          component={Link}
          to={`/agencies/${agency.id}`}
          sx={{
            borderRadius: 10,
          }}
        >
          <Box sx={{}}>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Grid xs={12} sm={4}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 200,
                    width: 250,
                    borderRadius: 10,
                    borderRight: 13,
                    borderColor: '#FB9D23',
                  }}
                  alt={agency.name}
                  image={`http://localhost:8000/${agency.image}`}
                />
              </Grid>
              <Grid
                xs={12}
                sm={8}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  justifyContent: 'space-between',
                  py: 1,
                }}
              >
                <Box>
                  <Typography sx={{ color: 'white' }} variant="h6" gutterBottom>
                    {agency.name} :
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'whitesmoke' }}>
                    {agency.address}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'whitesmoke',
                    }}
                  >
                    شماره تماس:
                  </Typography>
                  <Typography
                    variant="subtitle1"
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
