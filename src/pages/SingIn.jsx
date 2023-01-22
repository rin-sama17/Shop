import {
  TextField,
  InputAdornment,
  Button,
  Box,
  Modal,
  Stack,
  Card,
} from '@mui/material'

import { toast } from 'react-toastify'
import { useTheme } from '@mui/material/styles'
import { useContext } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Phone, Face, Subject } from '@mui/icons-material'
import { useFormik } from 'formik'
import { userValidation } from '../components/singIn/validation/userValidation'
import MainContext from '../context'
const SingIn = () => {
  const theme = useTheme()
  const { singInModal, setSingInModal } = useContext(MainContext)
  const contactFieldNames = {
    fullname: '',
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
  console.log(formik)

  return (
    <Modal
      open={singInModal}
      onClose={() => setSingInModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Card sx={{ width: 1 / 2, p: 2, bgcolor: 'background.main' }}>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} sx={{ direction: 'ltr' }}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
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
  )
}
export default SingIn
