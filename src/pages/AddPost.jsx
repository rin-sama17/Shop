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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { CustomDivider, SearchField } from '../components/common'
import Grid from '@mui/material/Unstable_Grid2'
import {
  AddAPhoto,
  BurstMode,
  ExpandMore,
  AddCircle,
} from '@mui/icons-material'
import { useState } from 'react'

const samples = [
  {
    title: 'فروشگاه من',
    body:
      '"فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار"',
  },
  {
    title: 'فروشگاه من',
    body:
      '"فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار"',
  },
  {
    title: 'فروشگاه من',
    body:
      '"فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار"',
  },
  {
    title: 'فروشگاه من',
    body:
      '"فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار"',
  },
]
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

const AddPost = () => {
  const [category, setCategory] = useState('')
  const [paragraph, setParagraph] = useState([])

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
          <CustomDivider label="پست جدید" color="success" />
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
          </Grid>
          <Grid xs={12} md={9}>
            <Box>
              <Grid container spacing={2} sx={{ direction: 'ltr' }}>
                <Grid xs={12} md={8}>
                  <TextField
                    fullWidth
                    size="small"
                    label="عنوان"
                    type="text"
                    color="secondary"
                  />
                </Grid>{' '}
                <Grid xs={12} md={4}>
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
                <Grid xs={12}>
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
                    label="مقدمه"
                    type="text"
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid xs={12} sx={{ mt: 2 }}>
            {samples.map((paragraph, index) => (
              <Accordion sx={{ mb: 2 }} key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{paragraph.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{paragraph.body}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <AddCircle />
                <Typography sx={{ ml: 1 }}>پاراگراف جدید</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
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
                    <Card
                      sx={{ width: 200, height: 200, mb: 1, bgcolor: 'gray' }}
                    >
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
                  </Grid>
                  <Grid xs={12} md={9}>
                    <Grid xs={12} md={4}>
                      <TextField
                        sx={{ mb: 2 }}
                        fullWidth
                        size="small"
                        label="عنوان"
                        type="text"
                        color="secondary"
                      />
                    </Grid>{' '}
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
                    </Grid>
                  </Grid>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, color: 'black' }}
                  >
                    افزودن پاراگراف
                  </Button>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Button
            fullWidth
            type="submit"
            color="success"
            variant="contained"
            sx={{ mt: 2, color: 'black' }}
          >
            ارسال کن
          </Button>
        </Grid>
      </form>
    </Box>
  )
}

export default AddPost
