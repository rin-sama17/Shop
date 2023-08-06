import React, { useEffect, useState } from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import {
  Typography,
  Paper,
  InputAdornment,
  TextField,
  Collapse,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { TransitionGroup } from 'react-transition-group'
import { Agency } from '../components/agency'
import { useGetAgenciesQuery } from '../api'
import { PostLoading } from '../components/loading'
import { useTranslation } from 'react-i18next'
import { CustomNoRowsOverlay } from '../components/adminPanel/components'

const Agencies = () => {
  const [query, setQuery] = useState('')
  const [filtredAgencies, setFiltredAgencies] = useState([])
  const { data = { agencies: [] }, isSuccess } = useGetAgenciesQuery()
  const { t } = useTranslation()
  const agencies = data.agencies

  useEffect(() => {
    if (isSuccess) {
      setFiltredAgencies(agencies)
    }
  }, [isSuccess])
  useEffect(() => {
    const filterAgencies = agencies.filter((agency) =>
      agency.name.toLowerCase().includes(query),
    )
    setFiltredAgencies(filterAgencies)
  }, [query])

  return (
    <>
      <Paper elevation={5} sx={{ my: 5 }}>
        <Grid container>
          <Grid
            xs={12}
            md={6}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" gutterBottom color="secondary">
              {t('با خیال راحت خرید کنید')}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {t(
                'نمایندگان فرش لبخند 24 ساعته در تلاشند تا رضایت کامل مشتریان خود را جلب کنند',
              )}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{ display: 'flex', mt: 2 }}
            >
              {t('تعداد نمایندگی های فعال')}:
              <Typography variant="h5" color="secondary" sx={{ ml: 1 }}>
                {agencies.length}
              </Typography>
            </Typography>
          </Grid>

          <Grid
            xs={12}
            md={6}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
            }}
          >
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {t('جستجو میان نمایندگی ها')}:
            </Typography>
            <TextField
              variant="outlined"
              placeholder={t('جستجو')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{
                style: {
                  paddingLeft: 3,
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Paper>
      {!isSuccess ? (
        <PostLoading />
      ) : (
        <>
          {filtredAgencies.length > 0 ? (
            <TransitionGroup>
              {filtredAgencies.map((agency, index) => (
                <Collapse key={index}>
                  <Agency agencyId={agency.id} />
                </Collapse>
              ))}
            </TransitionGroup>
          ) : (
            <CustomNoRowsOverlay />
          )}
        </>
      )}
    </>
  )
}

export default Agencies
