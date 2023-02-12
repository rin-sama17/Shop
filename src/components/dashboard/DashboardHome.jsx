import { useState, useContext } from 'react'
import {
  Box,
  CardMedia,
  Typography,
  TextField,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grow,
  Card,
} from '@mui/material'

import { BlockPicker } from 'react-color'
import { Logout, Edit, Feed, InsertDriveFile } from '@mui/icons-material'
import Grid from '@mui/material/Unstable_Grid2'
import { CustomIconButton, CustomDivider } from '../common'

const DashboardHome = ({ user }) => {
  const userData = [
    { title: 'نام', content: user.fullName },
    { title: 'محل سکونت', content: user.address },
    { title: 'شماره موبایل', content: user.phone },
  ]
  return (
    <Grid container sx={{ pt: 1 }}>
      <Grid
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <CardMedia
          sx={{
            height: 200,
            width: 200,
          }}
          alt={user.fullName}
          image={user.image}
        />
        <Box
          sx={{
            display: 'flex',
            width: 1,
            mt: 2,
            justifyContent: 'center',
          }}
        >
          <CustomIconButton
            title="ویرایش اطلاعات"
            color="info"
            icon={<Edit />}
          />
          <CustomIconButton title="خروج" color="error" icon={<Logout />} />
        </Box>
      </Grid>
      <Grid xs={12} md={8} sx={{ px: 2 }}>
        <Box sx={{ width: 1, my: 2 }}>
          {userData.map((data, index) => (
            <Box
              sx={{ width: 1, display: 'flex', textAlign: 'end', mb: 1 }}
              key={index}
            >
              <Box sx={{ width: '60%' }}>
                <Typography variant="caption" color="text.primary">
                  {data.content}
                </Typography>
              </Box>
              <Box sx={{ width: '40%' }}>
                <Typography variant="caption" color="secondary">
                  : {data.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <CustomDivider label="شخصی سازی" />

        <Grid
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Card sx={{ display: 'flex', p: 3 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              {/* <Button
                sx={{ mb: 2, color: secondaryColor }}
                onClick={handleColorChange}
              >
                تنظیم رنگ متن
              </Button>

              <BlockPicker
                color={secondaryColor}
                onChangeComplete={(color) => setSecondaryColor(color.hex)}
              />
              <Button
                sx={{ mt: 2, color: secondaryColor }}
                onClick={() => {
                  setSecondaryColor('#ce93d8')
                }}
              >
                رنگ پیشفرض
              </Button> */}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DashboardHome
