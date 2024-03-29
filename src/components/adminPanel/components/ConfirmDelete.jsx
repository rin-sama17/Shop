import { Delete } from '@mui/icons-material'
import { Button, Card, Typography, Box, useTheme, Paper } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { confirmAlert } from 'react-confirm-alert'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

const ConfirmDelete = ({ itemDelete, item, isButton, setOpen }) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const font = theme.typography.fontFamily
  const itemName = item.name ? item.name : item.firstname

  const submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Paper elevation={12} sx={{ borderRadius: '5%' }}>
            <Card
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '5%',
                fontFamily: font,
              }}
            >
              <Typography variant="h4" color="secondary" sx={{ mb: 2 }}>
                {t('تایید')}
              </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle1"
                sx={{ mb: 1 }}
              >
                {t(`ایا میخواهید ${itemName} را حذف کنید؟`)}
              </Typography>
              <Box sx={{ display: 'flex', mt: 1 }}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    dispatch(itemDelete(item.id))
                    onClose()
                    if (setOpen) {
                      setOpen(false)
                    }
                  }}
                >
                  <Typography variant="subtitle1">{t('بله')}</Typography>
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    mr: 1,
                    bgcolor: 'tomato',
                    ':hover': { bgcolor: 'error.main' },
                  }}
                  onClick={onClose}
                >
                  <Typography variant="subtitle1">{t('نه')}</Typography>
                </Button>
              </Box>
            </Card>
          </Paper>
        )
      },
      overlayClassName: 'confirm-delete',
    })
  }
  return (
    <>
      {isButton ? (
        <Button
          fullWidth
          variant="contained"
          color="error"
          sx={{
            heigth: 1,
          }}
          onClick={submit}
        >
          {t('حذف')}
        </Button>
      ) : (
        <GridActionsCellItem
          icon={<Delete />}
          sx={{
            color: 'tomato',
          }}
          onClick={submit}
        />
      )}
    </>
  )
}

export default ConfirmDelete
