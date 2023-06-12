import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Button, Card, Box } from '@mui/material'
import CategoriesContent from './CategoriesContent'
import CategoriesPopover from './CategoriesPopover'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import { CustomModal } from '../common'
export default function ShowCtegories() {
  const [open, setOpen] = useState(null)

  return (
    <div>
      <Button sx={{ color: 'btnNav.dark' }} onMouseEnter={() => setOpen(true)}>
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
          >
            <Card
              onMouseLeave={() => setOpen(false)}
              sx={{
                m: '0 auto',
                width: '90%',
                p: 2,
                bgcolor: 'bgcolor.main',
                maxHeight: '80vh',
                overflowY: 'scroll',
              }}
            >
              <CategoriesPopover />
            </Card>
          </Box>
        </Fade>
      )}
    </div>
  )
}
