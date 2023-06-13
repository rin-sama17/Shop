import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Button, Card, Box } from '@mui/material'
import CategoriesPopover from './CategoriesPopover'
import Fade from '@mui/material/Fade'
export default function ShowCtegories() {
  const [open, setOpen] = useState(null)
  return (
    <div>
      <Button sx={{ color: 'btnNav.dark' }} onMouseOver={() => setOpen(true)}>
        <Typography>دسته بندی ها</Typography>
      </Button>
      {open && (
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              right: '0',
              top: '67px',
              width: 1,
              height: '100vh',
              bgcolor: 'bgBlur.main',
            }}
            onClick={() => setOpen(false)}
          >
            <Card
              sx={{
                m: '0 auto',
                width: '50%',
                p: 2,
                bgcolor: 'bgcolor.main',
                maxHeight: '70vh',
                overflowY: 'scroll',
              }}
              onMouseOver={() => setOpen(true)}
              onMouseOut={() => setOpen(false)}
            >
              <CategoriesPopover />
            </Card>
          </Box>
        </Fade>
      )}
    </div>
  )
}
