import {
  Skeleton,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
} from '@mui/material'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2'

const PostLoading = ({ postId }) => {
  return (
    <Grid
      xs={12}
      md={6}
      sx={{ display: 'flex', justifyContent: 'center', my: 2, width: 1 }}
    >
      <Card sx={{ width: 345, m: 2 }}>
        <CardActionArea component={Link} to={`/post/read/${postId}`}>
          <CardHeader
            avatar={
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            }
            title={
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            }
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
          />
          <Skeleton
            sx={{ height: 200 }}
            animation="wave"
            variant="rectangular"
          />

          <CardContent>
            <Skeleton animation="wave" height={10} sx={{ mb: 1 }} />
            <Skeleton animation="wave" height={10} width="50%" sx={{ mb: 2 }} />
            <Skeleton animation="wave" height={10} width="90%" sx={{ mb: 2 }} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default PostLoading
