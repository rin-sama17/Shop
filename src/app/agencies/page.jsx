import Grid from '@mui/material/Unstable_Grid2'
import {
  Typography,
  Paper,
  InputAdornment,
  TextField,
  Collapse,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { TransitionGroup } from 'react-transition-group'
import { getAgencies } from '@/api'
import Agency from '@/components/Agency'

const Agencies = async () => {
  const { agencies } = await getAgencies()
  return (
    <>
      <Paper elevation={5} sx={{ my: 5 }}>
        <Grid container>
          <Grid
            xs={12}
            md={6}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" gutterBottom color="secondary">
              با خیال راحت خرید کنید
            </Typography>
            <Typography variant="caption" color="text.secondary">
              نمایندگان فروشگاه فرش 24 ساعته در تلاشند تا رضایت کامل مشتریان خود
              را جلب کنند
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{ display: 'flex', mt: 2 }}
            >
              تعداد نمایندگی های فعال :
              <Typography variant="h5" color="secondary" sx={{ ml: 1 }}>
                {agencies.length}
              </Typography>
            </Typography>
          </Grid>

          <Grid
            xs={12}
            md={6}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
            }}
          >
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              جستجو میان نمایندگی ها:
            </Typography>
            <TextField
              variant="outlined"
              placeholder="جستجو"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{
                style: {
                  paddingLeft: 3,
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Paper>
      <TransitionGroup>
        {agencies.map((agencies, index) => (
          <Collapse key={index}>
            <Agency agenciesId={agencies.id} />
          </Collapse>
        ))}
      </TransitionGroup>
    </>
  )
}

export default Agencies
