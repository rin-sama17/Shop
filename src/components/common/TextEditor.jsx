import { useEffect } from 'react'
import { Box, useTheme } from '@mui/material'

import React, { useState } from 'react'
import ReactQuill from 'react-quill'

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
    ['link', 'image', 'video'],
    ['clean'],
    [{ direction: 'rtl' }],
  ],
}
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
]
const TextEditor = ({ formik, name, readOnly, value }) => {
  const [quillValue, setQuillValue] = useState('')
  const theme = useTheme()
  useEffect(() => {
    if (formik && formik.values[`${name}`].length > 0) {
      setQuillValue(formik.values[`${name}`])
    }
  }, [])
  useEffect(() => {
    if (formik && formik.values[`${name}`] != quillValue) {
      formik.setFieldValue(name, quillValue)
    }
  }, [quillValue])

  return (
    <Box
      sx={{
        mt: 3,
        direction: 'rtl',
        position: 'relative',
        border: readOnly ? 0 : 1,
        fontFamily: theme.typography.fontFamily,
        '.ql-toolbar.ql-snow': {
          display: readOnly ? 'none' : 'block',
        },
      }}
    >
      {(value && value.lengh > 0) || readOnly ? (
        <ReactQuill
          style={{
            fontFamily: theme.typography.fontFamily,
          }}
          value={value}
        />
      ) : (
        <ReactQuill
          style={{
            fontFamily: theme.typography.fontFamily,
          }}
          theme="snow"
          value={quillValue}
          onChange={setQuillValue}
          modules={modules}
          formats={formats}
        />
      )}
    </Box>
  )
}
export default TextEditor
