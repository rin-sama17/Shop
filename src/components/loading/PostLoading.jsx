import {
  Skeleton,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
} from '@mui/material'
import { Link } from 'react-router-dom'
const PostLoading = ({ postId }) => {
  return (
    <CardActionArea component={Link} to={`/posts/${postId}`}>
      <Card sx={{ width: 345, m: 2 }}>
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
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

        <CardContent>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </CardContent>
      </Card>
    </CardActionArea>
  )
}

export default PostLoading
