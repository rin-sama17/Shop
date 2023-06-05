import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { FooterContent } from '.'

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'bgcolor.light',
      }}
    >
      <Grid
        container
        sx={{
          width: 1,
          height: 1,
          py: 10,
        }}
      >
        <FooterContent />
      </Grid>
    </Box>
  )
}
export default Footer
