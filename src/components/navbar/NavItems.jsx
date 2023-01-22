import {
  Typography,
  Slide,
  Button,
  List,
  ListItem,
  Stack,
  Divider,
} from '@mui/material'

import { Link as RouterLink } from 'react-router-dom'
import { DarkMode } from '@mui/icons-material'
import { tabsData } from '../../constants/tabs.sidebar'
import { useState, useEffect } from 'react'
const NavItems = ({ direction, width }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])
  return (
    <Stack
      direction={direction}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{ ml: 1, height: 1 }}
    >
      <Button color="primary" size="small">
        <DarkMode />
        <Typography variant="caption">حالت شب</Typography>
      </Button>
      {tabsData.map((tab, index) => (
        <Slide
          direction="down"
          in={loading}
          key={index}
          style={{
            transitionDelay: loading ? `${index + 1}99ms` : '0ms',
          }}
        >
          <Button
            size="small"
            component={RouterLink}
            to={tab.to}
            sx={{ width: width }}
            color="secondary"
          >
            <Typography variant="caption">{tab.text}</Typography>
          </Button>
        </Slide>
      ))}
    </Stack>
  )
}
export default NavItems
