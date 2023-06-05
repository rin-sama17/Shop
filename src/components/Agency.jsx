import Grid from '@mui/material/Unstable_Grid2'
import {
  CardActionArea,
  Box,
  CardContent,
  Typography,
  Paper,
  Fade,
} from '@mui/material'
import LinesEllipsis from 'react-lines-ellipsis'
import { getAgency } from '@/api'
import Link from 'next/link'
const Agency = async ({ agencyId }) => {
  const { agency } = await getAgency(agencyId)

  return (
    <Fade>
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
          <CardActionArea component={Link} to={`/agency/${agency.id}`}>
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
                      alt={agency.name}
                      src={agency.photo}
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
                      {agency.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      gutterBotton
                    >
                      <LinesEllipsis text={agency.discription} maxLine={6} />
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Box>
          </CardActionArea>
        </Paper>
      </Box>
    </Fade>
  )
}

export default Agency
