import {
  Typography,
  TextField,
  InputAdornment,
  Button,
  CardActionArea,
  Box,
  Card,
  Menu,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from '@mui/material'
import { CustomDivider } from '../components/common'
import Grid from '@mui/material/Unstable_Grid2'
import { AddAPhoto, BurstMode } from '@mui/icons-material'
import { useState } from 'react'
const EditUser = () => {
  return (
    <Box
      sx={{
        width: 1,
        px: 3,
        py: 3,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}
    >
      <form autoComplete="off">
        <Grid container>
          <CustomDivider label="ویرایش پروفایل" color="info" />
          <Grid
            xs={12}
            md={3}
            sx={{
              mb: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1" color="text.primary" gutterBottom>
              عکس پروفایل
            </Typography>
            <Card sx={{ width: 200, height: 200, mb: 1 }}>
              <Button
                color="secondary"
                component="label"
                sx={{
                  height: 1,
                  width: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AddAPhoto />
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Card>
          </Grid>
          <Grid xs={12} md={9}>
            <Box>
              <Grid container spacing={2} sx={{ direction: 'ltr' }}>
                <Grid xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="نام و نام خانوادگی"
                    defaultValue="رین"
                    type="text"
                    color="secondary"
                  />
                </Grid>{' '}
                <Grid xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="شماره موبایل"
                    defaultValue="0903123432"
                    placeholder="09"
                    type="number"
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    multiline
                    rows={4}
                    label="ادرس"
                    defaultValue="نعمت اباد خیابان باقری کوچه فلان"
                    type="text"
                    color="secondary"
                    variant="outlined"
                  />
                  <Button
                    fullWidth
                    type="submit"
                    color="info"
                    variant="contained"
                    sx={{ mt: 2, color: 'black' }}
                  >
                    ارسال کن
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default EditUser
