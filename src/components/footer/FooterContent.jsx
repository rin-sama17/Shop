import { Link as RouterLink } from 'react-router-dom'
import { Typography, Box, Divider, Stack } from '@mui/material'

import { ShowTime, Spinner } from '../common'
import { useGetPostsQuery, useGetDescriptionQuery } from '../../api'

const FooterContent = () => {
  const { data: posts = [] } = useGetPostsQuery()
  const { data: description, isLoading, isSuccess } = useGetDescriptionQuery()
  let content
  if (isLoading) {
    content = <Spinner />
  } else if (isSuccess) {
    content = (
      <Stack
        justifyContent="space-around"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          ml: 1,
          height: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
        }}
      >
        <Box sx={{ width: { xs: 4 / 5, sm: 1 / 3 } }}>
          <Typography variant="h6" color="secondary" sx={{ mb: 1 }}>
            فروشگاه من
          </Typography>
          <Typography variant="caption" color="white">
            {description.aboutUs}
          </Typography>
        </Box>
        <Box sx={{ width: { xs: 4 / 5, sm: 1 / 4 } }}>
          <Typography variant="h6" color="secondary" sx={{ mb: 1 }}>
            جدیدترین مجله های ما
          </Typography>
          {posts.slice(0, 4).map((item, index) => (
            <Stack alignItems="start" key={index} sx={{ mb: 2 }}>
              <Typography
                component={RouterLink}
                to={`/posts/${item.id}`}
                color="primary"
                sx={{ textDecoration: 'none' }}
                variant="caption"
              >
                {item.heading}
              </Typography>

              <ShowTime timestamp={item.date} />
            </Stack>
          ))}
        </Box>
        <Box>
          <Typography variant="h6" color="secondary" sx={{ mb: 1 }}>
            تماس با ما
          </Typography>
          <Typography variant="subtitle2" color="white" sx={{ mb: 1 }}>
            {description.contactUs}
          </Typography>
        </Box>
      </Stack>
    )
  }
  return content
}
export default FooterContent
