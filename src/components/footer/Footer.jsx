import { Copyright } from '@mui/icons-material'
import { Typography, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { FooterContent } from '.'

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'bgcolor.dark',
        color: 'white',
        borderRadius: '40px 40px 0 0',
        borderTop: 10,
        borderColor: 'warning.main',
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
