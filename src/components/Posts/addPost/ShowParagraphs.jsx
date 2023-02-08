import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllParagraph } from '../../../reducers/postSlice'
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Box,
  Avatar,
  CardMedia,
} from '@mui/material'
import { Delete, Edit, ExpandMore } from '@mui/icons-material'
import { CustomIconButton } from '../../common'
import EditParagraph from './EditParagraph'

const ShowParagraphs = () => {
  const paragraph = useSelector(getAllParagraph)

  return (
    <>
      {paragraph.map((paragraph, index) => (
        <Accordion sx={{ mb: 2 }} key={index}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: 1,
              }}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                {paragraph.photo && (
                  <Avatar
                    sx={{ height: 40, width: 40, mr: 2 }}
                    alt={paragraph.title}
                    src={paragraph.photo}
                  />
                )}

                {paragraph.title}
              </Typography>
              <Box>
                <EditParagraph patagraphId={paragraph.id} />
                <CustomIconButton
                  title="حذف پاراگراف"
                  color="error"
                  icon={<Delete />}
                />
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Stack alignItems="center">
              {paragraph.photo && (
                <CardMedia
                  component="img"
                  sx={{ height: 150, width: 150 }}
                  alt={paragraph.photo}
                  image={paragraph.photo}
                />
              )}

              <Typography
                variant="body1"
                sx={{
                  width: '60%',
                  mt: 2,
                }}
                color="text.primary"
              >
                {paragraph.body}
              </Typography>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}

export default ShowParagraphs
