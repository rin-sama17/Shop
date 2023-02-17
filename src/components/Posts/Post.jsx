import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardHeader,
  Avatar,
} from '@mui/material'
import { CustomIconButton, ShowTime } from '../common'
import { TurnedInNot } from '@mui/icons-material'
import Grid from '@mui/material/Unstable_Grid2'
import { Link as RouterLink } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import { useGetPostQuery } from '../../api'
import PostLoading from '../loading/PostLoading'

const Post = ({ postId }) => {
  const { data: post, isLoading, isSuccess } = useGetPostQuery(postId)

  let content
  if (isLoading) {
    content = <PostLoading />
  } else if (isSuccess) {
    content = (
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardHeader
          avatar={
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          }
          action={
            <CustomIconButton
              title="علامت گذاری"
              color="info"
              icon={<TurnedInNot />}
            />
          }
          title="rin"
          subheader={<ShowTime timestamp={post.date} />}
        />
        <CardActionArea
          component={RouterLink}
          to={`/posts/${post.id}`}
          sx={{ height: 1 }}
        >
          <CardMedia
            component="img"
            height="200"
            image={post.thumbnail}
            alt={post.heading}
          />

          <CardContent>
            <Typography
              color="text.primary"
              variant="body1"
              textAlign="left"
              gutterBottom
            >
              {post.heading}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <LinesEllipsis text={post.introduction} maxLine={2} />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  return (
    <Grid
      xs={12}
      md={6}
      sx={{ display: 'flex', justifyContent: 'center', my: 2, width: 1 }}
    >
      {content}
    </Grid>
  )
}
export default Post
