import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  useMediaQuery,
} from '@mui/material'
import { CustomIconButton } from '../common'
import { useTheme } from '@mui/material/styles'
import { TurnedInNot } from '@mui/icons-material'
import Grid from '@mui/material/Unstable_Grid2'
import { Link as RouterLink } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'

const Post = ({ post }) => {
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid
      xs={12}
      md={6}
      sx={{ display: 'flex', justifyContent: 'center', my: 2, width: 1 }}
    >
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea
          component={RouterLink}
          to={`/posts/${post.id}`}
          sx={{ height: 1 }}
        >
          <CardMedia
            component="img"
            height="200"
            width="200"
            alt={post.heading}
            image={post.thumbnail}
          />
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                color="text.primary"
                variant="body1"
                textAlign="left"
                gutterBottom
              >
                {post.heading}
              </Typography>

              <CustomIconButton
                title="علامت گذاری"
                color="info"
                icon={<TurnedInNot />}
              />
            </Box>
            <Typography color="text.primary" variant="body1" textAlign="left">
              <LinesEllipsis
                text={post.introduction}
                maxLine={downMd ? 3 : 5}
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
export default Post
