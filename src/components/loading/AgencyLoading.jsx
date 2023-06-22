import {
  Skeleton,
  Box,
  CardContent,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const AgencyLoading = () => {
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('sm'))
  const height = downMd ? 10 : 15
  return (
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
        }}
      >
        <Box>
          <Grid container sx={{ justifyContent: 'space-between' }}>
            <Grid xs={5.5} sm={5} md={4.5}>
              <Skeleton
                sx={{
                  height: { xs: 100, sm: 150, md: 200 },
                  width: { xs: 130, sm: 190, md: 250 },
                  borderRadius: '10%',
                  borderRight: downMd ? 6 : 13,
                  borderColor: 'gray',
                }}
                animation="wave"
                variant="rectangular"
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
                p: 2,
              }}
            >
              <Box>
                <Skeleton animation="wave" sx={{ mb: 1, height }} />
                <Skeleton animation="wave" sx={{ mb: 1, height }} />
                <Skeleton animation="wave" sx={{ mb: 1, height }} />
                <Skeleton animation="wave" width="80%" sx={{ mb: 1, height }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  )
}

export default AgencyLoading
