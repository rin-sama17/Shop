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
} from '@mui/material'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import { PostLoading } from '../loading'
import { useGetContractQuery } from '../../api'

const Contract = ({ contract }) => {
  // const { data: contract, isLoading, isSuccess } = useGetContractQuery({
  //   id: contractId,
  // })

  // if (isLoading) {
  //   return <PostLoading />
  // }

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
      <Paper elevation={8}>
        <CardActionArea component={Link} to={`/contract/read/${contract.id}`}>
          <Box
            sx={{
              pb: 2,
            }}
          >
            <CardContent>
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'space-between' }}
              >
                <Grid xs={12} sm={4}>
                  <img
                    alt={contract.name}
                    src={contract.photo}
                    style={{ margin: 'auto', width: '100%' }}
                  />
                </Grid>
                <Grid xs={12} sm={8}>
                  <Typography
                    color="secondary"
                    variant="subtitle1"
                    textAlign="left"
                    gutterBottom
                  >
                    {contract.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    <LinesEllipsis text={contract.discription} maxLine={6} />
                  </Typography>{' '}
                </Grid>
              </Grid>
            </CardContent>{' '}
          </Box>
        </CardActionArea>
      </Paper>
    </Box>
  )
}

export default Contract
