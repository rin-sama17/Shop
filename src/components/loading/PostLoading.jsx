import { Skeleton, Box, CardContent, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const PostLoading = () => {
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
      <Paper elevation={8} sx={{ width: 1 }}>
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
                <Skeleton
                  sx={{ height: 150 }}
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
          </CardContent>{' '}
        </Box>
      </Paper>
    </Box>
  )
}
// <Grid
//   xs={12}
//   md={6}
//   sx={{ display: 'flex', justifyContent: 'center', my: 2, width: 1 }}
// >
//   <Card sx={{ width: 345, m: 2 }}>
//     <CardActionArea component={Link} to={`/post/read/${postId}`}>
//       <CardHeader
//         avatar={
//           <Skeleton
//             animation="wave"
//             variant="circular"
//             width={40}
//             height={40}
//           />
//         }
//         title={
//           <Skeleton
//             animation="wave"
//             height={10}
//             width="80%"
//             style={{ marginBottom: 6 }}
//           />
//         }
//         subheader={<Skeleton animation="wave" height={10} width="40%" />}
//       />
//       <Skeleton
//         sx={{ height: 200 }}
//         animation="wave"
//         variant="rectangular"
//       />

//       <CardContent>
//         <Skeleton animation="wave" height={10} sx={{ mb: 1 }} />
//         <Skeleton animation="wave" height={10} width="50%" sx={{ mb: 2 }} />
//         <Skeleton animation="wave" height={10} width="90%" sx={{ mb: 2 }} />
//       </CardContent>
//     </CardActionArea>
//   </Card>
// </Grid>

export default PostLoading
