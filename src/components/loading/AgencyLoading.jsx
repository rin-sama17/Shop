import { Skeleton, Box, CardContent, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const AgencyLoading = () => {
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
        }}
      >
        <Box>
          <Grid container sx={{ justifyContent: 'space-between' }}>
            <Grid xs={12} sm={4}>
              <Skeleton
                sx={{
                  height: 200,
                  width: 250,
                  borderRadius: 10,
                  borderRight: 13,
                  borderColor: 'gray',
                }}
                animation="wave"
                variant="rectangular"
              />
            </Grid>
            <Grid
              xs={12}
              sm={8}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2,
              }}
            >
              <Skeleton
                animation="wave"
                height={25}
                width="40%"
                style={{ marginBottom: 6 }}
              />
              <Box>
                <Skeleton animation="wave" height={15} sx={{ mb: 1 }} />
                <Skeleton animation="wave" height={15} sx={{ mb: 1 }} />
                <Skeleton animation="wave" height={15} sx={{ mb: 1 }} />
                <Skeleton
                  animation="wave"
                  height={15}
                  width="80%"
                  sx={{ mb: 1 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  )
}

export default AgencyLoading
