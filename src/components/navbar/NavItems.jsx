import { Typography, Slide, Button, Stack, Divider } from '@mui/material'

import { Link as RouterLink } from 'react-router-dom'
import { tabsData } from '../../constants/tabs.sidebar'
import { useState, useEffect } from 'react'
import { SecondaryButton, ThemeButton } from '../common'
const NavItems = ({ width }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      sx={{ ml: 1, height: 1 }}
    >
      <ThemeButton />
      <SecondaryButton />
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
            sx={{ width }}
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
