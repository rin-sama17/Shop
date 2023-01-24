import {
  TextField,
  InputAdornment,
  Button,
  Modal,
  Stack,
  Card,
  Typography,
} from '@mui/material'

import { useState } from 'react'
import { toast } from 'react-toastify'

import Grid from '@mui/material/Unstable_Grid2'
import { Phone } from '@mui/icons-material'
import { useFormik } from 'formik'
import { userValidation } from '../components/singIn/validation/userValidation'

const Recovery = () => {
  const [open, setOpen] = useState(false)
  const contactFieldNames = {
    phone: '',
  }

  const formik = useFormik({
    initialValues: contactFieldNames,
    onSubmit: (values) => {
      console.log(values)
    },
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          height: 1,
          width: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(3px)',
        }}
      >
        <Card sx={{ width: 1 / 2, p: 2, bgcolor: 'background.main' }}>
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
        </Card>
      </Modal>
    </>
  )
}

export default Recovery
