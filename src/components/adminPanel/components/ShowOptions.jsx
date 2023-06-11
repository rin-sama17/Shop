import * as React from 'react'
import { MoreVert } from '@mui/icons-material'
import { IconButton, Menu, Divider, Typography, MenuItem } from '@mui/material'

const ITEM_HEIGHT = 48

export default function ShowOptions({ options, name }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.length > 0 ? (
          <>
            <Typography
              color="text.secondary"
              textAlign="center"
              variant="h6"
              sx={{ my: 1 }}
            >
              {name}
            </Typography>
            <Divider />
            {options.map((option) => (
              <MenuItem key={option.id} onClick={handleClose}>
                {option.name}
              </MenuItem>
            ))}
          </>
        ) : (
          <Typography
            color="text.secondary"
            textAlign="center"
            variant="h6"
            sx={{ my: 1 }}
          >
            نقشی وجود ندارد
          </Typography>
        )}
      </Menu>
    </div>
  )
}
