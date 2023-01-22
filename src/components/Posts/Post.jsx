import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  IconButton,
  Tooltip,
  useMediaQuery,
} from '@mui/material'
import { CustomLoading, CustomIconButton } from '../common'
import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { TurnedInNot } from '@mui/icons-material'
import Grid from '@mui/material/Unstable_Grid2'
import { Link as RouterLink } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
{
  /* عکس موقت */
}
import { slider01 } from '../../assets'

const Post = ({ post, loading }) => {
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid
      xs={12}
      md={6}
      sx={{ display: 'flex', justifyContent: 'center', mb: 2, width: 1 }}
    >
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea
          component={RouterLink}
          to={`/posts/${post.id}`}
          sx={{ height: 1 }}
        >
          <CustomLoading
            loading={loading}
            height="200"
            width="300"
            variant="rectangular"
          >
            <CardMedia
              component="img"
              height="200"
              width="200"
              alt={post.title}
              image={slider01}
            />
          </CustomLoading>

          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <CustomLoading
                loading={loading}
                height={30}
                width="30%"
                style={{ marginBottom: 6 }}
              >
                <Typography
                  color="text.primary"
                  variant="body1"
                  textAlign="left"
                  gutterBottom
                >
                  {post.title}
                </Typography>
              </CustomLoading>

              <CustomLoading
                loading={loading}
                height="30px"
                width="30px"
                style={{ marginBottom: 6 }}
              >
                <CustomIconButton
                  title="علامت گذاری"
                  color="info"
                  icon={<TurnedInNot />}
                />
              </CustomLoading>
            </Box>
            <Typography color="text.primary" variant="body1" textAlign="left">
              <LinesEllipsis text={post.body} maxLine={downMd ? 3 : 5} />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
export default Post
