import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import { c07 } from '../assets'

import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'

const data = {
  id: 7,
  name: 'نمایندگی',
  photo: c07,
  address:
    'اقرآباد، باقرآباد، استان تهران،باقرآباد قرچک، خیابان جانبازان،، جانباز4  مسیرها',
  phone: '090283893829',
  email: 'wer@gmail.com',

  discription:
    'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
}

const ShowAgency = () => {
  return (
    <Grid container sx={{ width: 1, py: 2 }}>
      <Grid xs={12} md={4} sx={{ px: 2 }}>
        <img src={data.photo} alt={data.name} />
      </Grid>
      <Grid xs={12} md={8}>
        {' '}
        <Typography
          variant="h6"
          color="text.primary"
          gutterBottom
          textAlign="left"
        >
          {data.name}
        </Typography>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography variant="caption" color="text.primary" sx={{ mr: 2 }}>
            ادرس:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {data.address}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography variant="caption" color="text.primary" sx={{ mr: 2 }}>
            شماره تماس:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {data.phone}
          </Typography>
        </Box>{' '}
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography variant="caption" color="text.primary" sx={{ mr: 2 }}>
            ایمیل:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {data.email}
          </Typography>
        </Box>{' '}
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography variant="caption" color="text.primary" sx={{ mr: 2 }}>
            توضیحات:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {data.discription}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ShowAgency
