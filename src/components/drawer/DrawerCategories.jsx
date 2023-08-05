import { Fragment, useMemo } from 'react'
import { ExpandMore } from '@mui/icons-material'
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Divider,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { selectAllCategories } from '../../reducers/categorySlice'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ParentCategory = ({ parent, children, ligth, setOpen }) => {
  return (
    <Accordion>
      <AccordionSummary
        sx={{
          px: '10px !important',
          bgcolor: ligth ? 'bgSidebar.main' : 'bgSidebar.dark',
        }}
        expandIcon={<ExpandMore sx={{ color: 'white' }} />}
      >
        <Box
          sx={{
            width: 1,
            display: 'flex',
          }}
        >
          <Link
            to={`/products`}
            state={{ category: parent.id }}
            onClick={() => setOpen(false)}
          >
            {' '}
            <Typography
              sx={{
                ml: 2,
                color: 'btnSidebar.main',
                '&:hover': {
                  color: 'btnSidebar.light',
                  cursor: 'pointer',
                },
              }}
            >
              {parent.name}{' '}
            </Typography>
          </Link>
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={{ bgcolor: 'bgSidebar.main', p: 0 }}>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

const ChildCategory = ({ child, setOpen }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '90%',
        m: '0 0 0 auto',
        py: 2,
        color: 'btnSidebar.main',
        '&:hover': {
          color: 'btnSidebar.light',
          cursor: 'pointer',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Link
          to={`/products`}
          state={{ category: child.id }}
          onClick={() => setOpen(false)}
        >
          <Typography
            variant="subtitle2"
            sx={{
              ml: 1,
              color: 'btnSidebar.main',
              '&:hover': {
                color: 'btnSidebar.light',
                cursor: 'pointer',
              },
            }}
          >
            {child.name}
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}
const FindParents = ({ parent, categories, setOpen }) => {
  const children = useMemo(
    () => categories.filter((child) => child.category_id === parent.id),
    [categories, parent],
  )
  return (
    <>
      {children.length > 0 ? (
        <Box
          sx={{
            width: 1,
            bgcolor: 'bgSidebar.dark',
            '& .MuiAccordionDetails-root': {
              p: '0 !important',
              bgcolor: 'bgSidebar.dark',
            },
          }}
        >
          <Box
            sx={{
              width: '90%',
              m: '0 0 0 auto',
            }}
          >
            <ParentCategory parent={parent} setOpen={setOpen}>
              {children.map((child, index) => (
                <ChildCategory child={child} key={index} setOpen={setOpen} />
              ))}
            </ParentCategory>
          </Box>
        </Box>
      ) : (
        <ChildCategory child={parent} setOpen={setOpen} />
      )}
    </>
  )
}

const DrawerCategories = ({ setOpen }) => {
  const categories = useSelector(selectAllCategories)
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        '& .MuiAccordionDetails-root': {
          p: '0 !important',
        },
        '& .MuiPaper-root': {
          boxShadow: 'none !important',
        },
      }}
    >
      <Divider sx={{ my: 1 }} />
      <Typography
        variant="h6"
        sx={{
          m: 1,
          color: 'text.secondary',
        }}
      >
        {t('دسته بندی ها')}
      </Typography>
      {categories.map((layer1, index) => (
        <Box key={index}>
          {layer1.category_id === null && (
            <ParentCategory parent={layer1} ligth setOpen={setOpen}>
              {categories.map((child, index) => (
                <Fragment key={index}>
                  {child.category_id === layer1.id && (
                    <FindParents
                      parent={child}
                      categories={categories}
                      setOpen={setOpen}
                    />
                  )}
                </Fragment>
              ))}
            </ParentCategory>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default DrawerCategories
