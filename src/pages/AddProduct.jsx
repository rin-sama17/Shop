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
import { CustomDivider, SearchField } from '../components/common'
import Grid from '@mui/material/Unstable_Grid2'
import { AddAPhoto, BurstMode } from '@mui/icons-material'
import { useState } from 'react'

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Triton',
  'Umbriel',
]

const ITEM_HEIGHT = 48

const AddProduct = () => {
  const [category, setCategory] = useState('')

  const handleChange = (event) => {
    setCategory(event.target.value)
  }

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
          <CustomDivider label="محصول جدید" color="warning" />
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
            <Card sx={{ width: 200, height: 200, mb: 1 }}>
              <CardActionArea
                sx={{
                  height: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AddAPhoto />
              </CardActionArea>
            </Card>
            <Card sx={{ width: 50, height: 50 }}>
              <CardActionArea
                sx={{
                  height: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <BurstMode />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid xs={12} md={9}>
            <Box>
              <Grid container spacing={2} sx={{ direction: 'ltr' }}>
                <Grid xs={12} sm={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="نام محصول"
                    type="text"
                    color="secondary"
                  />
                </Grid>{' '}
                <Grid xs={12} sm={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="قیمت"
                    placeholder="به ریال"
                    type="number"
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={12} sm={4}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="به ریال"
                    label="تخفیف"
                    helperText={
                      <Typography variant="caption">
                        قیمت کالا بعد از تخفیف :
                      </Typography>
                    }
                    type="number"
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={12} sm={5}>
                  <FormControl fullWidth size="small">
                    <InputLabel>دسته بندی</InputLabel>
                    <Select
                      value={category}
                      label="دسته بندی"
                      onChange={handleChange}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: '30vh',
                        },
                      }}
                    >
                      <MenuItem>
                        <SearchField small />
                      </MenuItem>
                      {options.map((option) => (
                        <MenuItem value={option}> {option}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>{' '}
                <Grid xs={12} sm={7}>
                  <TextField
                    fullWidth
                    label="برچسب ها"
                    multiline
                    size="small"
                    helperText="برچسب ها را با / از هم جدا کنید"
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
                    label="توضیحات"
                    type="text"
                    color="secondary"
                    variant="outlined"
                  />
                  <Button
                    fullWidth
                    type="submit"
                    color="warning"
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

export default AddProduct
