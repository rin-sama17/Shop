import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllParagraph,
  paragraphDeleted,
} from '../../../reducers/paragraphSlice'
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
import { Delete, ExpandMore } from '@mui/icons-material'
import { CustomIconButton } from '../../common'
import { EditParagraph } from '../'
import { toast } from 'react-toastify'

const ShowParagraphs = () => {
  const paragraph = useSelector(selectAllParagraph)
  const dispatch = useDispatch()

  const handleDelete = (paragraph) => {
    dispatch(paragraphDeleted(paragraph.id))
    toast.success(`پاراگراف ${paragraph.title} با موفقیت حذف شد`)
  }

  return (
    <>
      {paragraph.map((paragraph, index) => (
        <Accordion sx={{ mb: 2, width: 1 }} key={index}>
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
                  onClick={() => handleDelete(paragraph)}
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
