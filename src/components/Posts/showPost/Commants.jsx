import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Card, Divider, Stack } from '@mui/material'
import { CustomDivider } from '../../common'
import { useSelector } from 'react-redux'
import { getProductComments } from '../../../reducers/productSlice'
import { ShowTime } from '../../common'
const Commants = () => {
  const comments = [
    {
      title: 'jeijd',
      body: 'qedq',
    },
  ]
  return (
    <>
      <CustomDivider label="کامنت ها" />
      {comments &&
        comments.map((comment, index) => (
          <Card sx={{ display: 'flex', p: 4, mb: 3 }} key={index}>
            <Grid container sx={{ width: 1 }}>
              <Grid
                md={1}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'center',
                }}
              >
                {/*
                  <Avatar
                  src={product.images[0]}
                  sx={{ width: 60, height: 60, mb: 2 }}
                >
                  {' '}
                  {comment.user.username}
                </Avatar> 
                */}
              </Grid>
              <Grid
                xs={12}
                md={11}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                  px: 2,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  divider={<Divider orientation="vertical" flexItem />}
                  sx={{ ml: 1, width: 1 }}
                >
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {comment.title}
                  </Typography>
                  <ShowTime timestamp={comment.date} />
                </Stack>

                <Typography variant="body1" color="text.primary">
                  {comment.body}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        ))}
    </>
  )
}

export default Commants
