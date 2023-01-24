import {
  TextField,
  InputAdornment,
  Button,
  Modal,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  Stack,
  Divider,
  Typography,
} from '@mui/material'

import { Recovery } from './'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Phone, Face, Visibility, VisibilityOff } from '@mui/icons-material'
import { useFormik } from 'formik'
import { userValidation } from '../components/singIn/validation/userValidation'
import MainContext from '../context'
const SingIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { modal, setModal } = useContext(MainContext)
  console.log(modal)
  const contactFieldNames = {
    fullname: '',
    phone: '',
    pwd: '',
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
    <Modal
      open={modal}
      onClose={() => setModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(3px)',
      }}
    >
      {/* <LogIn /> */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="space-evenly"
        sx={{ width: '90%', py: 4, px: 2, bgcolor: 'background.main' }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box sx={{ width: 1 / 2, height: 1 / 2 }}>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ direction: 'ltr' }}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="نام و نام خانوادگی"
                  type="text"
                  name="fullname"
                  color="secondary"
                  error={Boolean(
                    formik.touched.fullname && formik.errors.fullname,
                  )}
                  value={formik.values?.fullname}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>{' '}
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
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
              <Grid xs={12}>
                <FormControl sx={{ width: 1 }} variant="outlined" size="small">
                  <InputLabel>پسورد</InputLabel>
                  <OutlinedInput
                    name="pwd"
                    value={formik.values?.pwd}
                    onChange={formik.handleChange}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() =>
                            setShowPassword((prevShow) => !prevShow)
                          }
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="پسورد"
                  />
                </FormControl>
              </Grid>
              <Button
                size="small"
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
        </Box>

        <Box sx={{ width: 1 / 2 }}>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ direction: 'ltr' }}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
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
                <FormControl sx={{ width: 1 }} variant="outlined" size="small">
                  <InputLabel>پسورد</InputLabel>
                  <OutlinedInput
                    name="pwd"
                    value={formik.values?.pwd}
                    onChange={formik.handleChange}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() =>
                            setShowPassword((prevShow) => !prevShow)
                          }
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="پسورد"
                  />
                </FormControl>
              </Grid>

              <Button
                size="small"
                type="submit"
                color="secondary"
                variant="contained"
                onClick={handleUserForm}
                sx={{ mt: 2, color: 'text.primary' }}
              >
                ورود
              </Button>
            </Grid>
          </form>
          <Recovery />
        </Box>
      </Stack>
    </Modal>
  )
}
export default SingIn
