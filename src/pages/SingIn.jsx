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
import Grid from '@mui/material/Unstable_Grid2'
import {
  Phone,
  Face,
  Visibility,
  VisibilityOff,
  AccountCircle,
} from '@mui/icons-material'
import { useFormik } from 'formik'
import { userValidation } from '../components/singIn/validation/userValidation'
import { signedIn } from '../reducers/userSlice'
import { useDispatch } from 'react-redux'
import { CustomFields } from '../components/common'
const SingIn = () => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const contactFieldNames = {
    singInFullname: '',
    singInPhone: '',
    singInPwd: '',
    loginPhone: '',
    loginPwd: '',
  }
  const formik = useFormik({
    initialValues: contactFieldNames,
    validationSchema: userValidation,
  })
  const handleSingInForm = () => {
    const { singInFullname, singInPhone, singInPwd } = formik.values
    dispatch(signedIn(singInFullname, singInPhone, singInPwd))
    toast.success('کاربر با موفقیت ساخته شد')
  }

  const handleLoginForm = () => {
    const { loginPhone, loginPwd } = formik.values
  }

  return (
    <>
      <IconButton onClick={() => setOpen(true)} color="secondary">
        <AccountCircle />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(3px)',
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-evenly"
          sx={{ width: '90%', py: 4, px: 2, bgcolor: 'background.main' }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Box sx={{ width: 1 / 2, height: 1 / 2 }}>
            <form autoComplete="off">
              <Grid container spacing={2} sx={{ direction: 'ltr' }}>
                <CustomFields
                  md={6}
                  name="singInFullname"
                  label="نام و نام خانوادگی"
                  formik={formik}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face />
                      </InputAdornment>
                    ),
                  }}
                />

                <CustomFields
                  md={6}
                  label="شماره موبایل"
                  type="number"
                  name="singInPhone"
                  formik={formik}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Phone />
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomFields pwd name="singInPwd" formik={formik} />

                <Button
                  size="small"
                  color="secondary"
                  variant="contained"
                  onClick={handleSingInForm}
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
                <CustomFields
                  md={6}
                  label="شماره موبایل"
                  type="number"
                  name="loginPhone"
                  formik={formik}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Phone />
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomFields md={6} pwd formik={formik} name="loginPwd" />

                <Button
                  size="small"
                  type="submit"
                  color="secondary"
                  variant="contained"
                  onClick={handleLoginForm}
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
    </>
  )
}
export default SingIn
