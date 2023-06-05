'use client'

import { useEffect } from 'react'
import { Box } from '@mui/material'
import { useQuill } from 'react-quilljs'
var toolbarOptions = [
  [{ font: [] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
  ['link', 'image', 'video'],
  ['clean'],
  [{ direction: 'rtl' }],
]

const TextEditor = ({ formik, name, readOnly, value }) => {
  const { quill, quillRef } = useQuill({
    modules: {
      history: {
        delay: 2500,
      },
      toolbar: toolbarOptions,
    },
  })
  useEffect(() => {
    if (quill) {
      if (value && value.length > 0) {
        const paragraphs = JSON.parse(value)
        quill.setContents(paragraphs)
      } else if (readOnly) {
        quill.enable(false)
      }
      if (formik) {
        quill.on('text-change', () => {
          formik.setFieldValue(name, JSON.stringify(quill.getContents()))
        })
      }
    }
  }, [quill])
  return (
    <Box
      sx={{
        mt: 3,
        direction: 'rtl',
        position: 'relative',
        border: readOnly ? 0 : 1,
        '.ql-toolbar.ql-snow': {
          display: readOnly ? 'none' : 'block',
        },
      }}
    >
      <div ref={quillRef} />
    </Box>
  )
}

export default TextEditor
