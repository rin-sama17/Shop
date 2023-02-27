import {
  TextField,
  InputAdornment,
  Button,
  Stack,
  Typography,
} from '@mui/material'

import { useState } from 'react'
import { toast } from 'react-toastify'

import Grid from '@mui/material/Unstable_Grid2'
import { Phone } from '@mui/icons-material'
import { useFormik } from 'formik'
import { userValidation } from '../components/validations/userValidation'
import { CustomModal } from '../components/common'

const Recovery = () => {
  const [open, setOpen] = useState(false)
  const contactFieldNames = {
    phone: '',
  }

  const formik = useFormik({
    initialValues: contactFieldNames,

    validationSchema: userValidation,
  })
  const handleUserForm = () => {
    if (formik.errors.fullname || formik.errors.phone) {
      toast.error('لطفا تمام فیلد ها را کامل کنید')
    }
  }

  return (
    <>
      <Stack direction="flex" alignItems="center" sx={{ mt: 2 }}>
        <Typography variant="caption" color="text.primary">
          رمز عبور خود را فراموش کرده اید؟
        </Typography>
        <Button color="secondary" sx={{ ml: 1 }} onClick={() => setOpen(true)}>
          بازیابی رمز عبور
        </Button>
      </Stack>
      <CustomModal open={open} setOpen={setOpen}>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} sx={{ direction: 'ltr' }}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="شماره موبایل"
                type="number"
                name="phone"
                color="secondary"
                variant="outlined"
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                value={formik.values?.phone}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="کد پیامک شده"
                disabled
                type="number"
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Button
              fullWidth
              type="submit"
              color="secondary"
              variant="contained"
              onClick={handleUserForm}
              sx={{ mt: 2, color: 'text.primary' }}
            >
              ثبت نام
            </Button>
          </Grid>
        </form>
      </CustomModal>
    </>
  )
}

export default Recovery
