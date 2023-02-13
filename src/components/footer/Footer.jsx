import { Typography, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { footerBg } from '../../assets'
import { Copyright } from '@mui/icons-material'
import FooterContent from './FooterContent'
const Footer = () => {
  return (
    <Box component="div">
      <Box
        sx={{
          backgroundImage: `url(${footerBg} )`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Grid
          container
          sx={{
            width: 1,
            height: 1,
            py: 10,
            bgcolor: 'bgBlur.main',
          }}
        >
          <FooterContent />
        </Grid>
      </Box>
      <Box sx={{ py: 3, px: 1, bgcolor: 'background.main' }}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Copyright sx={{ mr: 0.5, width: 15 }} />
          تمامی حقوق برای فروشگاه من محفوظ میباشد
        </Typography>
      </Box>
    </Box>
  )
}
export default Footer
